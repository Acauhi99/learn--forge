import { Layout } from '@learn--forge/common';

export function App() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Technical Blog</h1>
        <p className="text-lg mb-4">
          Welcome to my technical blog. Here you'll find articles about
          programming, web development, and technology.
        </p>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Articles</h2>

          <div className="space-y-6">
            <article className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                Getting Started with React and TypeScript
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                A comprehensive guide to setting up a new project with React and
                TypeScript, including best practices and common pitfalls.
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span>June 15, 2025</span>
                <span className="mx-2">•</span>
                <span>5 min read</span>
              </div>
            </article>

            <article className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                Monorepo Architecture with NX
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Learn how to structure large applications using NX monorepo,
                share code between projects, and enhance your development
                workflow.
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span>June 10, 2025</span>
                <span className="mx-2">•</span>
                <span>8 min read</span>
              </div>
            </article>

            <article>
              <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                Tailwind CSS: The Good, The Bad, and The Beautiful
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                A deep dive into Tailwind CSS, exploring its utility-first
                approach, performance optimizations, and component patterns.
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span>June 5, 2025</span>
                <span className="mx-2">•</span>
                <span>6 min read</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
