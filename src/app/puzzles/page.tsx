"use client";

import { Header } from "@/components/layout/header";
import Link from "next/link";
import { CATEGORIES } from "@/lib/types";

export default function PuzzlesPage() {
  return (
    <div className="min-h-screen bg-tui-bg">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-2">Puzzles</h1>
        <p className="text-tui-dim text-sm mb-6">Choose a category</p>

        <div className="grid grid-cols-2 gap-4">
          {CATEGORIES.map((cat) => (
            <Link key={cat.id} href={`/puzzles/${cat.id}`}>
              <div className="tui-card-hover py-6 text-center">
                <div className="text-4xl mb-2">{cat.icon}</div>
                <div className="font-bold text-lg">{cat.name}</div>
                <div className="text-xs text-tui-dim mt-1">Click to play</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6">
          <Link href="/">
            <button className="tui-button w-full">
              ← Back to Home
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
