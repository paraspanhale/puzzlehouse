import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserData } from "./types";

interface GameStore {
  user: UserData;
  addCoins: (amount: number) => void;
  addXp: (amount: number) => void;
  solvePuzzle: (puzzleId: string, score: number) => void;
  buyItem: (itemId: string, price: number) => boolean;
  updateStreak: () => void;
  resetData: () => void;
}

const defaultUser: UserData = {
  coins: 0,
  xp: 0,
  level: 1,
  streak: 0,
  lastPlayed: null,
  puzzlesSolved: [],
  perfectScores: [],
  achievements: [],
  inventory: [],
  totalPuzzles: 55,
  dailyChallenge: null,
};

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      user: defaultUser,

      addCoins: (amount: number) => {
        set((state) => ({
          user: { ...state.user, coins: state.user.coins + amount },
        }));
      },

      addXp: (amount: number) => {
        set((state) => {
          const newXp = state.user.xp + amount;
          let newLevel = state.user.level;
          const xpForLevel = (level: number) => level * 100;
          
          while (newXp >= xpForLevel(newLevel)) {
            newLevel++;
          }
          
          return {
            user: { ...state.user, xp: newXp, level: newLevel },
          };
        });
      },

      solvePuzzle: (puzzleId: string, score: number) => {
        set((state) => {
          const alreadySolved = state.user.puzzlesSolved.includes(puzzleId);
          if (alreadySolved) return state;

          const isPerfect = score === 100;
          const newPuzzles = [...state.user.puzzlesSolved, puzzleId];
          const newPerfect = isPerfect 
            ? [...state.user.perfectScores, puzzleId]
            : state.user.perfectScores;

          return {
            user: {
              ...state.user,
              puzzlesSolved: newPuzzles,
              perfectScores: newPerfect,
              lastPlayed: new Date().toISOString().split('T')[0],
            },
          };
        });
      },

      buyItem: (itemId: string, price: number) => {
        const state = get();
        if (state.user.coins < price) return false;
        if (state.user.inventory.includes(itemId)) return false;

        set((state) => ({
          user: {
            ...state.user,
            coins: state.user.coins - price,
            inventory: [...state.user.inventory, itemId],
          },
        }));
        return true;
      },

      updateStreak: () => {
        set((state) => {
          const today = new Date().toISOString().split('T')[0];
          const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
          
          let newStreak = state.user.streak;
          if (state.user.lastPlayed === yesterday) {
            newStreak++;
          } else if (state.user.lastPlayed !== today) {
            newStreak = 1;
          }

          return {
            user: { ...state.user, streak: newStreak },
          };
        });
      },

      resetData: () => {
        set({ user: defaultUser });
      },
    }),
    {
      name: "puzzlehouse-storage",
    }
  )
);
