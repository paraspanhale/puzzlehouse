"use client";

import { Header } from "@/components/layout/header";
import { useGameStore } from "@/lib/store";
import Link from "next/link";
import { CATEGORIES } from "@/lib/types";
import { getPuzzlesByCategory } from "@/lib/puzzles";

export default function HomePage() {
  const { user } = useGameStore();
  const solvedCount = user.puzzlesSolved.length;
  const progressPercent = Math.round((solvedCount / user.totalPuzzles) * 100);

  return (
    <div className="min-h-screen bg-tui-bg">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">
            Welcome back, <span className="text-tui-accent">Player</span>
          </h1>
          <p className="text-tui-dim text-sm">
            {solvedCount} puzzles solved | {user.streak} day streak
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="tui-card text-center">
            <div className="text-2xl font-bold text-tui-warning">${user.coins}</div>
            <div className="text-xs text-tui-dim">COINS</div>
          </div>
          <div className="tui-card text-center">
            <div className="text-2xl font-bold text-tui-success">{user.xp}</div>
            <div className="text-xs text-tui-dim">XP</div>
          </div>
          <div className="tui-card text-center">
            <div className="text-2xl font-bold text-tui-accent">{user.level}</div>
            <div className="text-xs text-tui-dim">LEVEL</div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-tui-dim">Progress</span>
            <span className="text-tui-accent">{progressPercent}%</span>
          </div>
          <div className="h-4 bg-tui-border rounded overflow-hidden">
            <div 
              className="h-full bg-tui-accent transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3 border-b border-tui-border pb-2">
            Categories
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {CATEGORIES.map((cat) => {
              const puzzles = getPuzzlesByCategory(cat.id);
              const solved = puzzles.filter(p => user.puzzlesSolved.includes(p.id)).length;
              
              return (
                <Link key={cat.id} href={`/puzzles/${cat.id}`}>
                  <div className="tui-card-hover">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{cat.icon}</span>
                      <div>
                        <div className="font-bold">{cat.name}</div>
                        <div className="text-xs text-tui-dim">{solved}/{puzzles.length} solved</div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Link href="/room">
            <div className="tui-card-hover text-center py-4">
              <div className="text-3xl mb-1">🏠</div>
              <div className="font-bold">Your Room</div>
              <div className="text-xs text-tui-dim">{user.inventory.length} items</div>
            </div>
          </Link>
          
          <Link href="/shop">
            <div className="tui-card-hover text-center py-4">
              <div className="text-3xl mb-1">🛒</div>
              <div className="font-bold">Shop</div>
              <div className="text-xs text-tui-dim">Buy items</div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
