import React, { useState, useEffect } from "react";

// Main App component
const App = () => {
  // State for the CI/CD status, initialized to a pending state.
  const [status, setStatus] = useState("⏳ Checking...");

  // useEffect hook to simulate a build status update after 2 seconds.
  useEffect(() => {
    // A timer that runs once after the component mounts.
    setTimeout(() => {
      // Update the status state to 'Build Passing'.
      setStatus("✅ Build Passing");
    }, 2000); // 2000 milliseconds = 2 seconds.
  }, []); // The empty dependency array ensures this effect runs only once.

  return (
    // The main container. It uses a dual-tone dark gradient and centers the content.
    // The min-h-screen ensures it fills the entire viewport height.
    // I've added a solid background color as a fallback for the gradient.
    <div className="min-h-screen bg-gray-900 bg-gradient-to-br from-slate-900 to-gray-950 flex flex-col items-center justify-center p-4 md:p-8 font-sans">
      
      {/* Header section with a prominent, styled title */}
      <header className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
          CloudSniper
        </h1>
        <p className="text-xl md:text-2xl text-blue-400 font-light tracking-wide mt-2">
          DevOps Dashboard
        </p>
      </header>

      {/* Grid container for the main cards. Uses a responsive grid layout. */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        
        {/* CI/CD Status Card */}
        {/* Each card has a similar style for a consistent look. */}
        <div className="bg-slate-800/70 text-gray-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:scale-105 border border-slate-700 backdrop-blur-sm flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-3 text-green-400">CI/CD Status</h2>
          <p className="text-3xl font-extrabold mb-4">{status}</p>
          <a
            href="https://github.com/ANURAGNAKUL2702/dummy-pipeline-practice/actions"
            target="_blank"
            rel="noreferrer"
            className="mt-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition transform hover:translate-y-0.5"
          >
            View Pipeline Logs
          </a>
        </div>

        {/* Deployment Info Card */}
        <div className="bg-slate-800/70 text-gray-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:scale-105 border border-slate-700 backdrop-blur-sm flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-3 text-yellow-400"> Deployment</h2>
          <p className="text-lg">Environment: <span className="font-semibold text-white">AWS EC2</span></p>
          <p className="text-lg">Last Deployed: <span className="font-semibold text-white">2 hours ago</span></p>
          <button className="mt-auto px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition transform hover:translate-y-0.5">
            🔄 Rollback
          </button>
        </div>

        {/* Alerts/Notifications Card */}
        <div className="bg-slate-800/70 text-gray-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:scale-105 border border-slate-700 backdrop-blur-sm flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-3 text-red-400">⚡ Alerts</h2>
          <ul className="space-y-2 text-left w-full mt-4">
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>Build Successful</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>Docker Image Pushed</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>Deployed on EC2</span>
            </li>
          </ul>
        </div>

        {/* Profile/Owner Info Card */}
        <div className="bg-slate-800/70 text-gray-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:scale-105 border border-slate-700 backdrop-blur-sm flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-3 text-pink-400">👨‍💻 About</h2>
          <p className="text-lg">
            Made with ❤️ by <span className="font-bold text-white">Anurag</span>
          </p>
          <p className="text-sm opacity-70">Role: DevOps Intern</p>
        </div>
      </main>

      {/* Footer section with copyright information */}
      <footer className="mt-12 text-sm opacity-60 text-gray-400">
        © 2025 CloudSniper | All Rights Reserved
      </footer>
    </div>
  );
};

export default App;
