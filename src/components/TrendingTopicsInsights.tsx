import { useState } from 'react';
import { Flame, TrendingUp, ChevronRight, Award, Star, Clock } from 'lucide-react';

// Example topics data
const TRENDING_TOPICS = [
  {
    name: 'Beauty Community Drama',
    score: 94,
    growth: '+18%',
    sentiment: 'Mixed',
    relevance: 'High',
    sources: ['Twitter', 'YouTube', 'TikTok'],
    key_influencers: ['James Charles', 'Jeffree Star', 'Tati Westbrook'],
    time_sensitivity: 'High'
  },
  {
    name: 'Crypto Market Crash',
    score: 87,
    growth: '+24%',
    sentiment: 'Negative',
    relevance: 'High',
    sources: ['Twitter', 'Reddit', 'Financial News'],
    key_influencers: ['Elon Musk', 'CZ Binance', 'Michael Saylor'],
    time_sensitivity: 'Urgent'
  },
  {
    name: 'Fitness Challenge Controversy',
    score: 82,
    growth: '+12%',
    sentiment: 'Negative',
    relevance: 'Medium',
    sources: ['Instagram', 'TikTok', 'YouTube'],
    key_influencers: ['Chloe Ting', 'Blogilates', 'Pamela Reif'],
    time_sensitivity: 'Medium'
  },
  {
    name: 'Gaming Streamer Feud',
    score: 78,
    growth: '+10%',
    sentiment: 'Mixed',
    relevance: 'Medium',
    sources: ['Twitch', 'Twitter', 'YouTube'],
    key_influencers: ['Ninja', 'xQc', 'Pokimane'],
    time_sensitivity: 'Medium'
  },
  {
    name: 'TikTok Dance Trend',
    score: 75,
    growth: '+8%',
    sentiment: 'Positive',
    relevance: 'Low',
    sources: ['TikTok', 'Instagram'],
    key_influencers: ['Charli D\'Amelio', 'Addison Rae', 'Bella Poarch'],
    time_sensitivity: 'Low'
  }
];

const TrendingTopicsInsights = () => {
  const [selectedTopic, setSelectedTopic] = useState(TRENDING_TOPICS[0]);
  
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-bold">Trending Topics Insights</h2>
          <p className="text-gray-400 text-sm mt-1">Leverage current trends for your satirical content</p>
        </div>
        <button className="text-yellow-400 text-sm hover:underline flex items-center">
          See all insights
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-7">
          <div className="bg-gray-700 rounded-lg overflow-hidden">
            <div className="grid grid-cols-12 bg-gray-600 py-2 px-3 text-sm">
              <div className="col-span-5">Topic</div>
              <div className="col-span-2 text-center">Score</div>
              <div className="col-span-2 text-center">Growth</div>
              <div className="col-span-3 text-center">Status</div>
            </div>
            
            <div className="space-y-1 py-1">
              {TRENDING_TOPICS.map((topic, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedTopic(topic)}
                  className={`grid grid-cols-12 py-2 px-3 w-full text-left hover:bg-gray-600/50 ${
                    selectedTopic.name === topic.name ? 'bg-gray-600/50 border-l-2 border-yellow-500' : ''
                  }`}
                >
                  <div className="col-span-5 flex items-center">
                    <Flame 
                      size={14} 
                      className={`mr-2 ${
                        topic.score > 90 ? 'text-red-400' :
                        topic.score > 80 ? 'text-orange-400' :
                        'text-yellow-400'
                      }`} 
                    />
                    <span className="truncate">{topic.name}</span>
                  </div>
                  <div className="col-span-2 text-center">{topic.score}</div>
                  <div className="col-span-2 text-center text-green-400">{topic.growth}</div>
                  <div className="col-span-3 text-center">
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      topic.time_sensitivity === 'Urgent' ? 'bg-red-400/20 text-red-400' :
                      topic.time_sensitivity === 'High' ? 'bg-orange-400/20 text-orange-400' :
                      topic.time_sensitivity === 'Medium' ? 'bg-yellow-400/20 text-yellow-400' :
                      'bg-green-400/20 text-green-400'
                    }`}>
                      {topic.time_sensitivity}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="md:col-span-5">
          <div className="bg-gray-700 rounded-lg p-4 h-full">
            <h3 className="font-medium mb-4 flex items-center">
              <TrendingUp size={18} className="mr-2 text-yellow-400" />
              Topic Analysis
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm text-gray-400">Topic</h4>
                <p className="font-medium">{selectedTopic.name}</p>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <h4 className="text-sm text-gray-400">Satire Score</h4>
                  <p className="font-medium">{selectedTopic.score}/100</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Growth</h4>
                  <p className="font-medium text-green-400">{selectedTopic.growth}</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Relevance</h4>
                  <p className="font-medium">{selectedTopic.relevance}</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm text-gray-400">Time Sensitivity</h4>
                <div className="flex items-center mt-1">
                  <Clock size={14} className="mr-2 text-yellow-400" />
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    selectedTopic.time_sensitivity === 'Urgent' ? 'bg-red-400/20 text-red-400' :
                    selectedTopic.time_sensitivity === 'High' ? 'bg-orange-400/20 text-orange-400' :
                    selectedTopic.time_sensitivity === 'Medium' ? 'bg-yellow-400/20 text-yellow-400' :
                    'bg-green-400/20 text-green-400'
                  }`}>
                    {selectedTopic.time_sensitivity}
                  </span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm text-gray-400">Key Influencers</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  {selectedTopic.key_influencers.map((influencer, i) => (
                    <span key={i} className="bg-gray-600 px-2 py-0.5 rounded-full text-xs flex items-center">
                      <Star size={10} className="mr-1 text-yellow-400" />
                      {influencer}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between">
                <button className="text-sm bg-gray-600 hover:bg-gray-500 px-3 py-1.5 rounded flex items-center">
                  <Award size={14} className="mr-2" />
                  Explore Similar Topics
                </button>
                <button className="text-sm bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1.5 rounded">
                  Create Content
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingTopicsInsights;
