import { useState, useEffect, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

export interface LayoutProps {
  children: ReactNode;
}

// Helper to check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

export function Layout({ children }: LayoutProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Initialize dark mode based on user preference or system preference
  useEffect(() => {
    if (!isBrowser) return;

    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode === 'true');
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Apply dark mode class to the document when darkMode state changes
  useEffect(() => {
    if (!isBrowser) return;

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
