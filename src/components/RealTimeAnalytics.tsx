import { useState } from 'react';
import { ArrowUp, ArrowDown, ChevronDown, Clock, Users, Eye, Play } from 'lucide-react';

// Mock data for real-time analytics
const generateViewData = () => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const baseValue = 2500;
  
  return hours.map(hour => {
    // Generate a more realistic viewing pattern with peaks during certain hours
    let modifier = 1;
    
    // Morning peak (7-9 AM)
    if (hour >= 7 && hour <= 9) {
      modifier = 1.5 + Math.random() * 0.5;
    }
    // Lunch peak (12-1 PM)
    else if (hour >= 12 && hour <= 13) {
      modifier = 1.3 + Math.random() * 0.3;
    }
    // Evening peak (7-10 PM)
    else if (hour >= 19 && hour <= 22) {
      modifier = 1.8 + Math.random() * 0.7;
    }
    // Late night (0-5 AM)
    else if (hour >= 0 && hour <= 5) {
      modifier = 0.3 + Math.random() * 0.3;
    }
    
    const value = Math.floor(baseValue * modifier + (Math.random() * 500 - 250));
    return {
      hour: `${hour}:00`,
      views: value,
      prevViews: Math.floor(value * (0.85 + Math.random() * 0.3)) // Previous day comparison
    };
  });
};

// Generate mock data for content performance
const generateContentData = () => [
  {
    title: 'Influencer Island: Episode 1',
    views: 25431,
    change: 12.5,
    positive: true,
    engagement: 24.3
  },
  {
    title: 'Crypto Bros Market Crash',
    views: 18920,
    change: 8.7,
    positive: true,
    engagement: 19.8
  },
  {
    title: 'Beauty Guru Drama: Palette Wars',
    views: 14725,
    change: -3.2,
    positive: false,
    engagement: 15.2
  },
  {
    title: 'Fitness Influencer Olympics',
    views: 9845,
    change: 5.1,
    positive: true,
    engagement: 22.9
  }
];

