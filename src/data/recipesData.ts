// data/recipesData.ts
export type RecipeDifficulty = "Easy" | "Medium" | "Hard";

export interface Recipe {
  id: string;
  name: string;
  cookTimeMinutes: number;
  difficulty: RecipeDifficulty;
  ingredients: string[];
  instructions: string;
}

export const avocadoRecipes: Recipe[] = [
  {
    id: "1",
    name: "Classic Guacamole",
    cookTimeMinutes: 10,
    difficulty: "Easy",
    ingredients: [
      "3 ripe avocados",
      "1/2 onion, finely chopped",
      "2 Roma tomatoes, diced",
      "1 jalapeño, minced",
      "1/2 cup cilantro, chopped",
      "Juice of 1 lime",
      "Salt to taste",
    ],
    instructions: "Mash avocados. Mix in other ingredients. Serve immediately.",
  },
  {
    id: "2",
    name: "Avocado Toast with Egg",
    cookTimeMinutes: 15,
    difficulty: "Easy",
    ingredients: [
      "1 ripe avocado",
      "2 slices of bread, toasted",
      "1 egg, fried or poached",
      "Salt, pepper, chili flakes to taste",
    ],
    instructions: "Mash avocado on toast. Top with egg and seasonings.",
  },
  {
    id: "3",
    name: "Avocado Chocolate Mousse",
    cookTimeMinutes: 20,
    difficulty: "Medium",
    ingredients: [
      "2 ripe avocados",
      "1/4 cup cocoa powder",
      "1/4 cup maple syrup",
      "1/4 cup almond milk",
      "1 tsp vanilla extract",
      "Pinch of salt",
    ],
    instructions:
      "Blend all ingredients until smooth. Chill for at least 15 minutes.",
  },
  {
    id: "4",
    name: "Avocado Smoothie",
    cookTimeMinutes: 5,
    difficulty: "Easy",
    ingredients: [
      "1 avocado",
      "1 banana",
      "1 cup milk or almond milk",
      "1 tbsp honey",
      "Ice cubes",
    ],
    instructions: "Blend all ingredients until smooth and creamy.",
  },
  {
    id: "5",
    name: "Avocado Pasta",
    cookTimeMinutes: 20,
    difficulty: "Medium",
    ingredients: [
      "1 avocado",
      "200g pasta",
      "1 garlic clove",
      "Juice of 1 lemon",
      "Salt",
      "Olive oil",
    ],
    instructions:
      "Cook pasta. Blend avocado with other ingredients. Mix with pasta and serve.",
  },
  {
    id: "6",
    name: "Stuffed Avocados",
    cookTimeMinutes: 10,
    difficulty: "Easy",
    ingredients: [
      "2 avocados",
      "1/2 cup tuna salad or chicken salad",
      "Salt",
      "Pepper",
    ],
    instructions:
      "Slice avocados in half, remove pits, and stuff with salad mixture.",
  },
  {
    id: "7",
    name: "Avocado Deviled Eggs",
    cookTimeMinutes: 15,
    difficulty: "Easy",
    ingredients: [
      "6 hard-boiled eggs",
      "1 avocado",
      "1 tbsp lime juice",
      "Salt",
      "Paprika",
    ],
    instructions:
      "Halve eggs, mix yolks with avocado and lime, fill whites, and sprinkle with paprika.",
  },
  {
    id: "8",
    name: "Avocado Fries",
    cookTimeMinutes: 25,
    difficulty: "Medium",
    ingredients: [
      "2 avocados",
      "1/2 cup flour",
      "1 egg",
      "1 cup breadcrumbs",
      "Salt",
      "Pepper",
    ],
    instructions:
      "Slice avocado, coat in flour, egg, breadcrumbs, and bake or fry until golden.",
  },
  {
    id: "9",
    name: "Avocado Ice Cream",
    cookTimeMinutes: 240,
    difficulty: "Hard",
    ingredients: [
      "2 avocados",
      "1 cup coconut milk",
      "1/2 cup honey",
      "1 tsp vanilla",
    ],
    instructions:
      "Blend all ingredients and freeze for 4 hours, stirring every 30 minutes.",
  },
  {
    id: "10",
    name: "Avocado Egg Salad",
    cookTimeMinutes: 10,
    difficulty: "Easy",
    ingredients: [
      "4 hard-boiled eggs",
      "1 avocado",
      "Salt",
      "Pepper",
      "Lemon juice",
    ],
    instructions: "Chop eggs and mix with mashed avocado and seasonings.",
  },
  {
    id: "11",
    name: "Avocado and Shrimp Salad",
    cookTimeMinutes: 15,
    difficulty: "Medium",
    ingredients: [
      "1 avocado",
      "1 cup cooked shrimp",
      "Lettuce",
      "Cherry tomatoes",
      "Lemon vinaigrette",
    ],
    instructions: "Mix all ingredients in a bowl and drizzle with vinaigrette.",
  },
  {
    id: "12",
    name: "Avocado Sushi Rolls",
    cookTimeMinutes: 30,
    difficulty: "Hard",
    ingredients: [
      "1 avocado",
      "Sushi rice",
      "Nori sheets",
      "Cucumber",
      "Soy sauce",
    ],
    instructions:
      "Roll sushi rice and fillings in nori, slice, and serve with soy sauce.",
  },
  {
    id: "13",
    name: "Bacon Avocado Burger",
    cookTimeMinutes: 25,
    difficulty: "Medium",
    ingredients: [
      "Burger buns",
      "Beef patties",
      "Avocado slices",
      "Bacon",
      "Lettuce",
      "Tomato",
    ],
    instructions:
      "Grill patties and bacon, assemble burger with avocado and toppings.",
  },
  {
    id: "14",
    name: "Avocado Chicken Wrap",
    cookTimeMinutes: 10,
    difficulty: "Easy",
    ingredients: [
      "Tortilla",
      "Cooked chicken",
      "Avocado",
      "Lettuce",
      "Ranch dressing",
    ],
    instructions: "Layer ingredients on tortilla, roll up, and slice in half.",
  },
  {
    id: "15",
    name: "Avocado Quesadilla",
    cookTimeMinutes: 10,
    difficulty: "Easy",
    ingredients: ["2 tortillas", "Cheese", "Sliced avocado", "Salt", "Pepper"],
    instructions:
      "Fill tortilla with cheese and avocado, cook on skillet until golden.",
  },
  {
    id: "16",
    name: "Avocado Spring Rolls",
    cookTimeMinutes: 20,
    difficulty: "Medium",
    ingredients: [
      "Rice paper",
      "Avocado",
      "Carrots",
      "Cucumber",
      "Mint",
      "Dipping sauce",
    ],
    instructions: "Roll veggies and avocado in rice paper, serve with sauce.",
  },
  {
    id: "17",
    name: "Avocado Chicken Salad",
    cookTimeMinutes: 15,
    difficulty: "Easy",
    ingredients: [
      "Cooked chicken",
      "Avocado",
      "Greek yogurt",
      "Lime juice",
      "Salt",
    ],
    instructions: "Mix all ingredients and chill before serving.",
  },
  {
    id: "18",
    name: "Avocado Mac and Cheese",
    cookTimeMinutes: 25,
    difficulty: "Medium",
    ingredients: [
      "Macaroni",
      "Cheddar cheese",
      "Milk",
      "Avocado",
      "Garlic powder",
    ],
    instructions:
      "Prepare mac and cheese, blend in mashed avocado and seasoning.",
  },
  {
    id: "19",
    name: "Avocado Pesto Pasta",
    cookTimeMinutes: 20,
    difficulty: "Medium",
    ingredients: [
      "Pasta",
      "Avocado",
      "Basil",
      "Parmesan",
      "Lemon juice",
      "Olive oil",
    ],
    instructions: "Blend pesto ingredients with avocado, toss with pasta.",
  },
  {
    id: "20",
    name: "Avocado Pizza",
    cookTimeMinutes: 25,
    difficulty: "Hard",
    ingredients: ["Pizza dough", "Mozzarella", "Avocado", "Tomato", "Basil"],
    instructions:
      "Bake crust with toppings except avocado, then top with fresh avocado after baking.",
  },
  {
    id: "21",
    name: "Avocado Tacos",
    cookTimeMinutes: 15,
    difficulty: "Easy",
    ingredients: [
      "Corn tortillas",
      "Avocado",
      "Black beans",
      "Lettuce",
      "Salsa",
    ],
    instructions: "Assemble all ingredients in warmed tortillas.",
  },
  {
    id: "22",
    name: "Avocado Pancakes",
    cookTimeMinutes: 20,
    difficulty: "Medium",
    ingredients: [
      "1 ripe avocado",
      "1 cup flour",
      "1 egg",
      "1 cup milk",
      "Baking powder",
    ],
    instructions: "Blend avocado into pancake batter and cook on griddle.",
  },
  {
    id: "23",
    name: "Avocado Burrito Bowl",
    cookTimeMinutes: 20,
    difficulty: "Easy",
    ingredients: ["Rice", "Black beans", "Corn", "Avocado", "Salsa", "Lime"],
    instructions:
      "Assemble all ingredients in a bowl and drizzle with lime juice.",
  },
  {
    id: "24",
    name: "Avocado Omelette",
    cookTimeMinutes: 10,
    difficulty: "Easy",
    ingredients: ["2 eggs", "Sliced avocado", "Salt", "Pepper", "Butter"],
    instructions: "Cook omelette and fill with avocado slices before folding.",
  },
  {
    id: "25",
    name: "Avocado Hummus",
    cookTimeMinutes: 10,
    difficulty: "Easy",
    ingredients: [
      "1 avocado",
      "1 cup chickpeas",
      "2 tbsp tahini",
      "1 garlic clove",
      "Lemon juice",
      "Olive oil",
    ],
    instructions:
      "Blend all ingredients until smooth and creamy. Serve with pita.",
  },
];
