
"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { Recipe, RecipeDifficulty } from '@/data/recipesData';
import RecipeCard from './RecipeCard';
import RecipeSortControls, { SortKey, SortOrder } from './RecipeSortControls';
import RecipeModal from './RecipeModal';
import { combSort } from '@/algorithm/combSort';

const difficultyOrder: Record<RecipeDifficulty, number> = {
  'Easy': 1,
  'Medium': 2,
  'Hard': 3,
};

interface RecipeSorterClientProps {
  initialRecipes: Recipe[];
}

const RecipeSorterClient: React.FC<RecipeSorterClientProps> = ({ initialRecipes }) => {
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  // Modal State
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSortChange = (key: SortKey, order: SortOrder) => {
    setSortKey(key);
    setSortOrder(order);
  };

  const handleViewRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);

    setTimeout(() => setSelectedRecipe(null), 300); 
  };


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        handleCloseModal();
      }
    };
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'; 
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);


  const sortedRecipes = useMemo(() => {
    const compareFn = (a: Recipe, b: Recipe): number => {
      let comparison = 0;
      if (sortKey === 'cookTimeMinutes') {
        comparison = a.cookTimeMinutes - b.cookTimeMinutes;
      } else if (sortKey === 'difficulty') {
        comparison = difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      } else if (sortKey === 'name') {
        comparison = a.name.localeCompare(b.name);
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    };
    return combSort([...initialRecipes], compareFn);
  }, [initialRecipes, sortKey, sortOrder]);

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-[#556B2F]">Avocado Recipe Sorter</h1> {/* Dark Green */}
      <RecipeSortControls
        onSortChange={handleSortChange}
        currentSortKey={sortKey}
        currentSortOrder={sortOrder}
      />
      <p className="text-sm text-center text-[#795548]/80"> 
        Recipes are sorted using the <strong>Comb Sort</strong> algorithm!
      </p>
      {sortedRecipes.length === 0 ? (
        <p className="text-center text-xl text-[#795548]">No recipes found.</p> 
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onViewRecipe={handleViewRecipe} 
            />
          ))}
        </div>
      )}

      {/* Render the Modal */}
      {isModalOpen && selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default RecipeSorterClient;