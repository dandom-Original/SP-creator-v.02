import { useState } from 'react';
import { ChevronDown, DollarSign, TrendingUp, Calendar } from 'lucide-react';

// Mock data for monetization chart
const generateMonthlyData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currentMonth = new Date().getMonth();
  
  return months.map((month, i) => {
    // For past months, generate realistic looking revenue
    if (i <= currentMonth) {
      // Base revenue that increases over time
      const baseRevenue = 1000 + (i * 200);
      // Add some random variation
      const variance = baseRevenue * 0.2 * (Math.random() - 0.5);
      return {
        month,
        revenue: Math.round(baseRevenue + variance),
        subscriberRevenue: Math.round((baseRevenue + variance) * 0.6),
        adRevenue: Math.round((baseRevenue + variance) * 0.3),
        merchandiseRevenue: Math.round((baseRevenue + variance) * 0.1)
      };
    }
    
    // For future months, return null
    return {
      month,
      revenue: null,
      subscriberRevenue: null,
      adRevenue: null,
      merchandiseRevenue: null
    };
  });
};

// Generate revenue by platform data
const generatePlatformData = () => [
  { platform: 'YouTube', revenue: 3850, growth: 12.5 },
  { platform: 'TikTok', revenue: 1240, growth: 24.8 },
  { platform: 'Patreon', revenue: 2780, growth: 8.3 },
  { platform: 'Merchandise', revenue: 980, growth: -3.2 }
];

