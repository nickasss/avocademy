"use client";

import React, { useState, useEffect, useMemo } from "react";
import LeaderboardTable from "@/components/quiz/LeaderboardTable";
import type { ScoreEntry } from "@/data/quizQuestions";     
import { combSort } from "@/algorithm/combSort"; 
import { getScores, initializeMockScores } from "@/lib/scoreManager"; 
import Link from "next/link";



type SortableKey = "rank" | "playerName" | "score" | "date";
type SortOrder = "asc" | "desc";

interface SortConfig {
  key: SortableKey;
  order: SortOrder;
}

export default function LeaderboardPage() {
  const [allScores, setAllScores] = useState<ScoreEntry[]>([]);
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: "rank", order: "desc" });

  useEffect(() => {
    initializeMockScores();
    setAllScores(getScores());
  }, []);

  const sortedScores = useMemo(() => {
    if (!allScores || allScores.length === 0) return [];

    let compareFn: (a: ScoreEntry, b: ScoreEntry) => number;

    switch (sortConfig.key) {
      case "playerName":
        compareFn = (a, b) => a.playerName.localeCompare(b.playerName);
        if (sortConfig.order === "desc") {
          compareFn = (a, b) => b.playerName.localeCompare(a.playerName);
        }
        break;
      case "date":
        compareFn = (a, b) => a.timestamp - b.timestamp; 
        if (sortConfig.order === "desc") {
          compareFn = (a, b) => b.timestamp - a.timestamp;
        }
        break;
      case "score":
        compareFn = (a, b) => { 
          if (a.score === b.score) return a.timestamp - b.timestamp;
          return a.score - b.score;
        };
        if (sortConfig.order === "desc") {
          compareFn = (a, b) => { 
            if (b.score === a.score) return a.timestamp - b.timestamp; 
            return b.score - a.score;
          };
        }
        break;
      case "rank": 
      default:
        compareFn = (a, b) => {
          if (b.score === a.score) return a.timestamp - b.timestamp;
          return b.score - a.score;
        };

        if (sortConfig.order === 'asc') {
             compareFn = (a, b) => {
                if (a.score === b.score) return a.timestamp - b.timestamp;
                return a.score - b.score;
            };
        }
        break;
    }
    return combSort([...allScores], compareFn);
  }, [allScores, sortConfig]);

  const handleSort = (key: SortableKey) => {
    let newOrder: SortOrder = sortConfig.order;
    if (sortConfig.key === key) {
      newOrder = sortConfig.order === "asc" ? "desc" : "asc";
    } else {
      if (key === "score" || key === "date" || key === "rank") newOrder = "desc";
      else newOrder = "asc"; 
    }
    setSortConfig({ key, order: newOrder });
  };

  const getSortIndicator = (key: SortableKey) => {
    if (sortConfig.key !== key) return "";
    return sortConfig.order === "asc" ? " ▲" : " ▼";
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="flex flex-col items-center mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#558B2F] mb-3">
          Avocado Champions Leaderboard
        </h1>
        <p className="text-[#795548] text-lg max-w-2xl">
          See who tops the charts in avocado knowledge! All scores are dynamically sorted using the <strong>Comb Sort</strong> algorithm.
        </p>
      </div>

      <div className="mb-6 p-4 bg-[#F1F8E9] rounded-lg shadow-md flex flex-wrap justify-center items-center gap-2 md:gap-3">
        <span className="mr-2 font-semibold text-[#558B2F] text-sm md:text-base">Sort by:</span>
        {(["rank", "playerName", "score", "date"] as SortableKey[]).map((key) => (
          <button
            key={key}
            onClick={() => handleSort(key)}
            className={`px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#6B8E23]
                        ${sortConfig.key === key ? "bg-[#558B2F] text-white" : "bg-white text-[#558B2F] hover:bg-[#DCEDC8]"}`}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
            {getSortIndicator(key)}
          </button>
        ))}
      </div>

      <LeaderboardTable scores={sortedScores} />

      <div className="mt-10 text-center">
        <Link href="/quiz"
          className="inline-flex items-center justify-center rounded-md bg-[#8BC34A] px-6 py-3 text-md font-medium text-white shadow transition-colors hover:bg-[#558B2F] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#558B2F] mr-4"
        >
          Take the Quiz!
        </Link>
        <Link href="/" className="text-[#689F38] hover:text-[#558B2F] font-medium">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}