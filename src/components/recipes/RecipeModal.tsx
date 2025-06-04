
"use client";

import React from 'react';
import { Recipe } from '@/data/recipesData';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  show?: boolean; 
}

const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose, show }) => {
  if (!recipe) {
    return null;
  }

  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };


  const overlayClasses = `fixed inset-0 bg-white bg-opacity-10 backdrop-blur-sm flex justify-center items-center z-[100] p-4 ${
    show !== undefined ? (show ? 'opacity-100' : 'opacity-0 pointer-events-none') : ''
  } ${show !== undefined ? 'transition-opacity duration-300 ease-out' : ''}`;

  const modalContentClasses = `bg-white p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative transform ${
    show !== undefined ? (show ? 'scale-100 opacity-100' : 'scale-95 opacity-0') : ''
  } ${show !== undefined ? 'transition-all duration-300 ease-out' : ''}`;


  return (
    <div
      className={overlayClasses}
      onClick={onClose}
    >
      <div
        className={modalContentClasses}
        onClick={handleModalContentClick}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-gray-800 transition-colors z-[110]"
          aria-label="Close recipe details"
        >
          ×
        </button>

        <h2 className="text-3xl font-bold text-[#556B2F] mb-4 pr-8">{recipe.name}</h2>

 
        <div className="mb-6"> 
          <div>
            <p className="text-sm text-[#795548] mb-1">
              <strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins
            </p>
            <p className="text-sm text-[#795548]">
              <strong>Difficulty:</strong> {recipe.difficulty}
            </p>
          </div>
          {/*
          {recipe.imageUrl && (
            <div className="relative w-full h-40 md:h-48 rounded-lg overflow-hidden shadow-md order-first md:order-last">
              <img
                src={recipe.imageUrl}
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          */}
        </div>


        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#689F38] mb-2">Ingredients:</h3>
          <ul className="list-disc list-inside space-y-1 text-[#795548] pl-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#689F38] mb-2">Instructions:</h3>
          <div className="text-[#795548] space-y-3 whitespace-pre-line prose prose-sm max-w-none">
            {recipe.instructions}
          </div>
        </div>

      </div>
    </div>
  );
};

export default RecipeModal;