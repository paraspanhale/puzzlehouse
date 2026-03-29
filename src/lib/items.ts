import { ShopItem } from "./types";

export const shopItems: ShopItem[] = [
  // FURNITURE (8 items)
  { id: "desk", name: "Pixel Desk", description: "A classic wooden desk", price: 30, emoji: "🪑", category: "furniture" },
  { id: "bed", name: "Cozy Bed", description: "Sleep in comfort", price: 40, emoji: "🛏️", category: "furniture" },
  { id: "chair", name: "Gaming Chair", description: "Comfort for long sessions", price: 50, emoji: "🪑", category: "furniture" },
  { id: "shelf", name: "Book Shelf", description: "Display your collectibles", price: 25, emoji: "📚", category: "furniture" },
  { id: "lamp", name: "Desk Lamp", description: "Light up your workspace", price: 15, emoji: "💡", category: "furniture" },
  { id: "rug", name: "Pixel Rug", description: "Floor decoration", price: 20, emoji: "🟫", category: "furniture" },
  { id: "tv", name: "Retro TV", description: "Watch pixel shows", price: 70, emoji: "📺", category: "furniture" },
  { id: "plant", name: "House Plant", description: "Green companion", price: 20, emoji: "🪴", category: "furniture" },

  // DECOR (7 items)
  { id: "poster", name: "Game Poster", description: "Retro gaming art", price: 15, emoji: "🖼️", category: "decor" },
  { id: "clock", name: "Pixel Clock", description: "Time flies", price: 20, emoji: "🕐", category: "decor" },
  { id: "frame", name: "Photo Frame", description: "Memory keeper", price: 15, emoji: "🖼️", category: "decor" },
  { id: "candle", name: "Scented Candle", description: "Cozy vibes", price: 10, emoji: "🕯️", category: "decor" },
  { id: "phone", name: "Retro Phone", description: "Nostalgic communication", price: 35, emoji: "☎️", category: "decor" },
  { id: "camera", name: "Pixel Camera", description: "Capture memories", price: 45, emoji: "📷", category: "decor" },
  { id: "speaker", name: "Mini Speaker", description: "Play your tunes", price: 25, emoji: "🔊", category: "decor" },

  // COLLECTIBLES (11 items)
  { id: "sword", name: "Pixel Sword", description: "For brave adventurers", price: 70, emoji: "⚔️", category: "collectible" },
  { id: "shield", name: "Hero Shield", description: "Defense item", price: 60, emoji: "🛡️", category: "collectible" },
  { id: "potion", name: "Magic Potion", description: "Mystical brew", price: 35, emoji: "🧪", category: "collectible" },
  { id: "gem", name: "Rare Gem", description: "Precious stone", price: 90, emoji: "💎", category: "collectible" },
  { id: "crown", name: "Royal Crown", description: "King of puzzles", price: 85, emoji: "👑", category: "collectible" },
  { id: "trophy", name: "Winner Trophy", description: "Achievement unlocked", price: 80, emoji: "🏆", category: "collectible" },
  { id: "star", name: "Golden Star", description: "Shining achievement", price: 75, emoji: "⭐", category: "collectible" },
  { id: "heart", name: "Pixel Heart", description: "Full of love", price: 25, emoji: "❤️", category: "collectible" },
  { id: "fire", name: "Fire Emblem", description: "Burning passion", price: 45, emoji: "🔥", category: "collectible" },
  { id: "dragon", name: "Pixel Dragon", description: "Legendary companion", price: 95, emoji: "🐉", category: "collectible" },
  { id: "devgift", name: "Developer Gift", description: "A gift from the developer", price: 15, emoji: "🎁", category: "collectible" },
];

export const getItemById = (id: string): ShopItem | undefined => {
  return shopItems.find(item => item.id === id);
};

export const achievementsList = [
  { id: "first", name: "First Steps", description: "Solve your first puzzle", icon: "👣", requirement: 1, type: "puzzles" as const },
  { id: "five", name: "Getting Started", description: "Solve 5 puzzles", icon: "⭐", requirement: 5, type: "puzzles" as const },
  { id: "ten", name: "Quick Learner", description: "Solve 10 puzzles", icon: "🧠", requirement: 10, type: "puzzles" as const },
  { id: "twentyfive", name: "Dedicated", description: "Solve 25 puzzles", icon: "🔥", requirement: 25, type: "puzzles" as const },
  { id: "fifty", name: "Puzzle Master", description: "Solve 50 puzzles", icon: "🏆", requirement: 50, type: "puzzles" as const },
  { id: "perfect", name: "Perfectionist", description: "Get 10 perfect scores", icon: "💯", requirement: 10, type: "perfect" as const },
  { id: "streak3", name: "Consistent", description: "3-day streak", icon: "📅", requirement: 3, type: "streak" as const },
  { id: "streak7", name: "Weekly Warrior", description: "7-day streak", icon: "💪", requirement: 7, type: "streak" as const },
  { id: "collector", name: "Collector", description: "Buy 5 items", icon: "🛒", requirement: 5, type: "coins" as const },
  { id: "rich", name: "Wealthy", description: "Save 500 coins", icon: "💰", requirement: 500, type: "coins" as const },
];
