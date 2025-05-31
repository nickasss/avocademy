// components/layout/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image'; // For logo

const Navbar: React.FC = () => {
  return (
    <nav className="bg-avocado-green shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center text-2xl font-bold text-white">
          {/* Add your logo here - e.g., public/avocado.svg */}
          {/* <Image src="/avocado.svg" alt="Avocademy Logo" width={40} height={40} className="mr-2" /> */}
          🥑 Avocademy
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-avocado-yellow transition-colors">Home</Link>
          <Link href="/quiz" className="text-white hover:text-avocado-yellow transition-colors">Avocado Quiz</Link>
          <Link href="/recipes" className="text-white hover:text-avocado-yellow transition-colors">Recipe Sorter</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;