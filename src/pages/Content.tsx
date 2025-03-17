import { useState } from 'react';
import { Search, Filter, PlusCircle, Calendar, Clock, Tag, ChevronDown, Edit, Trash2 } from 'lucide-react';
import ContentCard from '../components/ContentCard';
import AIContentWorkshop from '../components/AIContentWorkshop';

// Realistic content data with varied types, statistics and statuses
const contentData = [
  {
    id: 1,
    title: "Influencer Island: Episode 1 - The Arrival",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    views: "246K",
    likes: "18.5K",
    date: "3 weeks ago",
    status: "published",
    duration: "4:32",
    category: "Episode",
    performance: "high"
  },
  {
    id: 2,
    title: "Fitness Guru Protein Powder Wars",
    thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    views: "124K",
    likes: "8.2K",
    date: "2 days ago",
    status: "published",
    duration: "3:15",
    category: "Episode",
    performance: "medium"
  },
  {
    id: 3,
    title: "Tech Bro Meltdown: When the Servers Crashed",
    thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    views: "98K",
    likes: "6.5K",
    date: "1 week ago",
    status: "published",
    duration: "3:45",
    category: "Episode",
    performance: "medium"
  },
  {
    id: 4,
    title: "Beauty Guru Drama: Palette Launch Disaster",
    thumbnail: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    views: "187K",
    likes: "14.3K",
    date: "2 weeks ago",
    status: "published",
    duration: "4:12",
    category: "Episode",
    performance: "high"
  },
  {
    id: 5,
    title: "Crypto Currency Crash: NFT Edition",
    thumbnail: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    views: "142K",
    likes: "9.7K",
    date: "10 days ago",
    status: "published",
    duration: "3:28",
    category: "Episode",
    performance: "high"
  },
  {
    id: 6,
    title: "Lifestyle Guru Morning Routine Parody",
    thumbnail: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    views: "-",
    likes: "-",
    date: "Scheduled for tomorrow",
    status: "scheduled",
    duration: "3:50",
    category: "Episode",
    performance: null
  },
  {
    id: 7,
    title: "Behind the Scenes: Character Design Process",
    thumbnail: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    views: "76K",
    likes: "5.2K",
    date: "1 month ago",
    status: "published",
    duration: "5:20",
    category: "BTS",
    performance: "medium"
  },
  {
    id: 8,
    title: "Travel Influencer Expectations vs Reality",
    thumbnail: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    views: "-",
    likes: "-",
    date: "Draft saved 2 days ago",
    status: "draft",
    duration: "4:05",
    category: "Episode",
    performance: null
  },
  {
    id: 9,
    title: "Gaming Streamer Meltdown Compilation",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    views: "201K",
    likes: "15.9K",
    date: "3 weeks ago",
    status: "published",
    duration: "4:45",
    category: "Compilation",
    performance: "high"
  }
];

const Content = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('date');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAIWorkshop, setShowAIWorkshop] = useState<boolean>(false);
  
  // Filter and sort content based on selections
  const filteredContent = contentData
    .filter(item => {
      // Filter by category
      if (filterCategory !== 'all' && item.category.toLowerCase() !== filterCategory) {
        return false;
      }
      
      // Filter by status
      if (filterStatus !== 'all' && item.status !== filterStatus) {
        return false;
      }
      
      // Filter by search query
      if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      return true;
    })
    .sort((a, b) => {
      // Sort by selected criteria
      switch (sortBy) {
        case 'date':
          // Simple approximation for date sorting (in a real app, would use actual date objects)
          return a.id < b.id ? 1 : -1;
        case 'views':
          const aViews = a.views === '-' ? 0 : parseInt(a.views.replace('K', '000'));
          const bViews = b.views === '-' ? 0 : parseInt(b.views.replace('K', '000'));
          return bViews - aViews;
        case 'title':
          return a.title.localeCompare(b.title);
        case 'performance':
          const performanceRank = { high: 3, medium: 2, low: 1, null: 0 };
          return performanceRank[b.performance] - performanceRank[a.performance];
        default:
          return 0;
      }
    });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Content Library</h1>
          <p className="text-gray-400 mt-1">Manage your satire episodes and assets</p>
        </div>
        <button 
          onClick={() => setShowAIWorkshop(!showAIWorkshop)}
          className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-4 py-2 rounded-lg"
        >
          <PlusCircle size={18} className="mr-2" />
          Create Content
        </button>
      </div>

      {showAIWorkshop ? (
        <div className="mb-8">
          <AIContentWorkshop />
        </div>
      ) : null}

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
            <Filter size={18} className="mr-2 text-gray-400" />
            <span>Filter</span>
          </button>
          
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="all">All Types</option>
            <option value="episode">Episodes</option>
            <option value="bts">Behind The Scenes</option>
            <option value="compilation">Compilations</option>
            <option value="trailer">Trailers</option>
          </select>
          
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="scheduled">Scheduled</option>
            <option value="draft">Drafts</option>
          </select>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="date">Newest First</option>
            <option value="views">Most Views</option>
            <option value="title">A-Z</option>
            <option value="performance">Performance</option>
          </select>
          
          <button 
            onClick={() => setViewMode('grid')}
            className={`px-3 py-2 rounded-lg ${viewMode === 'grid' ? 'bg-gray-700' : 'bg-gray-800'}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
              <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
              <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
              <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`px-3 py-2 rounded-lg ${viewMode === 'list' ? 'bg-gray-700' : 'bg-gray-800'}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 6H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 12H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 18H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map(content => (
            <ContentCard 
              key={content.id}
              title={content.title} 
              thumbnail={content.thumbnail}
              views={content.views}
              likes={content.likes}
              date={content.date}
              status={content.status}
              duration={content.duration}
              category={content.category}
              performance={content.performance}
            />
          ))}
        </div>
      ) : (
        <div className="bg-gray-800 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-700">
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Duration</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Views</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredContent.map(content => (
                <tr key={content.id} className="border-t border-gray-700 hover:bg-gray-700/50">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded bg-gray-700 mr-3 overflow-hidden flex-shrink-0">
                        <img src={content.thumbnail} alt={content.title} className="w-full h-full object-cover" />
                      </div>
                      <span className="font-medium">{content.title}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-700">
                      {content.category}
                    </span>
                  </td>
                  <td className="py-3 px-4">{content.duration}</td>
                  <td className="py-3 px-4">{content.date}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      content.status === 'published' ? 'bg-green-400/20 text-green-400' :
                      content.status === 'scheduled' ? 'bg-blue-400/20 text-blue-400' :
                      'bg-gray-400/20 text-gray-400'
                    }`}>
                      {content.status.charAt(0).toUpperCase() + content.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 px-4">{content.views}</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="p-1 hover:bg-gray-600 rounded">
                        <Edit size={16} />
                      </button>
                      <button className="p-1 hover:bg-gray-600 rounded">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <div className="mt-6 flex justify-between items-center">
        <div className="text-sm text-gray-400">
          Showing {filteredContent.length} of {contentData.length} items
        </div>
        <div className="flex space-x-1">
          <button className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600">
            Previous
          </button>
          <button className="px-3 py-1 rounded bg-yellow-500 text-black">1</button>
          <button className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600">2</button>
          <button className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600">3</button>
          <button className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
