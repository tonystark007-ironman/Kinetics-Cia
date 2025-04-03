import React, { useState, useEffect } from 'react';
import { Clock, Calendar as CalendarIcon, Moon, Users, Briefcase, Bell, CheckCircle, AlertTriangle } from 'lucide-react';

const Home = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const stats = [
    { title: 'Pending Tasks', value: '12', subtitle: '4 urgent', icon: AlertTriangle, color: 'text-orange-500' },
    { title: "Today's Meetings", value: '3', subtitle: 'Next at 2:00 PM', icon: Users, color: 'text-blue-500' },
    { title: 'Team Members', value: '6', subtitle: '4 active now', icon: Users, color: 'text-green-500' },
    { title: 'Projects', value: '8', subtitle: '2 due this week', icon: Briefcase, color: 'text-purple-500' },
  ];

  const recentNotifications = [
    { id: 1, text: 'New project assigned: UI Redesign', time: '5m ago', type: 'project' },
    { id: 2, text: 'Team meeting in 30 minutes', time: '10m ago', type: 'meeting' },
    { id: 3, text: 'Task completed by Rachel', time: '15m ago', type: 'task' },
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">{getGreeting()}, Ash!</h1>
        <p className="text-blue-100">Welcome to your Process Planning Dashboard</p>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-4">
            <Clock className="w-6 h-6 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Current Time</p>
              <p className="text-xl font-semibold">{currentTime}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-4">
            <CalendarIcon className="w-6 h-6 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Today's Date</p>
              <p className="text-xl font-semibold">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-4">
            <Moon className="w-6 h-6 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Weather</p>
              <p className="text-xl font-semibold">Clear Night</p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{stat.title}</h3>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Recent Notifications */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Recent Notifications</h2>
          <Bell className="w-5 h-5 text-gray-500" />
        </div>
        <div className="space-y-4">
          {recentNotifications.map((notification) => (
            <div key={notification.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-sm font-medium">{notification.text}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;