
"use client";

import React from "react";
import { QuizQuestion as QuizQuestionType } from "@/data/quizQuestions";

interface QuizQuestionProps {
  questionData: QuizQuestionType;
  onAnswerSelect: (answer: string) => void;
  selectedAnswer?: string;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  questionData,
  onAnswerSelect,
  selectedAnswer,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-[#B9D77E]">
      <h3 className="text-xl font-semibold text-[#556B2F] mb-4">
        {questionData.question}
      </h3>
      <div className="space-y-3">
        {questionData.options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswerSelect(option)}
            className={`w-full text-left p-3 rounded-md border-2 transition-all
                        ${
                          selectedAnswer === option
                            ? "bg-[#8BC34A] text-white border-[#556B2F]"
                            : "bg-gray-100 hover:bg-[#B9D77E] border-gray-200 text-[#795548]"
                        }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
