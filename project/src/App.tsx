import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Chat from './pages/Chat';
import Team from './pages/Team';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import ChatWidget from './components/ChatWidget';
import { Sun, Moon, MessageCircle } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showChatWidget, setShowChatWidget] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <div className="p-4 flex justify-between items-center border-b">
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Welcome, Ash
              </h1>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowChatWidget(!showChatWidget)}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <MessageCircle className={darkMode ? 'text-white' : 'text-gray-800'} />
                </button>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {darkMode ? (
                    <Sun className="text-white" />
                  ) : (
                    <Moon className="text-gray-800" />
                  )}
                </button>
              </div>
            </div>
            <div className="p-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/team" element={<Team />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
        {showChatWidget && <ChatWidget onClose={() => setShowChatWidget(false)} />}
      </div>
    </Router>
  );
}

export default App;