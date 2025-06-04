
"use client";

import Link from "next/link";
import Image from "next/image";


const Navbar: React.FC = () => {


  return (
    <nav className="bg-[#8BC34A] shadow-md fixed top-0 w-full z-50">
      {" "}
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center text-2xl font-bold text-white"
        >
          🥑 Avocademy
        </Link>
        <div className="space-x-4">
          <Link
            href="/"
            className="text-white hover:text-[#FFF8E1] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/quiz"
            className="text-white hover:text-[#FFF8E1] transition-colors"
          >
            Avocado Quiz
          </Link>
          <Link
            href="/recipes"
            className="text-white hover:text-[#FFF8E1] transition-colors"
          >
            Recipe Sorter
          </Link>
          <Link // New Link for Visualizer
            href="/visualizer"
            className="text-white hover:text-[#FFF8E1] transition-colors"
          >
            Visualizer
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
