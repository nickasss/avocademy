// components/layout/Layout.tsx
import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-avocado-yellow">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>
      <footer className="bg-avocado-green-dark text-white text-center p-4">
        © {new Date().getFullYear()} Avocademy - Learn all about Avocados!
      </footer>
    </div>
  );
};

export default Layout;