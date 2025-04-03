import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Calendar, MessageSquare, Users, BarChart2, Settings } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/calendar', icon: Calendar, label: 'Calendar' },
    { path: '/chat', icon: MessageSquare, label: 'Chat' },
    { path: '/team', icon: Users, label: 'Team' },
    { path: '/reports', icon: BarChart2, label: 'Reports' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-64 min-h-screen bg-blue-600">
      <div className="p-6 flex items-center space-x-3">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold text-blue-600">A</span>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white">Ash</h2>
          <p className="text-sm text-blue-100">Project Manager</p>
        </div>
      </div>
      <nav className="mt-8">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-blue-100 hover:bg-blue-700 ${
                isActive ? 'bg-blue-700' : ''
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="absolute bottom-4 w-64 px-6">
        <div className="text-blue-100 text-sm">Process Planning Dashboard</div>
      </div>
    </div>
  );
};

export default Sidebar;