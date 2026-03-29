"use client";

import Link from "next/link";
import { useGameStore } from "@/lib/store";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/puzzles", label: "PUZZLES" },
  { href: "/room", label: "ROOM" },
  { href: "/shop", label: "SHOP" },
  { href: "/achievements", label: "BADGES" },
];

export function Header() {
  const { user } = useGameStore();

  return (
    <header className="border-b border-tui-border sticky top-0 bg-tui-bg z-50">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-wider">
            <span className="text-tui-fg">PUZZLE</span>
            <span className="text-tui-accent">HOUSE</span>
          </Link>
          
          <div className="flex items-center gap-4 text-sm">
            <span className="text-tui-dim">$</span>
            <span className="text-tui-warning font-bold">{user.coins}</span>
            <span className="text-tui-dim">LVL</span>
            <span className="text-tui-success font-bold">{user.level}</span>
          </div>
        </div>

        <nav className="flex gap-2 mt-3 overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1 text-xs border border-tui-border hover:bg-tui-fg hover:text-tui-bg transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
