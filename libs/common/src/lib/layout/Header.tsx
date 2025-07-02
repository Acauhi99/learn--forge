import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { apps, AppConfig } from '../../apps.config';
import { ThemeToggle } from '../components/ThemeToggle';

const getAppUrl = (app: AppConfig): string => {
  if (app.prodUrlEnv && import.meta.env[app.prodUrlEnv]) {
    return import.meta.env[app.prodUrlEnv] as string;
  }
  return `http://localhost:${app.port}`;
};

export interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [currentApp, setCurrentApp] = useState<string>('');
  const location = useLocation();
  const currentPath = location.pathname;

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
  }, [currentPath]);

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
                  href={getAppUrl(app)}
                  className="px-3 py-2 text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition duration-200"
                >
                  {app.name}
                </a>
              ))}
          </div>
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </nav>
      </div>
    </header>
  );
}

export default Header;
