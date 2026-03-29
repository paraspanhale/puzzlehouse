"use client";

import Link from "next/link";
import { useGameStore } from "@/lib/store";
import { achievementsList } from "@/lib/items";
import { Header } from "@/components/layout/header";

export default function AchievementsPage() {
  const { user } = useGameStore();

  const getProgress = (achievement: typeof achievementsList[0]) => {
    switch (achievement.type) {
      case "puzzles":
        return user.puzzlesSolved.length;
      case "perfect":
        return user.perfectScores.length;
      case "streak":
        return user.streak;
      case "coins":
        return user.coins;
      default:
        return 0;
    }
  };

  const unlockedCount = achievementsList.filter(ach => 
    getProgress(ach) >= ach.requirement
  ).length;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-mono">
      <Header />
      
      <main className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 tracking-wider">_ACHIEVEMENTS</h1>
          <p className="text-[#888]">
            {unlockedCount} / {achievementsList.length} unlocked
          </p>
        </div>

        <div className="grid gap-4">
          {achievementsList.map(achievement => {
            const progress = getProgress(achievement);
            const unlocked = progress >= achievement.requirement;
            const percentage = Math.min((progress / achievement.requirement) * 100, 100);
            
            return (
              <div
                key={achievement.id}
                className={`border p-4 ${
                  unlocked 
                    ? "border-[#e5e5e5] bg-[#1a1a1a]" 
                    : "border-[#333] opacity-60"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`text-3xl ${unlocked ? "" : "grayscale"}`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold">
                      {unlocked ? achievement.name : "???"}
                    </h3>
                    <p className="text-sm text-[#888]">
                      {unlocked ? achievement.description : "Keep playing to unlock"}
                    </p>
                  </div>
                  <div className="text-right">
                    {unlocked ? (
                      <div className="text-[#888]">[_UNLOCKED]</div>
                    ) : (
                      <div className="text-sm">
                        {progress} / {achievement.requirement}
                      </div>
                    )}
                  </div>
                </div>
                
                {!unlocked && (
                  <div className="mt-3 h-2 border border-[#333]">
                    <div 
                      className="h-full bg-[#e5e5e5]"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-[#333]">
          <Link href="/" className="text-[#888] hover:text-[#e5e5e5]">
            &lt; Back to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
