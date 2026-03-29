import { Puzzle } from "./types";

export const puzzles: Puzzle[] = [
  // MATH PUZZLES (15)
  { id: "math-1", category: "math", title: "Quick Add", description: "Simple addition", difficulty: "easy", xpReward: 10, type: "input", question: "What is 25 + 17?", answer: "42" },
  { id: "math-2", category: "math", title: "Multiply", description: "Basic multiplication", difficulty: "easy", xpReward: 10, type: "input", question: "What is 12 × 8?", answer: "96" },
  { id: "math-3", category: "math", title: "Percentage", description: "Calculate percentage", difficulty: "easy", xpReward: 10, type: "input", question: "What is 20% of 150?", answer: "30" },
  { id: "math-4", category: "math", title: "Square It", description: "Square a number", difficulty: "medium", xpReward: 15, type: "input", question: "What is 15 squared?", answer: "225" },
  { id: "math-5", category: "math", title: "Divide", description: "Division problem", difficulty: "medium", xpReward: 15, type: "input", question: "What is 144 ÷ 12?", answer: "12" },
  { id: "math-6", category: "math", title: "Sequence", description: "Find the pattern", difficulty: "medium", xpReward: 15, type: "input", question: "What comes next: 2, 4, 8, 16, ?", answer: "32" },
  { id: "math-7", category: "math", title: "Chain Math", description: "Multi-step calculation", difficulty: "medium", xpReward: 15, type: "input", question: "What is (7 + 3) × 5?", answer: "50" },
  { id: "math-8", category: "math", title: "Fraction", description: "Simplify fraction", difficulty: "medium", xpReward: 15, type: "input", question: "What is 25% as a fraction (simplified)?", answer: "1/4" },
  { id: "math-9", category: "math", title: "Negative Math", description: "Handle negatives", difficulty: "hard", xpReward: 20, type: "input", question: "What is -7 + 12?", answer: "5" },
  { id: "math-10", category: "math", title: "Complex", description: "Multi-operation", difficulty: "hard", xpReward: 20, type: "input", question: "What is 3 × 4 + 2 × 5?", answer: "22" },
  { id: "math-11", category: "math", title: "Square Root", description: "Find the root", difficulty: "hard", xpReward: 20, type: "input", question: "What is √144?", answer: "12" },
  { id: "math-12", category: "math", title: "Power", description: "Exponent problem", difficulty: "hard", xpReward: 20, type: "input", question: "What is 2 to the power of 8?", answer: "256" },
  { id: "math-13", category: "math", title: "Average", description: "Find the mean", difficulty: "hard", xpReward: 20, type: "input", question: "What is the average of 10, 20, 30?", answer: "20" },
  { id: "math-14", category: "math", title: "Percent Change", description: "Calculate increase", difficulty: "hard", xpReward: 25, type: "input", question: "Increase 50 by 20%", answer: "60" },
  { id: "math-15", category: "math", title: "Equation", description: "Solve for x", difficulty: "hard", xpReward: 25, type: "input", question: "If 2x = 18, what is x?", answer: "9" },

  // LOGIC PUZZLES (15)
  { id: "logic-1", category: "logic", title: "Syllogism", description: "Basic deduction", difficulty: "easy", xpReward: 10, type: "truefalse", question: "All cats are mammals. Fluffy is a cat. Is Fluffy a mammal?", answer: "true", options: ["True", "False"] },
  { id: "logic-2", category: "logic", title: "Deduction", description: "Make inference", difficulty: "easy", xpReward: 10, type: "truefalse", question: "Some dogs bark. Max barks. Is Max a dog?", answer: "false", options: ["True", "False"] },
  { id: "logic-3", category: "logic", title: "Fallacy", description: "Spot the error", difficulty: "easy", xpReward: 10, type: "choice", question: "Everyone loves pizza. John loves pizza. Therefore John is everyone. This is:", answer: "Invalid", options: ["Valid", "Invalid"] },
  { id: "logic-4", category: "logic", title: "Conditional", description: "If-then logic", difficulty: "easy", xpReward: 10, type: "truefalse", question: "If it rains, ground gets wet. Ground is wet. Did it rain?", answer: "false", options: ["True", "False"] },
  { id: "logic-5", category: "logic", title: "All vs Some", description: "Quantifier logic", difficulty: "medium", xpReward: 15, type: "truefalse", question: "All birds fly. Penguins are birds. Can penguins fly?", answer: "false", options: ["True", "False"] },
  { id: "logic-6", category: "logic", title: "Chain Logic", description: "Linked statements", difficulty: "medium", xpReward: 15, type: "truefalse", question: "A > B and B > C. Therefore A > C.", answer: "true", options: ["True", "False"] },
  { id: "logic-7", category: "logic", title: "Set Theory", description: "Basic sets", difficulty: "medium", xpReward: 15, type: "choice", question: "Some A are B. Some B are C. Therefore:", answer: "Cannot determine", options: ["Some A are C", "No A are C", "Cannot determine"] },
  { id: "logic-8", category: "logic", title: "Formal Logic", description: "Syllogism", difficulty: "medium", xpReward: 15, type: "truefalse", question: "No reptiles are mammals. Some animals are reptiles. Therefore: some animals are not mammals.", answer: "true", options: ["True", "False"] },
  { id: "logic-9", category: "logic", title: "Counterexample", description: "Find the flaw", difficulty: "medium", xpReward: 15, type: "choice", question: "All swans are white. I saw a black bird. Therefore:", answer: "Nothing certain", options: ["Birds can be any color", "Nothing certain", "Swans are not all white"] },
  { id: "logic-10", category: "logic", title: "Analogy", description: "Find the relationship", difficulty: "medium", xpReward: 15, type: "choice", question: "Cat : Meow :: Dog : ?", answer: "Woof", options: ["Woof", "Meow", "Bark"] },
  { id: "logic-11", category: "logic", title: "Deduction Pro", description: "Advanced logic", difficulty: "hard", xpReward: 20, type: "truefalse", question: "If A or B, and not A, then B.", answer: "true", options: ["True", "False"] },
  { id: "logic-12", category: "logic", title: "Boolean Logic", description: "AND/OR/NOT", difficulty: "hard", xpReward: 20, type: "choice", question: "TRUE AND (FALSE OR TRUE) = ?", answer: "TRUE", options: ["TRUE", "FALSE", "UNKNOWN"] },
  { id: "logic-13", category: "logic", title: "Venn Logic", description: "Set relationships", difficulty: "hard", xpReward: 20, type: "choice", question: "In a group of 10, 6 have cats, 7 have dogs. At least how many have both?", answer: "3", options: ["1", "3", "6"] },
  { id: "logic-14", category: "logic", title: "Truth Tables", description: "Logic puzzle", difficulty: "hard", xpReward: 25, type: "choice", question: "If (A AND B) is FALSE, then:", answer: "At least one is false", options: ["Both are false", "At least one is false", "A is false only"] },
  { id: "logic-15", category: "logic", title: "Complex Chain", description: "Multi-step deduction", difficulty: "hard", xpReward: 25, type: "truefalse", question: "All X are Y. All Y are Z. Therefore all X are Z.", answer: "true", options: ["True", "False"] },

  // MEMORY PUZZLES (10)
  { id: "mem-1", category: "memory", title: "Digit Span", description: "Remember 3 digits", difficulty: "easy", xpReward: 10, type: "input", question: "Memorize: 7 3 9", answer: "739" },
  { id: "mem-2", category: "memory", title: "Color Order", description: "Remember sequence", difficulty: "easy", xpReward: 10, type: "input", question: "Remember: RED, BLUE, GREEN", answer: "red blue green" },
  { id: "mem-3", category: "memory", title: "Word Chain", description: "Memorize words", difficulty: "easy", xpReward: 10, type: "input", question: "Memorize: APPLE, BOOK, DOOR, FISH", answer: "apple book door fish" },
  { id: "mem-4", category: "memory", title: "Number Pattern", description: "Find the missing", difficulty: "easy", xpReward: 10, type: "input", question: "Memorize: 2, 4, 6, 8", answer: "2468" },
  { id: "mem-5", category: "memory", title: "Digit Recall", description: "4 digits", difficulty: "medium", xpReward: 15, type: "input", question: "Memorize: 4 8 2 5", answer: "4825" },
  { id: "mem-6", category: "memory", title: "Spatial", description: "Remember position", difficulty: "medium", xpReward: 15, type: "input", question: "Grid positions: A1, C3, E5 (the letters are)", answer: "ACE" },
  { id: "mem-7", category: "memory", title: "Complex Chain", description: "Longer sequence", difficulty: "medium", xpReward: 15, type: "input", question: "Memorize: 1-3-5-7-9", answer: "13579" },
  { id: "mem-8", category: "memory", title: "Word List", description: "5 words", difficulty: "hard", xpReward: 20, type: "input", question: "Memorize: TREE, HOUSE, CAR, MOON, STAR", answer: "tree house car moon star" },
  { id: "mem-9", category: "memory", title: "Number Grid", description: "Remember coordinates", difficulty: "hard", xpReward: 20, type: "input", question: "Remember: (2,3), (4,1), (1,4). Sum of all numbers:", answer: "10" },
  { id: "mem-10", category: "memory", title: "Ultimate Memory", description: "Longest chain", difficulty: "hard", xpReward: 25, type: "input", question: "Memorize: A7B4C2D9E1", answer: "a7b4c2d9e1" },

  // WORD PUZZLES (15)
  { id: "word-1", category: "word", title: "Anagram", description: "Unscramble", difficulty: "easy", xpReward: 10, type: "input", question: "Unscramble: L O H E L", answer: "HELLO" },
  { id: "word-2", category: "word", title: "Rhyme", description: "Find the rhyme", difficulty: "easy", xpReward: 10, type: "input", question: "Rhymes with CAT: _ _ _", answer: "BAT" },
  { id: "word-3", category: "word", title: "Antonym", description: "Opposite", difficulty: "easy", xpReward: 10, type: "input", question: "Opposite of HOT:", answer: "COLD" },
  { id: "word-4", category: "word", title: "Synonym", description: "Same meaning", difficulty: "easy", xpReward: 10, type: "input", question: "Another word for HAPPY:", answer: "GLAD" },
  { id: "word-5", category: "word", title: "Riddle", description: "Classic riddle", difficulty: "medium", xpReward: 15, type: "input", question: "What has keys but no locks?", answer: "PIANO" },
  { id: "word-6", category: "word", title: "Category", description: "What fits?", difficulty: "medium", xpReward: 15, type: "choice", question: "Which doesn't belong: Apple, Banana, Carrot, Grape", answer: "Carrot", options: ["Apple", "Banana", "Carrot", "Grape"] },
  { id: "word-7", category: "word", title: "Letter Math", description: "A=1 B=2...", difficulty: "medium", xpReward: 15, type: "input", question: "CAT (C=3, A=1, T=20) = ?", answer: "24" },
  { id: "word-8", category: "word", title: "Word Ladder", description: "One letter change", difficulty: "medium", xpReward: 15, type: "input", question: "Change one letter: COLD → ? → WOLD → WORD", answer: "CORD" },
  { id: "word-9", category: "word", title: "Compound", description: "Make a word", difficulty: "medium", xpReward: 15, type: "input", question: "Combine: FIRE + MAN", answer: "FIREMAN" },
  { id: "word-10", category: "word", title: "Riddle Pro", description: "Tricky riddle", difficulty: "hard", xpReward: 20, type: "input", question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "M" },
  { id: "word-11", category: "word", title: "Unscramble Pro", description: "Tough anagram", difficulty: "hard", xpReward: 20, type: "input", question: "Unscramble: D N A M I C", answer: "DYNAMIC" },
  { id: "word-12", category: "word", title: "Word Math", description: "Rebus puzzle", difficulty: "hard", xpReward: 20, type: "choice", question: "What does B + D stand for?", answer: "Bedtime", options: ["Birthday", "Bedtime", "Beyond"] },
  { id: "word-13", category: "word", title: "Sequence", description: "Letter pattern", difficulty: "hard", xpReward: 20, type: "input", question: "A, D, G, J, ?", answer: "M" },
  { id: "word-14", category: "word", title: "Crossword Clue", description: "Solve the clue", difficulty: "hard", xpReward: 25, type: "input", question: "Opposite of accept (6 letters)", answer: "DECLINE" },
  { id: "word-15", category: "word", title: "Final Challenge", description: "Ultimate word puzzle", difficulty: "hard", xpReward: 25, type: "input", question: "I am an odd number. Take away a letter and I become even. What number am I?", answer: "SEVEN" },
];

export const getPuzzlesByCategory = (category: string): Puzzle[] => {
  return puzzles.filter(p => p.category === category);
};

export const getPuzzleById = (id: string): Puzzle | undefined => {
  return puzzles.find(p => p.id === id);
};
