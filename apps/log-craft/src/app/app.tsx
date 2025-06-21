import { Layout } from '@learn--forge/common';

export function App() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Logic Training Platform</h1>
        <p className="text-lg mb-4">
          Welcome to the Logic Training platform! Here you can practice
          programming logic and mathematical concepts.
        </p>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
          <p className="mb-3">Choose a category below to start practicing:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                Programming Logic
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Loops, conditions, algorithms and more.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-gray-700 p-4 rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                Mathematical Logic
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Equations, geometry, calculus and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
