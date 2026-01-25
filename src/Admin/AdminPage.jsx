import React, { useState } from 'react';
import { 
  Users, 
  Layout, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  CheckCircle,
  MoreVertical,
  ChevronRight,
  Shield
} from 'lucide-react';

// --- Mock Data ---
const MOCK_USERS = [
  { id: 1, name: 'Ridwan Ahmed', email: 'ridwan@example.com', role: 'Admin', status: 'Active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ridwan' },
  { id: 2, name: 'Sarah Chen', email: 'sarah.c@example.com', role: 'Editor', status: 'Active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
  { id: 3, name: 'Alex Johnson', email: 'alex.j@example.com', role: 'Viewer', status: 'Inactive', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' },
];

const MOCK_TEMPLATES = [
  { id: 1, name: 'E-commerce Landing', category: 'Retail', lastModified: '2023-10-24', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Corporate Blog', category: 'Business', lastModified: '2023-11-02', thumbnail: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Portfolio Minimal', category: 'Creative', lastModified: '2023-11-15', thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Travel Agency', category: 'Services', lastModified: '2023-12-01', thumbnail: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80' },
];

// --- Components ---

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
      active 
        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
    }`}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </button>
);

const UserSection = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
      <h2 className="text-xl font-bold text-gray-800">User Management</h2>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all">
        <Plus size={18} />
        <span>Add User</span>
      </button>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
          <tr>
            <th className="px-6 py-4">User</th>
            <th className="px-6 py-4">Role</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {MOCK_USERS.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center space-x-3">
                  <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full bg-gray-100" />
                  <div>
                    <div className="font-semibold text-gray-800">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  user.role === 'Admin' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {user.role}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'}`} />
                  <span className="text-sm text-gray-700">{user.status}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-3 text-gray-400">
                  <button className="hover:text-blue-600"><Edit2 size={18} /></button>
                  <button className="hover:text-red-600"><Trash2 size={18} /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const TemplateSection = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold text-gray-800">CMS Templates</h2>
        <p className="text-sm text-gray-500">Manage your website themes and layouts</p>
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
        <Plus size={18} />
        <span>Create Template</span>
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {MOCK_TEMPLATES.map((tpl) => (
        <div key={tpl.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={tpl.thumbnail} 
              alt={tpl.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
              <button className="bg-white text-gray-900 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-100">Preview</button>
              <button className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-blue-700">Edit</button>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-gray-800">{tpl.name}</h3>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{tpl.category}</span>
            </div>
            <p className="text-xs text-gray-400 flex items-center">
              Last updated: {tpl.lastModified}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('users');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-white border-r border-gray-200 transition-all duration-300 flex flex-col fixed h-full z-20`}
      >
        <div className="p-6 flex items-center justify-between">
          <div className={`flex items-center space-x-3 overflow-hidden ${!isSidebarOpen && 'hidden'}`}>
            <div className="bg-blue-600 p-2 rounded-lg">
              <Shield className="text-white" size={24} />
            </div>
            <span className="text-xl font-black tracking-tight text-gray-900">CMS.IO</span>
          </div>
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-gray-400 hover:text-gray-600">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <SidebarItem 
            icon={Users} 
            label={isSidebarOpen ? "Users" : ""} 
            active={activeTab === 'users'} 
            onClick={() => setActiveTab('users')}
          />
          <SidebarItem 
            icon={Layout} 
            label={isSidebarOpen ? "Templates" : ""} 
            active={activeTab === 'templates'} 
            onClick={() => setActiveTab('templates')}
          />
          <SidebarItem 
            icon={Settings} 
            label={isSidebarOpen ? "Settings" : ""} 
            active={activeTab === 'settings'} 
            onClick={() => setActiveTab('settings')}
          />
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button className="w-full flex items-center space-x-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
            <LogOut size={20} />
            <span className={`font-medium ${!isSidebarOpen && 'hidden'}`}>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10 px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-blue-500 transition-all text-sm"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-bold text-gray-800">Ridwan Ahmed</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Super Admin</div>
              </div>
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ridwan" 
                alt="Profile" 
                className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
              />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8 max-w-7xl mx-auto">
          {activeTab === 'users' && <UserSection />}
          {activeTab === 'templates' && <TemplateSection />}
          {activeTab === 'settings' && (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
              <Settings size={64} className="mb-4 animate-spin-slow" />
              <p className="text-xl font-medium">Settings Configuration Coming Soon</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}