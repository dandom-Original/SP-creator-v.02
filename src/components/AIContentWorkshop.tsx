import { useState } from 'react';
import { 
  Sparkles, 
  FileText, 
  PenTool, 
  Camera, 
  RotateCcw, 
  Send, 
  Clock, 
  ArrowRight,
  Star,
  Download,
  Sliders,
  PlayCircle,
  BarChart2,
  ChevronDown
} from 'lucide-react';

const AIContentWorkshop = () => {
  const [contentType, setContentType] = useState<'script' | 'character' | 'thumbnail'>('script');
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [generationSettings, setGenerationSettings] = useState({
    style: 'southPark',
    tone: 'satirical',
    intensity: 'high',
    targetAudience: 'adults'
  });

  // Mock function to simulate AI content generation
  const generateContent = () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  // Change handlers
  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };
  
  const handleSettingChange = (setting: string, value: string) => {
    setGenerationSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  // Mock recent prompts data
  const recentPrompts = [
    "A group of fitness influencers competing in ridiculous challenges",
    "Beauty gurus fighting over a limited edition makeup palette",
    "Crypto influencers dealing with a market crash",
    "Social media stars trapped on a deserted island with no internet"
  ];

  // Mock suggested formats
  const suggestedFormats = [
    { name: "Reality Show Parody", icon: "🎭" },
    { name: "News Segment", icon: "📰" },
    { name: "Character Interview", icon: "🎤" },
    { name: "Behind-the-Scenes", icon: "📹" }
  ];

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center mb-4">
        <Sparkles size={20} className="text-yellow-400 mr-2" />
        <h2 className="text-xl font-bold">AI Content Workshop</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left column - Input area */}
        <div>
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <div className="flex space-x-2 mb-4">
              <button 
                onClick={() => setContentType('script')}
                className={`flex items-center px-3 py-2 rounded-lg text-sm ${
                  contentType === 'script' 
                    ? 'bg-yellow-500 text-black font-medium' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              >
                <FileText size={16} className="mr-2" />
                Script
              </button>
              <button 
                onClick={() => setContentType('character')}
                className={`flex items-center px-3 py-2 rounded-lg text-sm ${
                  contentType === 'character' 
                    ? 'bg-yellow-500 text-black font-medium' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              >
                <PenTool size={16} className="mr-2" />
                Character
              </button>
              <button 
                onClick={() => setContentType('thumbnail')}
                className={`flex items-center px-3 py-2 rounded-lg text-sm ${
                  contentType === 'thumbnail' 
                    ? 'bg-yellow-500 text-black font-medium' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              >
                <Camera size={16} className="mr-2" />
                Thumbnail
              </button>
            </div>
            
            <div className="mb-4">
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-300 mb-1">
                Describe what you want to create
              </label>
              <textarea 
                id="prompt"
                rows={5}
                placeholder={contentType === 'script' 
                  ? "Create a satirical script about fitness influencers competing in ridiculous challenges..." 
                  : contentType === 'character' 
                  ? "Design a character based on a crypto influencer who's always overhyping their coins..." 
                  : "Generate a thumbnail for a video where beauty gurus are fighting over a limited edition palette..."
                }
                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={prompt}
                onChange={handlePromptChange}
              />
            </div>
            
            <div className="flex justify-between items-center">
              <button 
                onClick={() => setPrompt('')}
                className="flex items-center text-sm text-gray-400 hover:text-white"
              >
                <RotateCcw size={14} className="mr-1" />
                Clear
              </button>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="flex items-center bg-gray-600 hover:bg-gray-500 px-3 py-2 rounded-lg text-sm"
                >
                  <Sliders size={16} className="mr-2" />
                  Settings
                </button>
                <button
                  onClick={generateContent}
                  disabled={!prompt.trim() || isGenerating}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium ${
                    !prompt.trim() || isGenerating
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-yellow-500 hover:bg-yellow-600 text-black'
                  }`}
                >
                  {isGenerating 
                    ? <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-500 border-t-white mr-2"></div>
                        Generating...
                      </>
                    : <>
                        <Send size={16} className="mr-2" />
                        Generate
                      </>
                  }
                </button>
              </div>
            </div>
          </div>
          
          {showSettings && (
            <div className="bg-gray-700 rounded-lg p-4 mb-4 animate-fadeIn">
              <h3 className="font-medium mb-3">Generation Settings</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Style</label>
                  <select
                    value={generationSettings.style}
                    onChange={(e) => handleSettingChange('style', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="southPark">South Park</option>
                    <option value="simpsons">The Simpsons</option>
                    <option value="familyGuy">Family Guy</option>
                    <option value="rickMorty">Rick & Morty</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Tone</label>
                  <select
                    value={generationSettings.tone}
                    onChange={(e) => handleSettingChange('tone', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="satirical">Satirical</option>
                    <option value="absurd">Absurdist</option>
                    <option value="dark">Dark Humor</option>
                    <option value="slapstick">Slapstick</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Intensity</label>
                  <select
                    value={generationSettings.intensity}
                    onChange={(e) => handleSettingChange('intensity', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="mild">Mild</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="extreme">Extreme</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Target Audience</label>
                  <select
                    value={generationSettings.targetAudience}
                    onChange={(e) => handleSettingChange('targetAudience', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="teens">Teens (13-17)</option>
                    <option value="youngAdults">Young Adults (18-24)</option>
                    <option value="adults">Adults (25-45)</option>
                    <option value="general">General Audience</option>
                  </select>
                </div>
              </div>
            </div>
          )}
          
          <div>
            <h3 className="font-medium mb-3">Recent Prompts</h3>
            <div className="space-y-2">
              {recentPrompts.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setPrompt(item)}
                  className="flex items-start w-full text-left p-2 hover:bg-gray-700 rounded-lg"
                >
                  <Clock size={16} className="text-gray-400 mr-2 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right column - Output preview or suggestions */}
        <div>
          {isGenerating ? (
            <div className="bg-gray-700 rounded-lg p-6 h-full flex flex-col items-center justify-center text-center">
              <div className="relative w-16 h-16 mb-4">
                <div className="absolute inset-0 rounded-full border-4 border-gray-600"></div>
                <div className="absolute inset-0 rounded-full border-4 border-yellow-500 border-t-transparent animate-spin"></div>
              </div>
              <h3 className="text-lg font-medium mb-2">Generating {contentType}...</h3>
              <p className="text-gray-400 mb-4">This may take a few moments</p>
              <div className="w-full max-w-xs bg-gray-600 h-2 rounded-full overflow-hidden">
                <div className="bg-yellow-500 h-2 animate-progress"></div>
              </div>
            </div>
          ) : prompt ? (
            <div className="bg-gray-700 rounded-lg p-4 h-full flex flex-col">
              <h3 className="font-medium mb-3">Content Suggestions</h3>
              
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-2">Try one of these suggested formats:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedFormats.map((format, i) => (
                    <button
                      key={i}
                      className="flex items-center bg-gray-600 hover:bg-gray-500 px-3 py-2 rounded-lg text-sm"
                    >
                      <span className="mr-2">{format.icon}</span>
                      {format.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4 mb-4 flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium">Preview</h4>
                  <div className="flex space-x-2">
                    <Star size={16} className="text-gray-400 hover:text-yellow-400 cursor-pointer" />
                    <Download size={16} className="text-gray-400 hover:text-white cursor-pointer" />
                  </div>
                </div>
                
                <div className="rounded-lg bg-gray-900 p-4 h-60 overflow-auto">
                  <div className="flex justify-center items-center h-full text-gray-400">
                    <p className="text-center">
                      {contentType === 'script' 
                        ? "Generate a script to see a preview here"
                        : contentType === 'character'
                        ? "Generate a character to see a preview here"
                        : "Generate a thumbnail to see a preview here"
                      }
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button className="flex-1 flex items-center justify-center bg-gray-600 hover:bg-gray-500 py-2 rounded-lg text-sm">
                  <BarChart2 size={16} className="mr-2" />
                  Optimize
                </button>
                <button className="flex-1 flex items-center justify-center bg-gray-600 hover:bg-gray-500 py-2 rounded-lg text-sm">
                  <RotateCcw size={16} className="mr-2" />
                  Regenerate
                </button>
                <button className="flex-1 flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded-lg text-sm font-medium">
                  <PlayCircle size={16} className="mr-2" />
                  Use
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-gray-700 rounded-lg p-6 h-full flex flex-col">
              <h3 className="font-medium mb-4">Popular Satirical Topics</h3>
              
              <div className="space-y-4 flex-grow">
                <div className="bg-gray-800 hover:bg-gray-800/70 p-3 rounded-lg cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Social Media Influencers</h4>
                    <div className="px-2 py-0.5 rounded-full bg-red-400/20 text-red-400 text-xs">
                      Trending
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Satirize influencer culture, sponsorship drama, and social media trends.
                  </p>
                  <button className="flex items-center text-yellow-400 text-sm mt-2">
                    <ArrowRight size={14} className="ml-1" />
                    Use this topic
                  </button>
                </div>
                
                <div className="bg-gray-800 hover:bg-gray-800/70 p-3 rounded-lg cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Cryptocurrency & NFTs</h4>
                    <div className="px-2 py-0.5 rounded-full bg-yellow-400/20 text-yellow-400 text-xs">
                      Popular
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Mock the volatile crypto market, NFT hype, and blockchain enthusiasts.
                  </p>
                  <button className="flex items-center text-yellow-400 text-sm mt-2">
                    <ArrowRight size={14} className="ml-1" />
                    Use this topic
                  </button>
                </div>
                
                <div className="bg-gray-800 hover:bg-gray-800/70 p-3 rounded-lg cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Fitness & Wellness Gurus</h4>
                    <div className="px-2 py-0.5 rounded-full bg-green-400/20 text-green-400 text-xs">
                      Evergreen
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Parody extreme fitness challenges, diet fads, and wellness pseudoscience.
                  </p>
                  <button className="flex items-center text-yellow-400 text-sm mt-2">
                    <ArrowRight size={14} className="ml-1" />
                    Use this topic
                  </button>
                </div>
              </div>
              
              <button className="w-full bg-gray-600 hover:bg-gray-500 py-2 rounded-lg text-sm mt-4">
                View All Topics
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIContentWorkshop;
