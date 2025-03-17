import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  Home, 
  BarChart2, 
  Play, 
  Settings as SettingsIcon, 
  Menu, 
  X,
  User,
  Search,
  Bell,
  ChevronDown
} from 'lucide-react';

// Import pages
import Dashboard from './pages/Dashboard';
import Content from './pages/Content';
import Settings from './pages/Settings';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex">
        {/* Mobile sidebar toggle */}
        <button 
          className="fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-md lg:hidden"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Sidebar */}
        <div className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="h-full flex flex-col">
            <div className="px-6 py-8">
              <h1 className="text-2xl font-bold text-yellow-500">SatireStudio</h1>
              <p className="text-sm text-gray-400 mt-1">South Park-Style Creator</p>
            </div>
            
            <nav className="flex-1 px-4 py-2">
              <div className="space-y-1">
                <Link 
                  to="/" 
                  className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
                >
                  <Home size={20} className="mr-3" />
                  <span>Dashboard</span>
                </Link>
                <Link 
                  to="/content" 
                  className="flex items-center px-4 py-3 text-yellow-500 bg-yellow-500/10 rounded-lg transition-colors"
                >
                  <Play size={20} className="mr-3" />
                  <span>Content</span>
                </Link>
                
                <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mt-6 mb-2">
                  Analytics
                </div>
                
                <button className="w-full flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors">
                  <BarChart2 size={20} className="mr-3" />
                  <span>Performance</span>
                </button>
                
                <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mt-6 mb-2">
                  Settings
                </div>
                
                <Link 
                  to="/settings" 
                  className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
                >
                  <SettingsIcon size={20} className="mr-3" />
                  <span>Settings</span>
                </Link>
              </div>
            </nav>
            
            <div className="px-4 py-6 border-t border-gray-700">
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
                  alt="User" 
                  className="h-10 w-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-medium">Tom Sherman</div>
                  <div className="text-sm text-gray-400">Producer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col">
          {/* Top navigation */}
          <header className="bg-gray-800 shadow-md">
            <div className="flex justify-between items-center px-6 py-4">
              <div className="flex-1 flex">
                <div className="relative max-w-md w-full lg:max-w-xs">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={18} className="text-gray-400" />
                  </div>
                  <input
                    className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent sm:text-sm"
                    placeholder="Search content..."
                    type="search"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="text-gray-400 hover:text-white">
                  <Bell size={20} />
                </button>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                    alt="User"
                    className="h-8 w-8 rounded-full"
                  />
                  <div className="flex items-center ml-2 cursor-pointer">
                    <span className="text-sm font-medium hidden md:block">Tom Sherman</span>
                    <ChevronDown size={16} className="ml-1 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </header>
          
          {/* Main content */}
          <main className="flex-1 overflow-y-auto bg-gray-900 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/content" element={<Content />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
