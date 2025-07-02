export type AppConfig = {
  name: string;
  appId: string;
  port: string;
  pathIndicator: string;
  prodUrlEnv?: string;
};

export const apps: AppConfig[] = [
  {
    name: 'Logic Training',
    appId: 'log-craft',
    port: '4204',
    pathIndicator: '/log-craft',
    prodUrlEnv: 'VITE_LOGCRAFT_URL',
  },
  {
    name: 'Portfolio',
    appId: 'portfolio',
    port: '4202',
    pathIndicator: '/portfolio',
    prodUrlEnv: 'VITE_PORTFOLIO_URL',
  },
  {
    name: 'Blog',
    appId: 'blog',
    port: '4201',
    pathIndicator: '/blog',
    prodUrlEnv: 'VITE_BLOG_URL',
  },
];
