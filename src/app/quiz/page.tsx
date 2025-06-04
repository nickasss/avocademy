// app/quiz/page.tsx
import type { Metadata } from 'next';
import QuizClient from '@/components/quiz/QuizClient';
import { avocadoQuizQuestions } from '@/data/quizQuestions';


export const metadata: Metadata = {
  title: 'Avocado Quiz',
  description: 'Test your avocado knowledge with our interactive quiz!',
};


async function getQuizData() {
  return avocadoQuizQuestions;
}

export default async function QuizPage() {
  const questions = await getQuizData();

  return (
    <div>
      <QuizClient initialQuestions={questions} />
    </div>
  );
}