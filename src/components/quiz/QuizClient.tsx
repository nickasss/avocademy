
"use client";

import React, { useState, useEffect } from 'react';
import {QuizQuestion as QuizQuestionType, ScoreEntry } from '@/data/quizQuestions';
import QuizQuestionComponent from './QuizQuestion';
import LeaderboardTable from './LeaderboardTable';
import { combSort } from "@/algorithm/combSort";

const QuizClient: React.FC<{ initialQuestions: QuizQuestionType[] }> = ({ initialQuestions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [leaderboard, setLeaderboard] = useState<ScoreEntry[]>([]);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  useEffect(() => {
    const storedLeaderboard = localStorage.getItem('avocadoLeaderboard');
    if (storedLeaderboard) {
      try {
        const parsedLeaderboard = JSON.parse(storedLeaderboard);
        if (Array.isArray(parsedLeaderboard)) {
          setLeaderboard(parsedLeaderboard);
        } else {
          setLeaderboard([]);
        }
      } catch (error) {
        console.error("Failed to parse leaderboard from localStorage", error);
        setLeaderboard([]);
      }
    }
  }, []);

  useEffect(() => {
    if (leaderboard.length > 0 || localStorage.getItem('avocadoLeaderboard')) {
      localStorage.setItem('avocadoLeaderboard', JSON.stringify(leaderboard));
    }
  }, [leaderboard]);

  const handleAnswerSelect = (answer: string) => {
    setUserAnswers({
      ...userAnswers,
      [initialQuestions[currentQuestionIndex].id]: answer,
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < initialQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateScore();
      setQuizFinished(true);
    }
  };

  const calculateScore = () => {
    let currentScore = 0;
    initialQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) {
        currentScore++;
      }
    });
    setScore(currentScore);
  };

  const handleSubmitScore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerName.trim()) {
      alert("Please enter your name!");
      return;
    }
    const newEntry: ScoreEntry = {
      id: Date.now().toString(),
      playerName,
      score,
      timestamp: Date.now(),
    };

    const updatedLeaderboard = [...leaderboard, newEntry];
    const sortedLeaderboard = combSort(updatedLeaderboard, (a, b) => {
      if (b.score === a.score) {
        return a.timestamp - b.timestamp;
      }
      return b.score - a.score;
    });

    setLeaderboard(sortedLeaderboard);
    setShowLeaderboard(true);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setScore(0);
    setQuizFinished(false);
    setPlayerName('');
    setShowLeaderboard(false);
  };

  if (showLeaderboard) {
    return (
      <div className="container mx-auto p-4">
        <LeaderboardTable scores={leaderboard} />
        <button
          onClick={restartQuiz}
          className="mt-6 bg-[#6B8E23] hover:bg-[#556B2F] text-white font-bold py-3 px-6 rounded-lg shadow transition-colors w-full sm:w-auto"
        >
          Play Again
        </button>
      </div>
    );
  }

  if (quizFinished) {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow-xl border border-[#B9D77E]">
        <h2 className="text-3xl font-bold text-[#556B2F] mb-4">Quiz Finished!</h2>
        <p className="text-xl text-[#4B371C] mb-6">
          Your score: {score} / {initialQuestions.length}
        </p>
        <form onSubmit={handleSubmitScore} className="space-y-4">
          <div>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Enter your name for the leaderboard"
              className=" text-[#556B2F] p-3 border border-[#6B8E23] rounded-md w-full max-w-sm focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#6B8E23] hover:bg-[#556B2F] text-white font-bold py-3 px-6 rounded-lg shadow transition-colors"
          >
            Submit to Leaderboard
          </button>
        </form>
        <button
          onClick={restartQuiz}
          className="mt-4 text-sm text-[#556B2F] hover:underline"
        >
          Or, Play Again Without Saving
        </button>
      </div>
    );
  }

  const currentQuestion = initialQuestions[currentQuestionIndex];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-[#556B2F]">Avocado Trivia Quiz</h1>
      <QuizQuestionComponent
        questionData={currentQuestion}
        onAnswerSelect={handleAnswerSelect}
        selectedAnswer={userAnswers[currentQuestion.id]}
      />
      <div className="flex justify-between items-center">
        <p className="text-[#4B371C]">Question {currentQuestionIndex + 1} of {initialQuestions.length}</p>
        <button
          onClick={handleNextQuestion}
          disabled={!userAnswers[currentQuestion.id]}
          className="bg-[#6B8E23] hover:bg-[#556B2F] text-white font-bold py-3 px-6 rounded-lg shadow transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentQuestionIndex < initialQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
        </button>
      </div>
      <p className="mt-4 text-sm text-center text-[#4B371C]/70">
        Scores are sorted using the <strong>Comb Sort</strong> algorithm!
      </p>
    </div>
  );
};

export default QuizClient;