const MonetizationChart = () => {
  const [timeframe, setTimeframe] = useState('year');
  const [monthlyData] = useState(generateMonthlyData());
  const [platformData] = useState(generatePlatformData());
  
  // Calculate totals
  const totalRevenue = monthlyData
    .filter(item => item.revenue !== null)
    .reduce((sum, item) => sum + item.revenue, 0);
  
  const lastMonthRevenue = monthlyData
    .filter(item => item.revenue !== null)
    .slice(-1)[0].revenue;
  
  const previousMonthRevenue = monthlyData
    .filter(item => item.revenue !== null)
    .slice(-2)[0]?.revenue || 0;
  
  const monthlyGrowth = previousMonthRevenue 
    ? ((lastMonthRevenue - previousMonthRevenue) / previousMonthRevenue) * 100 
    : 0;
  
  // Find maximum value for chart scaling
  const maxValue = Math.max(...monthlyData
    .filter(item => item.revenue !== null)
    .map(item => item.revenue));
  
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-xl font-bold flex items-center">
            <DollarSign size={20} className="mr-2 text-yellow-400" />
            Monetization
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Track your content revenue across platforms
          </p>
        </div>
        <div className="mt-3 md:mt-0 relative">
          <button className="flex items-center bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-lg text-sm">
            <span>{timeframe === 'year' ? 'This Year' : timeframe === 'quarter' ? 'This Quarter' : 'This Month'}</span>
            <ChevronDown size={16} className="ml-2" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Total Revenue</p>
              <h3 className="text-2xl font-bold mt-1">
                ${totalRevenue.toLocaleString()}
              </h3>
              <div className="flex items-center mt-1 text-green-400">
                <TrendingUp size={14} className="mr-1" />
                <span className="text-sm">+8.2% vs. last year</span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-green-400/10 text-green-400">
              <DollarSign size={20} />
            </div>
          </div>
        </div>
        
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Last Month Revenue</p>
              <h3 className="text-2xl font-bold mt-1">
                ${lastMonthRevenue.toLocaleString()}
              </h3>
              <div className={`flex items-center mt-1 ${monthlyGrowth >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {monthlyGrowth >= 0 
                  ? <TrendingUp size={14} className="mr-1" /> 
                  : <TrendingUp size={14} className="mr-1 transform rotate-180" />
                }
                <span className="text-sm">{monthlyGrowth >= 0 ? '+' : ''}{monthlyGrowth.toFixed(1)}% vs. previous</span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-blue-400/10 text-blue-400">
              <Calendar size={20} />
            </div>
          </div>
        </div>
        
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Revenue Breakdown</p>
              <h3 className="text-lg font-bold mt-1">
                By Source
              </h3>
            </div>
          </div>
          
          <div className="mt-2">
            <div className="w-full bg-gray-600 rounded-full h-3 mb-1">
              <div className="bg-green-400 h-3 rounded-l-full" style={{ width: '60%' }}></div>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-green-400">Subscribers (60%)</span>
              <span>${(totalRevenue * 0.6).toLocaleString()}</span>
            </div>
          </div>
          
          <div className="mt-2">
            <div className="w-full bg-gray-600 rounded-full h-3 mb-1">
              <div className="bg-blue-400 h-3 rounded-l-full" style={{ width: '30%' }}></div>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-blue-400">Ad Revenue (30%)</span>
              <span>${(totalRevenue * 0.3).toLocaleString()}</span>
            </div>
          </div>
          
          <div className="mt-2">
            <div className="w-full bg-gray-600 rounded-full h-3 mb-1">
              <div className="bg-purple-400 h-3 rounded-l-full" style={{ width: '10%' }}></div>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-purple-400">Merchandise (10%)</span>
              <span>${(totalRevenue * 0.1).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-700 rounded-lg p-4 mb-6">
        <h3 className="font-medium mb-4">Monthly Revenue</h3>
        
        <div className="relative h-64">
          {/* Chart baseline */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-gray-600"></div>
          
          {/* Y-axis labels */}
          <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between text-xs text-gray-400 pr-2">
            <span>${maxValue.toLocaleString()}</span>
            <span>${Math.round(maxValue * 0.75).toLocaleString()}</span>
            <span>${Math.round(maxValue * 0.5).toLocaleString()}</span>
            <span>${Math.round(maxValue * 0.25).toLocaleString()}</span>
            <span>$0</span>
          </div>
          
          {/* Chart content */}
          <div className="absolute top-0 bottom-0 left-8 right-0">
            {/* Horizontal guide lines */}
            <div className="absolute top-0 left-0 right-0 border-t border-gray-600 border-dashed h-0"></div>
            <div className="absolute top-1/4 left-0 right-0 border-t border-gray-600 border-dashed h-0"></div>
            <div className="absolute top-2/4 left-0 right-0 border-t border-gray-600 border-dashed h-0"></div>
            <div className="absolute top-3/4 left-0 right-0 border-t border-gray-600 border-dashed h-0"></div>
            
            {/* Bars */}
            <div className="h-full flex justify-between items-end">
              {monthlyData.map((data, i) => (
                <div 
                  key={i} 
                  className="flex-1 flex flex-col items-center group"
                >
                  {data.revenue !== null ? (
                    <>
                      <div 
                        className="w-5/6 bg-yellow-500 rounded-t-sm hover:bg-yellow-400 transition-colors"
                        style={{ height: `${(data.revenue / maxValue) * 100}%` }}
                      ></div>
                      <div className="text-xs text-gray-400 mt-2">{data.month}</div>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full mb-2 bg-gray-900 text-white text-xs rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <div className="font-medium">{data.month}</div>
                        <div>Total: ${data.revenue.toLocaleString()}</div>
                        <div>Subscribers: ${data.subscriberRevenue.toLocaleString()}</div>
                        <div>Ads: ${data.adRevenue.toLocaleString()}</div>
                        <div>Merch: ${data.merchandiseRevenue.toLocaleString()}</div>
                      </div>
                    </>
                  ) : (
                    <div className="text-xs text-gray-400 mt-auto">{data.month}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-medium mb-3">Revenue by Platform</h3>
        
        <div className="bg-gray-700 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-600 text-left">
                <th className="py-2 px-4">Platform</th>
                <th className="py-2 px-4 text-right">Revenue</th>
                <th className="py-2 px-4 text-right">Growth</th>
                <th className="py-2 px-4 text-right">Share</th>
              </tr>
            </thead>
            <tbody>
              {platformData.map((item, i) => {
                const totalPlatformRevenue = platformData.reduce((sum, p) => sum + p.revenue, 0);
                const share = (item.revenue / totalPlatformRevenue) * 100;
                
                return (
                  <tr key={i} className="border-t border-gray-600 hover:bg-gray-600/50">
                    <td className="py-3 px-4 font-medium">{item.platform}</td>
                    <td className="py-3 px-4 text-right">${item.revenue.toLocaleString()}</td>
                    <td className="py-3 px-4 text-right">
                      <span className={item.growth >= 0 ? 'text-green-400' : 'text-red-400'}>
                        {item.growth >= 0 ? '+' : ''}{item.growth}%
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end">
                        <div className="w-16 bg-gray-600 rounded-full h-1.5 mr-2">
                          <div 
                            className="bg-yellow-400 h-1.5 rounded-full" 
                            style={{ width: `${share}%` }}
                          ></div>
                        </div>
                        <span>{Math.round(share)}%</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        <div className="mt-3 text-right">
          <button className="text-yellow-400 hover:underline text-sm">
            Download Revenue Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default MonetizationChart;
