import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

type AppConfig = {
  name: string;
  appId: string;
  port: string;
  pathIndicator?: string;
};

const getAppUrl = (appId: string, port: string): string => {
  const envUrls: Record<string, string | undefined> = {
    'log-craft': import.meta.env.VITE_LOGCRAFT_URL,
    portfolio: import.meta.env.VITE_PORTFOLIO_URL,
    blog: import.meta.env.VITE_BLOG_URL,
  };

  const url = envUrls[appId] || `http://localhost:${port}`;

  if (
    import.meta.env.DEV &&
    !url.includes('localhost') &&
    !url.includes('127.0.0.1')
  ) {
    console.warn(
      `Unexpected URL for ${appId}: ${url}. Defaulting to localhost.`
    );
    return `http://localhost:${port}`;
  }

  return url;
};

export interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [currentApp, setCurrentApp] = useState<string>('');
  const location = useLocation();
  const currentPath = location.pathname;

  const apps = useMemo<AppConfig[]>(
    () => [
      {
        name: 'Logic Training',
        appId: 'log-craft',
        port: '4204',
        pathIndicator: '/log-craft',
      },
      {
        name: 'Portfolio',
        appId: 'portfolio',
        port: '4202',
        pathIndicator: '/portfolio',
      },
      {
        name: 'Blog',
        appId: 'blog',
        port: '4201',
        pathIndicator: '/blog',
      },
    ],
    []
  );

  useEffect(() => {
    const currentPort = window.location.port;
    const appByPort = apps.find((app) => app.port === currentPort);

    if (appByPort) {
      setCurrentApp(appByPort.appId);
      return;
    }

    const appByPath = apps.find((app) =>
      app.pathIndicator ? currentPath.includes(app.pathIndicator) : false
    );

    if (appByPath) {
      setCurrentApp(appByPath.appId);
      return;
    }

    setCurrentApp(apps[0].appId);
  }, [currentPath, apps]);

  return (
    <header className="w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            <a
              href="/"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition duration-200"
            >
              Acauhi Dev
            </a>
          </h1>
        </div>

        <nav className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-4">
            {apps
              .filter((app) => app.appId !== currentApp)
              .map((app) => (
                <a
                  key={app.name}
                  href={getAppUrl(app.appId, app.port)}
                  className="px-3 py-2 text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition duration-200"
                >
                  {app.name}
                </a>
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
