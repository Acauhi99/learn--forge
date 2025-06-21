import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

type AppLinks = {
  name: string;
  path: string;
};

export interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  const [currentApp, setCurrentApp] = useState<string>('');

  useEffect(() => {
    if (currentPath.includes('/portfolio')) {
      setCurrentApp('portfolio');
    } else if (currentPath.includes('/blog')) {
      setCurrentApp('blog');
    } else {
      setCurrentApp('log-craft');
    }
  }, [currentPath]);

  const apps: AppLinks[] = [
    { name: 'Logic Training', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            <Link
              to="/"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition duration-200"
            >
              Acauhi Dev
            </Link>
          </h1>
        </div>

        <nav className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-4">
            {apps
              .filter(
                (app) =>
                  (app.name === 'Logic Training' &&
                    currentApp !== 'log-craft') ||
                  (app.name === 'Portfolio' && currentApp !== 'portfolio') ||
                  (app.name === 'Blog' && currentApp !== 'blog')
              )
              .map((app) => (
                <Link
                  key={app.name}
                  to={app.path}
                  className="px-3 py-2 text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition duration-200"
                >
                  {app.name}
                </Link>
              ))}
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
