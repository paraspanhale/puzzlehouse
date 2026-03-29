"use client";

import { useState } from "react";
import Link from "next/link";
import { useGameStore } from "@/lib/store";
import { shopItems } from "@/lib/items";
import { Header } from "@/components/layout/header";

const categories = ["all", "furniture", "decor", "collectible"];

export default function ShopPage() {
  const { user, buyItem } = useGameStore();
  const [filter, setFilter] = useState("all");
  const [message, setMessage] = useState("");

  const filteredItems = filter === "all" 
    ? shopItems 
    : shopItems.filter(item => item.category === filter);

  const handleBuy = (itemId: string, price: number, name: string) => {
    if (user.inventory.includes(itemId)) {
      setMessage(`Cannot purchase ${name} - already owned`);
      setTimeout(() => setMessage(""), 3000);
      return;
    }
    const success = buyItem(itemId, price);
    if (success) {
      setMessage(`Purchased ${name}!`);
    } else {
      setMessage(`Cannot purchase ${name} - not enough coins`);
    }
    setTimeout(() => setMessage(""), 3000);
  };

  const isOwned = (itemId: string) => user.inventory.includes(itemId);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-mono">
      <Header />
      
      <main className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 tracking-wider">_SHOP</h1>
          <p className="text-[#888]">Spend your coins on pixel art collectibles</p>
        </div>

        {message && (
          <div className="mb-6 p-3 border border-[#e5e5e5] bg-[#1a1a1a]">
            &gt; {message}
          </div>
        )}

        <div className="flex gap-2 mb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 border transition-colors ${
                filter === cat 
                  ? "bg-[#e5e5e5] text-[#0a0a0a]" 
                  : "border-[#e5e5e5] hover:bg-[#1a1a1a]"
              }`}
            >
              [{cat.toUpperCase()}]
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredItems.map(item => {
            const owned = isOwned(item.id);
            const canAfford = user.coins >= item.price;
            
            return (
              <div
                key={item.id}
                className={`border p-4 transition-colors ${
                  owned 
                    ? "border-[#888] bg-[#111]" 
                    : "border-[#e5e5e5] hover:bg-[#1a1a1a]"
                }`}
              >
                <div className="text-4xl mb-2">{item.emoji}</div>
                <h3 className="font-bold mb-1">{item.name}</h3>
                <p className="text-sm text-[#888] mb-3">{item.description}</p>
                
                {owned ? (
                  <div className="text-[#888] text-sm">[_OWNED]</div>
                ) : (
                  <button
                    onClick={() => handleBuy(item.id, item.price, item.name)}
                    disabled={!canAfford}
                    className={`w-full py-2 text-sm border transition-colors ${
                      canAfford
                        ? "border-[#e5e5e5] hover:bg-[#e5e5e5] hover:text-[#0a0a0a]"
                        : "border-[#555] text-[#555] cursor-not-allowed"
                    }`}
                  >
                    {canAfford ? `[BUY ${item.price} COINS]` : `[NEED ${item.price} COINS]`}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-[#333]">
          <Link href="/room" className="text-[#888] hover:text-[#e5e5e5]">
            &lt; View Your Room
          </Link>
        </div>
      </main>
    </div>
  );
}
