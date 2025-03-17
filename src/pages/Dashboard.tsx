import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  Users, 
  DollarSign,
  Play,
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import TrendingTopicsInsights from '../components/TrendingTopicsInsights';
import RealTimeAnalytics from '../components/RealTimeAnalytics';
import ContentCard from '../components/ContentCard';

const Dashboard = () => {
  // Recent videos data
  const recentVideos = [
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
    }
  ];

  // Stats data
  const statsData = [
    { 
      title: "Total Views", 
      value: "1.85M", 
      change: "+12.3%", 
      isPositive: true,
      icon: Users,
      color: "text-blue-400" 
    },
    { 
      title: "Avg. Engagement", 
      value: "24.7%", 
      change: "+2.5%", 
      isPositive: true,
      icon: TrendingUp,
      color: "text-green-400" 
    },
    { 
      title: "Production Time", 
      value: "4.2 days", 
      change: "-0.8 days", 
      isPositive: true,
      icon: Clock,
      color: "text-yellow-400" 
    },
    { 
      title: "Revenue", 
      value: "$18,420", 
      change: "-3.1%", 
      isPositive: false,
      icon: DollarSign,
      color: "text-purple-400" 
    }
  ];

  // Upcoming productions
  const upcomingProductions = [
    { 
      title: "Crypto Bros Market Crash", 
      date: "Apr 15, 2023", 
      status: "In Production", 
      completion: 65 
    },
    { 
      title: "Beauty Guru Drama: Palette Wars", 
      date: "Apr 22, 2023", 
      status: "Scripting", 
      completion: 30 
    },
    { 
      title: "Fitness Influencer Olympics", 
      date: "May 1, 2023", 
      status: "Concept", 
      completion: 10 
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-400 mt-1">Overview of your satirical content performance</p>
      </div>
      
      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, idx) => (
          <div key={idx} className="bg-gray-800 rounded-xl p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                <div className={`flex items-center mt-2 ${stat.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.isPositive ? 
                    <ArrowUp size={14} className="mr-1" /> : 
                    <ArrowDown size={14} className="mr-1" />
                  }
                  <span className="text-sm">{stat.change}</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}/10`}>
                <stat.icon size={24} className={stat.color} />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Real-time analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RealTimeAnalytics />
        </div>
        
        <div className="bg-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">Upcoming Productions</h2>
          <div className="space-y-6">
            {upcomingProductions.map((production, idx) => (
              <div key={idx} className="border-b border-gray-700 pb-4 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{production.title}</h3>
                  <div className="flex items-center">
                    <Calendar size={14} className="text-gray-400 mr-1" />
                    <span className="text-xs text-gray-400">{production.date}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-yellow-500 h-2 rounded-full" 
                    style={{ width: `${production.completion}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">{production.status}</span>
                  <span className="text-yellow-400">{production.completion}% Complete</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 bg-gray-700 hover:bg-gray-600 py-2 rounded-lg text-sm">
            View All Productions
          </button>
        </div>
      </div>
      
      {/* Trending topics insights */}
      <TrendingTopicsInsights />
      
      {/* Recent content */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Recent Content</h2>
          <button className="text-yellow-400 hover:text-yellow-300 text-sm">
            View All Content
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentVideos.map(video => (
            <ContentCard 
              key={video.id}
              title={video.title} 
              thumbnail={video.thumbnail}
              views={video.views}
              likes={video.likes}
              date={video.date}
              status={video.status}
              duration={video.duration}
              category={video.category}
              performance={video.performance}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
