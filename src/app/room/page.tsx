"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { useGameStore } from "@/lib/store";
import { getItemById } from "@/lib/items";
import { Header } from "@/components/layout/header";
import html2canvas from "html2canvas";

export default function RoomPage() {
  const { user } = useGameStore();
  const roomRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState(false);

  const ownedItems = user.inventory
    .map(id => getItemById(id))
    .filter(Boolean);

  const furniture = ownedItems.filter(i => i?.category === "furniture");
  const decor = ownedItems.filter(i => i?.category === "decor");
  const collectibles = ownedItems.filter(i => i?.category === "collectible");

  const handleExport = async () => {
    if (!roomRef.current) return;
    
    setExporting(true);
    try {
      const canvas = await html2canvas(roomRef.current, {
        backgroundColor: "#111",
        scale: 2,
      });
      
      const link = document.createElement("a");
      link.download = `puzzlehouse-room-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Failed to export room:", error);
    }
    setExporting(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-mono">
      <Header />
      
      <main className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 tracking-wider">_YOUR_ROOM</h1>
          <p className="text-[#888]">
            {ownedItems.length} items collected
          </p>
        </div>

        <div 
          ref={roomRef} 
          className="border border-[#e5e5e5] p-6 min-h-[400px] bg-[#111]"
        >
          <div className="text-center text-[#555] mb-4">
            [ ROOM VIEW ]
          </div>
          
          {ownedItems.length === 0 ? (
            <div className="text-center py-16 text-[#555]">
              <p className="mb-4">Your room is empty...</p>
              <Link 
                href="/shop" 
                className="text-[#e5e5e5] hover:underline"
              >
                Visit the shop to buy items
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {furniture.length > 0 && (
                <div>
                  <h3 className="text-[#888] text-sm mb-2">Furniture</h3>
                  <div className="flex flex-wrap gap-4">
                    {furniture.map(item => (
                      <div 
                        key={item!.id}
                        className="text-4xl"
                        title={item!.name}
                      >
                        {item!.emoji}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {decor.length > 0 && (
                <div>
                  <h3 className="text-[#888] text-sm mb-2">Decor</h3>
                  <div className="flex flex-wrap gap-4">
                    {decor.map(item => (
                      <div 
                        key={item!.id}
                        className="text-3xl"
                        title={item!.name}
                      >
                        {item!.emoji}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {collectibles.length > 0 && (
                <div>
                  <h3 className="text-[#888] text-sm mb-2">Collectibles</h3>
                  <div className="flex flex-wrap gap-4">
                    {collectibles.map(item => (
                      <div 
                        key={item!.id}
                        className="text-2xl"
                        title={item!.name}
                      >
                        {item!.emoji}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-8 flex gap-4 flex-wrap">
          <Link 
            href="/shop" 
            className="px-4 py-2 border border-[#e5e5e5] hover:bg-[#e5e5e5] hover:text-[#0a0a0a] transition-colors"
          >
            [Visit Shop]
          </Link>
          <button 
            onClick={handleExport}
            disabled={exporting || ownedItems.length === 0}
            className="px-4 py-2 border border-[#e5e5e5] hover:bg-[#e5e5e5] hover:text-[#0a0a0a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {exporting ? "[Exporting...]" : "[Export as Image]"}
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-[#333]">
          <Link href="/" className="text-[#888] hover:text-[#e5e5e5]">
            &lt; Back to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
