import './globals.css'; 
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar'; 

export const metadata: Metadata = {
  title: {
    default: 'Avocademy',
    template: '%s | Avocademy',
  },
  description: 'Learn about avocados and see Comb Sort in action!',

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#FFF8E1] pt-12 md:pt-16">
        <Navbar />
        <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
        <footer className="bg-[#558B2F] text-white text-center p-4">
          © {new Date().getFullYear()} Avocademy - All about Avocados!
        </footer>
      </body>
    </html>
  );
}
