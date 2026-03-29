export interface Puzzle {
  id: string;
  category: string;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  xpReward: number;
  type: "input" | "choice" | "truefalse" | "math";
  question: string;
  answer: string;
  options?: string[];
}

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  emoji: string;
  category: "furniture" | "decor" | "collectible";
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: number;
  type: "puzzles" | "streak" | "perfect" | "coins";
}

export interface UserData {
  coins: number;
  xp: number;
  level: number;
  streak: number;
  lastPlayed: string | null;
  puzzlesSolved: string[];
  perfectScores: string[];
  achievements: string[];
  inventory: string[];
  totalPuzzles: number;
  dailyChallenge: { date: string; completed: boolean } | null;
}

export const CATEGORIES = [
  { id: "math", name: "Math", icon: "🔢", color: "#6366f1" },
  { id: "logic", name: "Logic", icon: "🧠", color: "#8b5cf6" },
  { id: "memory", name: "Memory", icon: "🎯", color: "#06b6d4" },
  { id: "word", name: "Word", icon: "📝", color: "#f59e0b" },
] as const;