const RealTimeAnalytics = () => {
  const [timeframe, setTimeframe] = useState('today');
  const [viewData] = useState(generateViewData());
  const [contentData] = useState(generateContentData());
  
  // Find the current hour based on the actual time
  const currentHour = new Date().getHours();
  const currentIndex = viewData.findIndex(item => parseInt(item.hour) === currentHour);
  
  // Calculate total views for today up to current hour
  const todayViews = viewData
    .slice(0, currentIndex + 1)
    .reduce((total, item) => total + item.views, 0);
  
  // Calculate total views for previous day up to current hour
  const prevDayViews = viewData
    .slice(0, currentIndex + 1)
    .reduce((total, item) => total + item.prevViews, 0);
  
  // Calculate the percentage change
  const percentChange = ((todayViews - prevDayViews) / prevDayViews) * 100;
  const isPositive = percentChange >= 0;
  
  // Calculate the max value for proper scaling of the chart
  const maxValue = Math.max(...viewData.map(item => Math.max(item.views, item.prevViews)));
  
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-xl font-bold">Real-Time Analytics</h2>
          <p className="text-gray-400 text-sm mt-1">
            Performance overview of your content
          </p>
        </div>
        <div className="mt-3 md:mt-0 relative">
          <button className="flex items-center bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-lg text-sm">
            <span>{timeframe === 'today' ? 'Today' : timeframe === 'week' ? 'This Week' : 'This Month'}</span>
            <ChevronDown size={16} className="ml-2" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Total Views Today</p>
              <h3 className="text-2xl font-bold mt-1">
                {todayViews.toLocaleString()}
              </h3>
              <div className={`flex items-center mt-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {isPositive ? 
                  <ArrowUp size={14} className="mr-1" /> : 
                  <ArrowDown size={14} className="mr-1" />
                }
                <span className="text-sm">{Math.abs(percentChange).toFixed(1)}% vs. yesterday</span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-blue-400/10 text-blue-400">
              <Eye size={20} />
            </div>
          </div>
        </div>
        
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Active Viewers</p>
              <h3 className="text-2xl font-bold mt-1">
                1,483
              </h3>
              <div className="flex items-center mt-1 text-green-400">
                <ArrowUp size={14} className="mr-1" />
                <span className="text-sm">8.2% vs. hour ago</span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-green-400/10 text-green-400">
              <Users size={20} />
            </div>
          </div>
        </div>
        
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Avg. Watch Time</p>
              <h3 className="text-2xl font-bold mt-1">
                2:34
              </h3>
              <div className="flex items-center mt-1 text-red-400">
                <ArrowDown size={14} className="mr-1" />
                <span className="text-sm">1.3% vs. yesterday</span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-purple-400/10 text-purple-400">
              <Clock size={20} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="rounded-lg border border-gray-700 p-4 mb-6">
        <h3 className="font-medium mb-4">Hourly Views</h3>
        
        <div className="relative h-44">
          {/* Chart baseline */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-gray-700"></div>
          
          {/* Hour markers */}
          <div className="flex justify-between text-xs text-gray-500 absolute bottom-0 left-2 right-2 transform translate-y-4">
            {viewData.filter((_, i) => i % 4 === 0).map((item, i) => (
              <div key={i}>{item.hour}</div>
            ))}
          </div>
          
          {/* Chart bars */}
          <div className="flex items-end h-40 justify-between relative mb-6">
            {viewData.map((item, i) => {
              const today = (item.views / maxValue) * 100;
              const yesterday = (item.prevViews / maxValue) * 100;
              
              return (
                <div key={i} className="flex flex-col items-center group">
                  <div className="relative flex h-full items-end">
                    {/* Today's bar */}
                    <div 
                      className="w-3 bg-yellow-500 rounded-t-sm mx-0.5"
                      style={{ height: `${today}%` }}
                    ></div>
                    
                    {/* Yesterday's bar */}
                    <div 
                      className="w-3 bg-gray-600 rounded-t-sm mx-0.5"
                      style={{ height: `${yesterday}%` }}
                    ></div>
                  </div>
                  
                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full mb-2 bg-gray-900 text-white text-xs rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    <div>Hour: {item.hour}</div>
                    <div>Today: {item.views.toLocaleString()} views</div>
                    <div>Yesterday: {item.prevViews.toLocaleString()} views</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="flex justify-center text-sm pt-6">
          <div className="flex items-center mr-4">
            <div className="w-3 h-3 bg-yellow-500 rounded-sm mr-1"></div>
            <span>Today</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-600 rounded-sm mr-1"></div>
            <span>Yesterday</span>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-medium mb-3">Top Performing Content</h3>
        
        <div className="bg-gray-700 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-600 text-left">
                <th className="py-2 px-4">Content</th>
                <th className="py-2 px-4 text-right">Views</th>
                <th className="py-2 px-4 text-right">Change</th>
                <th className="py-2 px-4 text-right">Engagement</th>
              </tr>
            </thead>
            <tbody>
              {contentData.map((item, i) => (
                <tr key={i} className="border-t border-gray-600 hover:bg-gray-600/50">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <Play size={16} className="text-yellow-400 mr-2" />
                      {item.title}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right font-medium">
                    {item.views.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <span className={item.positive ? 'text-green-400' : 'text-red-400'}>
                      {item.positive ? '+' : ''}{item.change}%
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end">
                      <div className="w-12 bg-gray-600 rounded-full h-1.5 mr-2">
                        <div 
                          className="bg-yellow-400 h-1.5 rounded-full" 
                          style={{ width: `${(item.engagement / 30) * 100}%` }}
                        ></div>
                      </div>
                      <span>{item.engagement}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-3 text-right">
          <button className="text-yellow-400 hover:underline text-sm">
            View Full Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default RealTimeAnalytics;
