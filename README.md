# 🧩 PuzzleHouse

A TUI-themed web puzzle game built with Next.js. Solve puzzles, earn coins, and decorate your virtual room with pixel art collectibles.

## 🎮 Features

- **55 Unique Puzzles** across 4 categories:
  - 🧮 Math - Arithmetic, sequences, equations
  - 🧠 Logic - Deduction, syllogisms, boolean logic
  - 🎯 Memory - Recall sequences, numbers, patterns
  - 📝 Word - Anagrams, riddles, word games

- **Economy System**
  - Earn coins by solving puzzles
  - Spend coins in the shop on collectibles
  - 26 unique pixel art items

- **Room Decoration**
  - Display your collected items
  - Export your room as an image to share with friends

- **Achievements**
  - Track progress with badges
  - Unlock achievements for milestones

- **Auto-Advance Puzzles**
  - Automatically moves to next puzzle after solving
  - Press Enter to submit answers

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **State Management:** Zustand
- **Styling:** Tailwind CSS
- **Language:** TypeScript

## 🎨 Design

TUI (Terminal User Interface) aesthetic with a monochrome color palette:
- Background: `#0a0a0a`
- Foreground: `#e5e5e5`
- Accents: `#a3a3a3`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/paraspanhale/puzzlehouse.git
cd puzzlehouse

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
puzzlehouse/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Dashboard
│   │   ├── puzzles/           # Puzzle pages
│   │   ├── shop/              # Shop page
│   │   ├── room/              # Room decoration
│   │   └── achievements/      # Achievements page
│   ├── components/
│   │   └── layout/
│   │       └── header.tsx     # Navigation header
│   ├── lib/
│   │   ├── store.ts           # Zustand state management
│   │   ├── puzzles.ts         # Puzzle data
│   │   ├── items.ts           # Shop items & achievements
│   │   └── types.ts           # TypeScript interfaces
│   └── styles/
│       └── globals.css        # Global styles
└── package.json
```

## 🎯 How to Play

1. **Dashboard** - View your stats, level, and streak
2. **Puzzles** - Choose a category and solve puzzles
3. **Shop** - Spend coins on pixel art items
4. **Room** - Display your collected items
5. **Achievements** - Track your progress

## 💰 Economy

- Earn coins by solving puzzles
- Total coins available: **890 coins**
- Total shop items: **26 items** (890 coins total)
- Perfect balance: Solve all puzzles = buy everything

## 📸 Room Export

Click the "Export as Image" button in your room to download a PNG image of your decorated room - perfect for sharing with friends!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Paras Panhale**
- GitHub: [@paraspanhale](https://github.com/paraspanhale)

---

⭐ Star this repo if you found it helpful!
