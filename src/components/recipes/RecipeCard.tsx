
import React from 'react';

import { Recipe } from '@/data/recipesData';

interface RecipeCardProps {
  recipe: Recipe;
  onViewRecipe: (recipe: Recipe) => void; 
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onViewRecipe }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#B9D77E] transform hover:scale-105 transition-transform duration-300 flex flex-col">
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-[#556B2F] mb-2">{recipe.name}</h3>
          <p className="text-sm text-[#795548] mb-1">
            <strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins
          </p>
          <p className="text-sm text-[#795548] mb-3">
            <strong>Difficulty:</strong> {recipe.difficulty}
          </p>
        </div>
        <button
          onClick={() => onViewRecipe(recipe)} 
          className="mt-auto w-full bg-[#8BC34A] text-white py-2 rounded-md hover:bg-[#689F38] transition-colors text-sm"
        >
          View Full Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;