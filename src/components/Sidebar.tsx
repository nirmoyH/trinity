import React from 'react';
import { Home, Gamepad2, BookOpen, Info, Mail, Settings, ChevronRight, ChevronLeft } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  isMobile: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  scrollToSection,
  collapsed,
  setCollapsed,
  isMobile
}) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'games', label: 'Games', icon: <Gamepad2 size={20} /> },
    { id: 'blog', label: 'Blog', icon: <BookOpen size={20} /> },
    { id: 'about', label: 'About', icon: <Info size={20} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> }
  ];

  if (isMobile) {
    return (
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900/90 backdrop-blur-md shadow-lg transform transition-transform duration-300 ${
          collapsed ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-purple-500/30">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <Gamepad2 size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Trinity Game World
            </span>
          </div>
          <button
            onClick={() => setCollapsed(true)}
            className="p-1 rounded-full bg-purple-900/50 text-blue-400 hover:bg-purple-800/50 transition-all"
          >
            <ChevronLeft size={16} />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-purple-900/50 text-blue-400 shadow-lg shadow-purple-900/20'
                      : 'text-gray-400 hover:bg-gray-800/50 hover:text-blue-400'
                  }`}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }

  return (
    <div
   className={`fixed left-0 top-0 h-screen transition-all duration-300 ${
     collapsed ? 'w-16' : 'w-64'
   } bg-gray-900/90 backdrop-blur-md border-r border-purple-500/30 z-40`}
>


      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-purple-500/30">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <Gamepad2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Trinity Game World
              </span>
            </div>
          )}
          {collapsed && (
            <div className="mx-auto">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <Gamepad2 size={16} className="text-white" />
              </div>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-full bg-purple-900/50 text-blue-400 hover:bg-purple-800/50 transition-all"
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center ${
                    collapsed ? 'justify-center' : 'space-x-3'
                  } p-3 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-purple-900/50 text-blue-400 shadow-lg shadow-purple-900/20'
                      : 'text-gray-400 hover:bg-gray-800/50 hover:text-blue-400'
                  }`}
                  title={collapsed ? item.label : ''}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {!collapsed && <span className="font-medium">{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-purple-500/30">
          <div className={`flex ${collapsed ? 'justify-center' : 'items-center space-x-3'}`}>
            {!collapsed && (
              <div>
                <p className="text-xs text-gray-400">© 2025 Trinity Game World</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;