// components/recipes/RecipeSortControls.tsx
"use client";

import React from 'react';
// RecipeDifficulty can be imported if needed for type safety, but not directly used in this component's logic
// import { RecipeDifficulty } from '@/data/recipesData';

export type SortKey = 'cookTimeMinutes' | 'difficulty' | 'name';
export type SortOrder = 'asc' | 'desc';

interface RecipeSortControlsProps {
  onSortChange: (key: SortKey, order: SortOrder) => void;
  currentSortKey: SortKey;
  currentSortOrder: SortOrder;
}

const RecipeSortControls: React.FC<RecipeSortControlsProps> = ({
  onSortChange,
  currentSortKey,
  currentSortOrder,
}) => {
  const handleSortKeyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value as SortKey, currentSortOrder);
  };

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(currentSortKey, e.target.value as SortOrder);
  };

  return (
    <div className="mb-6 p-4 bg-[#B9D77E] rounded-lg shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-center gap-2">
        <label htmlFor="sortKey" className="font-semibold text-[#556B2F]">Sort by:</label>
        <select
          id="sortKey"
          value={currentSortKey}
          onChange={handleSortKeyChange}
          className="p-2 border border-[#8BC34A] rounded-md focus:ring-2 focus:ring-[#8BC34A] focus:border-transparent bg-white text-[#795548]"
        >
          <option value="name">Name</option>
          <option value="cookTimeMinutes">Cook Time</option>
          <option value="difficulty">Difficulty</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="sortOrder" className="font-semibold text-[#556B2F]">Order:</label>
        <select
          id="sortOrder"
          value={currentSortOrder}
          onChange={handleSortOrderChange}
          className="p-2 border border-[#8BC34A] rounded-md focus:ring-2 focus:ring-[#8BC34A] focus:border-transparent bg-white text-[#795548]"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default RecipeSortControls;
