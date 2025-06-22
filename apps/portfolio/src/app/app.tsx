import { Layout } from '@learn--forge/common';

export function App() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Mateus Acauhi's Portfolio</h1>
        <p className="text-lg mb-4">
          Welcome to my portfolio. I'm a passionate software developer
          specializing in frontend technologies and React applications.
        </p>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300">
            I'm a developer who loves creating intuitive and impactful user
            experiences. With expertise in React, TypeScript, and modern
            frontend frameworks, I build responsive and accessible web
            applications. When I'm not coding, you can find me exploring new
            technologies or contributing to open-source projects.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="h-40 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2">
                  Logic Training Platform
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  An interactive platform for practicing programming logic and
                  mathematical concepts.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded">
                    React
                  </span>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="h-40 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2">Technical Blog</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  A blog platform for sharing technical articles and insights
                  about software development.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded">
                    NX
                  </span>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded">
                    React
                  </span>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded">
                    MDX
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
