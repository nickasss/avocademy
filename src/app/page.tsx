import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Welcome to Avocademy!",
  description:
    "Your go-to place for avocado trivia, recipes, and learning about Comb Sort.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4 pb-16 md:pb-24">
      <section className="w-full py-12 md:py-20 lg:py-28 bg-[#C5E1A5] rounded-xl shadow-xl">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#558B2F]">
              Welcome to <span className="text-[#8BC34A]">Avocademy</span>!
            </h1>
            <p className="max-w-[700px] text-[#795548] md:text-xl">
              Discover amazing avocado facts, test your knowledge with our
              trivia quiz, explore delicious avocado recipes, and visualize
              sorting algorithms like Comb Sort in action.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link
                href="/quiz"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#8BC34A] px-8 text-lg font-medium text-white shadow transition-colors hover:bg-[#558B2F] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#558B2F]"
              >
                Take the Quiz
              </Link>
              <Link
                href="/recipes"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#689F38] px-8 text-lg font-medium text-white shadow transition-colors hover:bg-[#558B2F] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#558B2F]"
              >
                Browse Recipes
              </Link>
              <Link
                href="/visualizer"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#558B2F] px-8 text-lg font-medium text-white shadow transition-colors hover:bg-[#387002] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#387002]"
              >
                Visualize Sort
              </Link>
              <Link
                href="/leaderboard"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#4CAF50] px-8 text-lg font-medium text-white shadow transition-colors hover:bg-[#388E3C] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#388E3C]"
              >
                View Leaderboard
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center text-[#558B2F] mb-10">
            What You'll Find
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {" "}
            <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-lg shadow-md border border-[#C5E1A5]">
              <div className="text-4xl text-[#8BC34A]">❔</div>
              <h3 className="text-xl font-semibold text-[#558B2F]">
                Avocado Quiz
              </h3>
              <p className="text-[#795548] text-sm text-center">
                Test your knowledge about avocados. See how you rank!
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-lg shadow-md border border-[#C5E1A5]">
              <div className="text-4xl text-[#8BC34A]">🏆</div>
              <h3 className="text-xl font-semibold text-[#558B2F]">
                Global Leaderboard
              </h3>
              <p className="text-[#795548] text-sm text-center">
                Check out the top players. Sort by score, name, or date using
                Comb Sort!
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-lg shadow-md border border-[#C5E1A5]">
              <div className="text-4xl text-[#8BC34A]">🍳</div>
              <h3 className="text-xl font-semibold text-[#558B2F]">
                Recipe Sorter
              </h3>
              <p className="text-[#795548] text-sm text-center">
                Find avocado recipes and sort them by difficulty or cook time.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-lg shadow-md border border-[#C5E1A5]">
              <div className="text-4xl text-[#8BC34A]">📊</div>
              <h3 className="text-xl font-semibold text-[#558B2F]">
                Comb Sort in Action
              </h3>
              <p className="text-[#795548] text-sm text-center">
                See practical applications of the Comb Sort algorithm.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-lg shadow-md border border-[#C5E1A5]">
              <div className="text-4xl text-[#8BC34A]">👁️</div>
              <h3 className="text-xl font-semibold text-[#558B2F]">
                Algorithm Visualizer
              </h3>
              <p className="text-[#795548] text-sm text-center">
                Watch sorting algorithms like Comb Sort come to life step by
                step.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
