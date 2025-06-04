// data/quizQuestions.ts
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export const avocadoQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What variety is the most commercially popular avocado in the world?",
    options: ["Fuerte", "Hass", "Bacon", "Pinkerton"],
    correctAnswer: "Hass",
  },
  {
    id: 2,
    question: "Avocados are botanically classified as a:",
    options: ["Vegetable", "Large Berry", "Nut", "Legume"],
    correctAnswer: "Large Berry",
  },
  {
    id: 3,
    question: "Which country is the world's largest producer of avocados?",
    options: ["USA", "Peru", "Mexico", "Chile"],
    correctAnswer: "Mexico",
  },
  {
    id: 4,
    question: "Which nutrient are avocados especially high in?",
    options: ["Protein", "Vitamin C", "Healthy Fats", "Calcium"],
    correctAnswer: "Healthy Fats",
  },
  {
    id: 5,
    question: "Avocados grow on what type of plant?",
    options: ["Vine", "Tree", "Shrub", "Bush"],
    correctAnswer: "Tree",
  },
  {
    id: 6,
    question: "What is the typical shape of a Hass avocado?",
    options: ["Round", "Oval", "Pear-shaped", "Square"],
    correctAnswer: "Pear-shaped",
  },
  {
    id: 7,
    question: "Which continent are avocados native to?",
    options: ["Asia", "Africa", "South America", "Australia"],
    correctAnswer: "South America",
  },
  {
    id: 8,
    question: "What color does an avocado skin typically turn when ripe (Hass)?",
    options: ["Green", "Dark Purple", "Black", "Yellow"],
    correctAnswer: "Black",
  },
  {
    id: 9,
    question: "What part of the avocado is toxic to pets like dogs and cats?",
    options: ["Flesh", "Skin", "Pit", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    id: 10,
    question: "Avocados are a good source of which heart-healthy nutrient?",
    options: ["Omega-3 fatty acids", "Trans fats", "Sodium", "Cholesterol"],
    correctAnswer: "Omega-3 fatty acids",
  },
  {
    id: 11,
    question: "Which vitamin is most abundant in avocados?",
    options: ["Vitamin A", "Vitamin B6", "Vitamin E", "Vitamin K"],
    correctAnswer: "Vitamin K",
  },
  {
    id: 12,
    question: "How many calories are in a medium avocado (approx.)?",
    options: ["80", "160", "250", "400"],
    correctAnswer: "160",
  },
  {
    id: 13,
    question: "Which state in the USA produces the most avocados?",
    options: ["Florida", "California", "Texas", "Arizona"],
    correctAnswer: "California",
  },
  {
    id: 14,
    question: "Which part of the avocado contains the most fiber?",
    options: ["Skin", "Flesh", "Pit", "Leaves"],
    correctAnswer: "Flesh",
  },
  {
    id: 15,
    question: "What is guacamole primarily made from?",
    options: ["Cucumber", "Zucchini", "Avocado", "Eggplant"],
    correctAnswer: "Avocado",
  },
  {
    id: 16,
    question: "Which month is often associated with National Avocado Day in the U.S.?",
    options: ["January", "May", "July", "October"],
    correctAnswer: "July",
  },
  {
    id: 17,
    question: "How should avocados be stored to ripen faster?",
    options: ["In the fridge", "In sunlight", "With bananas", "In the freezer"],
    correctAnswer: "With bananas",
  },
  {
    id: 18,
    question: "Avocados are part of which plant family?",
    options: ["Rosaceae", "Lauraceae", "Solanaceae", "Fabaceae"],
    correctAnswer: "Lauraceae",
  },
  {
    id: 19,
    question: "How long does it typically take an avocado tree to bear fruit?",
    options: ["1 year", "3–4 years", "5–13 years", "Over 15 years"],
    correctAnswer: "5–13 years",
  },
  {
    id: 20,
    question: "Avocados can help improve the absorption of which nutrient?",
    options: ["Iron", "Zinc", "Fat-soluble vitamins", "Protein"],
    correctAnswer: "Fat-soluble vitamins",
  },
];

export interface ScoreEntry {
  id: string;
  playerName: string;
  score: number;
  timestamp: number;
}
