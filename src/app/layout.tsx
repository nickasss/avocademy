import './globals.css'; // Import global styles
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar'; // Assuming Navbar is in components/layout

export const metadata: Metadata = {
  title: {
    default: 'Avocademy',
    template: '%s | Avocademy', // For page-specific titles
  },
  description: 'Learn about avocados and see Comb Sort in action!',
  // Add more metadata like icons, open graph, etc.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-avocado-yellow">
        <Navbar />
        <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
        <footer className="bg-avocado-green-dark text-white text-center p-4">
          © {new Date().getFullYear()} Avocademy - All about Avocados!
        </footer>
      </body>
    </html>
  );
}