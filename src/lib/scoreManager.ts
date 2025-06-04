// lib/scoreManager.ts
import type { ScoreEntry } from "@/data/quizQuestions";
import { combSort } from "@/algorithm/combSort";

const LEADERBOARD_KEY = "avocadoLeaderboard"; // Same key as in QuizClient.tsx

export function getScores(): ScoreEntry[] {
  if (typeof window === "undefined") {
    return []; // Server-side or no window object
  }
  try {
    const storedScores = localStorage.getItem(LEADERBOARD_KEY);
    if (storedScores) {
      const parsed = JSON.parse(storedScores);
      // Basic validation that it's an array of ScoreEntry-like objects
      if (
        Array.isArray(parsed) &&
        (parsed.length === 0 ||
          (parsed[0].hasOwnProperty("playerName") &&
            parsed[0].hasOwnProperty("score")))
      ) {
        return parsed;
      }
    }
    return [];
  } catch (error) {
    console.error("Error retrieving scores from localStorage:", error);
    return [];
  }
}

// This function can be used by QuizClient.tsx if you want to centralize score adding.
// It mirrors the sorting logic from your QuizClient.
export function addScoreAndSort(
  newScoreData: Omit<ScoreEntry, "id" | "timestamp">
): ScoreEntry[] {
  const existingScores = getScores();
  const newEntry: ScoreEntry = {
    ...newScoreData,
    id: Date.now().toString() + Math.random().toString(36).substring(2, 7), // Unique ID
    timestamp: Date.now(),
  };

  const updatedLeaderboard = [...existingScores, newEntry];

  // Sort by score (descending), then by timestamp (ascending - older first for ties)
  // This matches your QuizClient.tsx sorting logic.
  const sortedLeaderboard = combSort(updatedLeaderboard, (a, b) => {
    if (b.score === a.score) {
      return a.timestamp - b.timestamp; // Older entries first if scores are tied
    }
    return b.score - a.score; // Higher scores first
  });

  if (typeof window !== "undefined") {
    try {
      // Optional: Limit leaderboard size, e.g., top 100
      // const finalLeaderboard = sortedLeaderboard.slice(0, 100);
      // localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(finalLeaderboard));
      localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(sortedLeaderboard));
    } catch (error) {
      console.error("Error saving score to localStorage:", error);
    }
  }
  return sortedLeaderboard;
}

// For testing: Add some mock scores if the leaderboard is empty.
// Uses the same sorting as addScoreAndSort to be consistent.
export function initializeMockScores() {
  if (typeof window !== "undefined" && getScores().length === 0) {
    console.log("Initializing mock scores for leaderboard...");
    let mockBaseScores: Omit<ScoreEntry, "id" | "timestamp">[] = [
      { playerName: "GuacMaster", score: 90 },
      { playerName: "AvocadoAlly", score: 75 },
      { playerName: "SortWiz", score: 85 },
      { playerName: "PlayerOne", score: 60 },
      { playerName: "GreenThumb", score: 95 },
      { playerName: "ComboMan", score: 85 }, // To test tie-breaking
    ];

    let currentTimestamp = Date.now();
    // Add scores one by one to simulate different timestamps and allow addScoreAndSort to handle ID and final sort
    mockBaseScores.forEach((scoreData, index) => {
      const entry: ScoreEntry = {
        ...scoreData,
        id: `mock${index}${Date.now().toString()}`,
        timestamp:
          currentTimestamp - index * 1000 * 60 * (Math.random() * 10 + 5), // Vary timestamps
      };
      const currentScores = getScores(); // get current state of localStorage
      const updated = [...currentScores, entry];
      const sorted = combSort(updated, (a, b) => {
        // Apply the standard rank sort
        if (b.score === a.score) return a.timestamp - b.timestamp;
        return b.score - a.score;
      });
      localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(sorted));
    });
    console.log("Mock scores initialized. Current leaderboard:", getScores());
  }
}
