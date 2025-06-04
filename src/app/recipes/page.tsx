
import type { Metadata } from 'next';
import RecipeSorterClient from '@/components/recipes/RecipeSorterClient';
import { avocadoRecipes, Recipe } from '@/data/recipesData'; 

export const metadata: Metadata = {
  title: 'Avocado Recipes',
  description: 'Discover and sort delicious avocado recipes by cook time or difficulty.',
};

async function getRecipeData(): Promise<Recipe[]> {

  return avocadoRecipes;
}

export default async function RecipesPage() {
  const initialRecipes = await getRecipeData();

  return (
    <RecipeSorterClient initialRecipes={initialRecipes} />
  );
}