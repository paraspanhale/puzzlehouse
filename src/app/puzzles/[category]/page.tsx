"use client";

import { Header } from "@/components/layout/header";
import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { getPuzzlesByCategory } from "@/lib/puzzles";
import { useGameStore } from "@/lib/store";
import { CATEGORIES, Puzzle } from "@/lib/types";
import Link from "next/link";

export default function CategoryPuzzles() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.category as string;
  const puzzles = getPuzzlesByCategory(categoryId);
  const category = CATEGORIES.find(c => c.id === categoryId);
  
  const { user, solvePuzzle, addCoins, addXp } = useGameStore();
  const [activePuzzle, setActivePuzzle] = useState<typeof puzzles[0] | null>(null);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<{ correct: boolean; score: number; wasAlreadySolved: boolean } | null>(null);
  const [memoryPhase, setMemoryPhase] = useState<"show" | "hide" | "input">("show");
  const [countdown, setCountdown] = useState(0);
  const [categoryCompleted, setCategoryCompleted] = useState(false);

  const isSolved = (puzzleId: string) => user.puzzlesSolved.includes(puzzleId);

  const getMemoryTime = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return 3;
      case "medium": return 5;
      case "hard": return 7;
      default: return 3;
    }
  };

  const findNextPuzzle = (currentId: string): Puzzle | null => {
    const currentIndex = puzzles.findIndex(p => p.id === currentId);
    for (let i = currentIndex + 1; i < puzzles.length; i++) {
      if (!isSolved(puzzles[i].id)) {
        return puzzles[i];
      }
    }
    for (let i = 0; i < currentIndex; i++) {
      if (!isSolved(puzzles[i].id)) {
        return puzzles[i];
      }
    }
    return null;
  };

  const startMemoryPuzzle = (puzzle: typeof puzzles[0]) => {
    if (puzzle.category === "memory") {
      setMemoryPhase("show");
      const time = getMemoryTime(puzzle.difficulty);
      setCountdown(time);
    } else {
      setMemoryPhase("input");
    }
    setActivePuzzle(puzzle);
    setAnswer("");
    setResult(null);
    setCategoryCompleted(false);
  };

  useEffect(() => {
    if (activePuzzle?.category === "memory" && memoryPhase === "show" && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (activePuzzle?.category === "memory" && memoryPhase === "show" && countdown === 0) {
      setMemoryPhase("hide");
      setTimeout(() => setMemoryPhase("input"), 1000);
    }
  }, [countdown, memoryPhase, activePuzzle]);

  const handleSubmit = () => {
    if (!activePuzzle) return;

    const userAns = answer.toLowerCase().trim();
    const correctAns = activePuzzle.answer.toLowerCase().trim();
    
    const isCorrect = userAns === correctAns || 
      activePuzzle.type === "choice" && userAns === correctAns;

    const score = isCorrect ? 100 : 0;
    const alreadySolved = isSolved(activePuzzle.id);

    if (isCorrect && !alreadySolved) {
      solvePuzzle(activePuzzle.id, score);
      addCoins(activePuzzle.xpReward);
      addXp(activePuzzle.xpReward);
    }

    setResult({ correct: isCorrect, score, wasAlreadySolved: alreadySolved });

    setTimeout(() => {
      setResult(null);
      setAnswer("");
      
      const nextPuzzle = findNextPuzzle(activePuzzle.id);
      if (nextPuzzle) {
        startMemoryPuzzle(nextPuzzle);
      } else {
        setActivePuzzle(null);
        setCategoryCompleted(true);
        setMemoryPhase("show");
        setCountdown(0);
      }
    }, 2000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && answer && !result) {
      handleSubmit();
    }
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-tui-bg">
        <Header />
        <div className="p-6 text-center">
          <p>Category not found</p>
        </div>
      </div>
    );
  }

  const unsolvedCount = puzzles.filter(p => !isSolved(p.id)).length;

  return (
    <div className="min-h-screen bg-tui-bg">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/puzzles" className="text-tui-dim hover:text-tui-fg">←</Link>
          <span className="text-2xl">{category.icon}</span>
          <h1 className="text-xl font-bold">{category.name} Puzzles</h1>
        </div>

        <div className="text-tui-dim mb-4">
          {unsolvedCount} puzzles remaining
        </div>

        {categoryCompleted && (
          <div className="mb-6 p-4 border border-tui-success bg-tui-success/10 text-center">
            <p className="text-tui-success font-bold">Category Complete!</p>
            <p className="text-tui-dim text-sm">All puzzles solved in this category</p>
          </div>
        )}

        <div className="grid gap-3">
          {puzzles.map((puzzle, idx) => {
            const solved = isSolved(puzzle.id);
            
            return (
              <div 
                key={puzzle.id}
                className={`tui-card ${solved ? "border-tui-success" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-tui-dim text-sm">[{idx + 1}]</span>
                      <span className="font-bold">{puzzle.title}</span>
                      {solved && <span className="text-tui-success text-xs">✓</span>}
                    </div>
                    <div className="text-xs text-tui-dim mt-1">
                      {puzzle.difficulty} • {puzzle.xpReward} XP
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => startMemoryPuzzle(puzzle)}
                    className="tui-button text-sm"
                  >
                    {solved ? "Replay" : "Solve"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {activePuzzle && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="tui-card max-w-lg w-full">
              {result ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">
                    {result.correct ? "✓" : "✗"}
                  </div>
                  <div className="text-xl font-bold mb-2">
                    {result.correct ? "Correct!" : "Wrong!"}
                  </div>
                  {result.correct && result.wasAlreadySolved && (
                    <div className="text-tui-dim text-sm">(Already solved - no extra rewards)</div>
                  )}
                  <div className="text-tui-dim">
                    Answer: {activePuzzle.answer}
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-4 pb-4 border-b border-tui-border">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold">{activePuzzle.title}</h3>
                        <p className="text-sm text-tui-dim">{activePuzzle.xpReward} XP</p>
                      </div>
                      <button 
                        onClick={() => { setActivePuzzle(null); setMemoryPhase("show"); setCountdown(0); }}
                        className="text-tui-dim hover:text-tui-fg"
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  <div className="mb-4 p-4 bg-tui-border/30 min-h-[80px] flex items-center justify-center">
                    {activePuzzle.category === "memory" ? (
                      memoryPhase === "show" ? (
                        <div className="text-center">
                          <p className="text-lg mb-2">MEMORIZE THIS:</p>
                          <p className="text-2xl font-bold">{activePuzzle.question.replace("Memorize: ", "").replace("Remember: ", "")}</p>
                          <p className="text-tui-warning mt-2">Hiding in {countdown}...</p>
                        </div>
                      ) : memoryPhase === "hide" ? (
                        <div className="text-center">
                          <p className="text-lg">NOW RECALL...</p>
                          <p className="text-tui-dim text-sm mt-2">What was the sequence?</p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <p className="text-lg">Enter your answer</p>
                          <p className="text-tui-dim text-sm mt-2">Recall what you memorized</p>
                        </div>
                      )
                    ) : (
                      <p className="text-lg">{activePuzzle.question}</p>
                    )}
                  </div>

                  {(memoryPhase === "input" || activePuzzle.category !== "memory") && (
                    activePuzzle.type === "choice" || activePuzzle.type === "truefalse" ? (
                      <div className="space-y-2 mb-4">
                        {activePuzzle.options ? activePuzzle.options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setAnswer(opt.toLowerCase())}
                            onKeyDown={handleKeyDown}
                            className={`w-full p-3 text-left border ${
                              answer === opt.toLowerCase()
                                ? "border-tui-accent bg-tui-accent/10"
                                : "border-tui-border hover:border-tui-dim"
                            }`}
                          >
                            {opt}
                          </button>
                        )) : (
                          <>
                            <button
                              onClick={() => setAnswer("true")}
                              className={`w-full p-3 border ${
                                answer === "true"
                                  ? "border-tui-success bg-tui-success/10"
                                  : "border-tui-border hover:border-tui-dim"
                              }`}
                            >
                              TRUE
                            </button>
                            <button
                              onClick={() => setAnswer("false")}
                              className={`w-full p-3 border ${
                                answer === "false"
                                  ? "border-tui-error bg-tui-error/10"
                                  : "border-tui-border hover:border-tui-dim"
                              }`}
                            >
                              FALSE
                            </button>
                          </>
                        )}
                      </div>
                    ) : (
                      <input
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your answer..."
                        className="tui-input w-full mb-4"
                        autoFocus
                      />
                    )
                  )}

                  {(memoryPhase === "input" || activePuzzle.category !== "memory") && (
                    <button 
                      onClick={handleSubmit}
                      disabled={!answer}
                      className="tui-button-primary w-full disabled:opacity-50"
                    >
                      Submit Answer
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
