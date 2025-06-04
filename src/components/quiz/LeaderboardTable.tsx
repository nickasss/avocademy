
import React from "react";
import { ScoreEntry } from "@/data/quizQuestions";

interface LeaderboardTableProps {
  scores: ScoreEntry[];
}

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ scores }) => {
  if (!scores || scores.length === 0) {
    return (
      <p className="text-center text-[#795548]">No scores yet. Be the first!</p>
    );
  }

  return (
    <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-lg border border-[#B9D77E]">
      <h3 className="text-2xl font-bold text-[#556B2F] mb-4 text-center">
        Leaderboard
      </h3>
      <table className="min-w-full divide-y divide-[#B9D77E]">
        <thead className="bg-[#B9D77E]">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#556B2F] uppercase tracking-wider">
              Rank
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#556B2F] uppercase tracking-wider">
              Player
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#556B2F] uppercase tracking-wider">
              Score
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#556B2F] uppercase tracking-wider">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {scores.map((entry, index) => (
            <tr key={entry.id} className={index < 3 ? "bg-[#FFEB3B]/50" : ""}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#795548]">
                {index + 1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#795548]">
                {entry.playerName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#795548]">
                {entry.score}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(entry.timestamp).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
