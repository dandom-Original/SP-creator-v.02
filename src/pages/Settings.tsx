import { useState } from 'react';
import { Save, Lock, Globe, Bell, Database, User, PenTool, Trash2, AlertOctagon, DollarSign } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('account');
  
  // Mock settings data
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      contentCompletion: true,
      performance: true,
      trendingTopics: false,
      newsletter: true
    },
    appearance: {
      theme: 'dark',
      sidebar: 'expanded',
      analytics: 'detailed'
    },
    aiGeneration: {
      satireStyle: 'southPark',
      defaultIntensity: 'high',
      autoGenerate: true,
      improveScripts: true
    },
    privacy: {
      dataSharing: 'minimal',
      anonymousAnalytics: true,
      saveGenerationHistory: true
    },
    subscription: {
      currentPlan: 'professional',
      billing: 'monthly',
      cardEnding: '4242'
    }
  });
  
  const updateSettings = (category, setting, value) => {
    setSettings({
      ...settings,
      [category]: {
        ...settings[category],
        [setting]: value
      }
    });
  };
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Settings</h1>
      <p className="text-gray-400 mb-6">Manage your account and preferences</p>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Settings navigation */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-gray-800 rounded-xl p-4">
            <nav className="space-y-1">
              <button 
                onClick={() => handleTabChange('account')}
                className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                  activeTab === 'account' 
                    ? 'bg-yellow-500 text-black font-medium' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <User size={18} className="mr-2" />
                Account
              </button>
              
              <button 
                onClick={() => handleTabChange('notifications')}
                className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                  activeTab === 'notifications' 
                    ? 'bg-yellow-500 text-black font-medium' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Bell size={18} className="mr-2" />
                Notifications
              </button>
              
              <button 
                onClick={() => handleTabChange('aiGeneration')}
                className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                  activeTab === 'aiGeneration' 
                    ? 'bg-yellow-500 text-black font-medium' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <PenTool size={18} className="mr-2" />
                AI Generation
              </button>
              
              <button 
                onClick={() => handleTabChange('privacy')}
                className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                  activeTab === 'privacy' 
                    ? 'bg-yellow-500 text-black font-medium' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Lock size={18} className="mr-2" />
                Privacy
              </button>
              
              <button 
                onClick={() => handleTabChange('subscription')}
                className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                  activeTab === 'subscription' 
                    ? 'bg-yellow-500 text-black font-medium' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <DollarSign size={18} className="mr-2" />
                Subscription
              </button>
              
              <div className="pt-4 mt-4 border-t border-gray-700">
                <button 
                  onClick={() => handleTabChange('danger')}
                  className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                    activeTab === 'danger' 
                      ? 'bg-red-500/20 text-red-400 font-medium' 
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <AlertOctagon size={18} className="mr-2" />
                  Danger Zone
                </button>
              </div>
            </nav>
          </div>
        </div>
        
        {/* Settings content */}
        <div className="flex-1">
          <div className="bg-gray-800 rounded-xl p-6">
            {activeTab === 'account' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Account Settings</h2>
                
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg font-medium">Profile Information</h3>
                      <p className="text-gray-400 text-sm mt-1">
                        Update your account details
                      </p>
                    </div>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg text-sm font-medium">
                      Edit Profile
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-gray-700">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Name
                      </label>
                      <input 
                        type="text" 
                        disabled 
                        value="Tom Sherman" 
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Email
                      </label>
                      <input 
                        type="email" 
                        disabled 
                        value="tom@satirestudio.com" 
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Role
                      </label>
                      <input 
                        type="text" 
                        disabled 
                        value="Producer" 
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Account Created
                      </label>
                      <input 
                        type="text" 
                        disabled 
                        value="March 15, 2023" 
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <h3 className="text-lg font-medium mb-4">Connected Accounts</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 border border-gray-700 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white mr-3">
                            <span className="font-bold">f</span>
                          </div>
                          <div>
                            <h4 className="font-medium">Facebook</h4>
                            <p className="text-gray-400 text-xs">Connected</p>
                          </div>
                        </div>
                        <button className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded">
                          Disconnect
                        </button>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 border border-gray-700 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white mr-3">
                            <span className="font-bold">Y</span>
                          </div>
                          <div>
                            <h4 className="font-medium">YouTube</h4>
                            <p className="text-gray-400 text-xs">Connected</p>
                          </div>
                        </div>
                        <button className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded">
                          Disconnect
                        </button>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 border border-gray-700 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded bg-blue-400 flex items-center justify-center text-white mr-3">
                            <span className="font-bold">T</span>
                          </div>
                          <div>
                            <h4 className="font-medium">Twitter</h4>
                            <p className="text-gray-400 text-xs">Not connected</p>
                          </div>
                        </div>
                        <button className="text-sm bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded">
                          Connect
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Notification Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Content Generation Complete</h4>
                          <p className="text-gray-400 text-sm">Receive notifications when AI finishes generating content</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={settings.notifications.contentCompletion}
                            onChange={(e) => updateSettings('notifications', 'contentCompletion', e.target.checked)}
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Performance Reports</h4>
                          <p className="text-gray-400 text-sm">Weekly analytics and content performance reports</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={settings.notifications.performance}
                            onChange={(e) => updateSettings('notifications', 'performance', e.target.checked)}
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Trending Topics</h4>
                          <p className="text-gray-400 text-sm">Get alerts about trending topics ideal for satire</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={settings.notifications.trendingTopics}
                            onChange={(e) => updateSettings('notifications', 'trendingTopics', e.target.checked)}
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-medium mb-4">Push Notifications</h3>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-medium">Enable Push Notifications</h4>
                        <p className="text-gray-400 text-sm">Allow browser notifications from SatireStudio</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer"
                          checked={settings.notifications.push}
                          onChange={(e) => updateSettings('notifications', 'push', e.target.checked)}
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                      </label>
                    </div>
                    
                    <button className="w-full bg-gray-700 hover:bg-gray-600 py-2 rounded-lg text-sm">
                      Configure Push Notification Settings
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                  <button className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg text-sm font-medium">
                    <Save size={16} className="mr-2" />
                    Save Notification Settings
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'aiGeneration' && (
              <div>
                <h2 className="text-xl font-bold mb-6">AI Generation Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Content Generation Preferences</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">
                          Default Satirical Style
                        </label>
                        <select 
                          value={settings.aiGeneration.satireStyle}
                          onChange={(e) => updateSettings('aiGeneration', 'satireStyle', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                          <option value="southPark">South Park</option>
                          <option value="simpsons">The Simpsons</option>
                          <option value="familyGuy">Family Guy</option>
                          <option value="rickMorty">Rick & Morty</option>
                          <option value="custom">Custom</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">
                          Default Satire Intensity
                        </label>
                        <select 
                          value={settings.aiGeneration.defaultIntensity}
                          onChange={(e) => updateSettings('aiGeneration', 'defaultIntensity', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                          <option value="mild">Mild</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                          <option value="extreme">Extreme</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-medium mb-4">AI Behavior</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Auto-Generate Script Variations</h4>
                          <p className="text-gray-400 text-sm">Automatically create alternative versions of scripts</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={settings.aiGeneration.autoGenerate}
                            onChange={(e) => updateSettings('aiGeneration', 'autoGenerate', e.target.checked)}
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">AI Script Improvement</h4>
                          <p className="text-gray-400 text-sm">Let AI analyze and improve scripts based on performance data</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={settings.aiGeneration.improveScripts}
                            onChange={(e) => updateSettings('aiGeneration', 'improveScripts', e.target.checked)}
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                  <button className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg text-sm font-medium">
                    <Save size={16} className="mr-2" />
                    Save AI Settings
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'privacy' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Privacy Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Data Collection</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">
                          Data Sharing Level
                        </label>
                        <select 
                          value={settings.privacy.dataSharing}
                          onChange={(e) => updateSettings('privacy', 'dataSharing', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                          <option value="minimal">Minimal - Essential data only</option>
                          <option value="standard">Standard - Improve AI generation</option>
                          <option value="extended">Extended - Full analytics and personalization</option>
                        </select>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Anonymous Analytics</h4>
                          <p className="text-gray-400 text-sm">Share anonymized usage data to improve the platform</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={settings.privacy.anonymousAnalytics}
                            onChange={(e) => updateSettings('privacy', 'anonymousAnalytics', e.target.checked)}
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-medium mb-4">Content & History</h3>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Save Generation History</h4>
                        <p className="text-gray-400 text-sm">Keep a record of your AI content generation sessions</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer"
                          checked={settings.privacy.saveGenerationHistory}
                          onChange={(e) => updateSettings('privacy', 'saveGenerationHistory', e.target.checked)}
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                      </label>
                    </div>
                    
                    <div className="mt-4">
                      <button className="bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-lg text-sm">
                        Clear Generation History
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                  <button className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg text-sm font-medium">
                    <Save size={16} className="mr-2" />
                    Save Privacy Settings
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'subscription' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Subscription Settings</h2>
                
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <DollarSign size={20} className="text-yellow-400 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Professional Plan - $49/month</h3>
                      <p className="text-sm text-gray-300">
                        Your subscription renews on April 15, 2023
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Plan Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">
                          Current Plan
                        </label>
                        <select 
                          value={settings.subscription.currentPlan}
                          className="w-full px-3 py-2 bg-gray<boltArtifact id="fix-errors-proper-continued" title="Fortsetzung der Behebung von Syntaxfehlern">
<boltAction type="file" filePath="src/pages/Settings.tsx">import { useState } from 'react';
import { Save, Lock, Globe, Bell, Database, User, PenTool, Trash2, AlertOctagon, DollarSign } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('account');
  
  // Mock settings data
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      contentCompletion: true,
      performance: true,
      trendingTopics: false,
      newsletter: true
    },
    appearance: {
      theme: 'dark',
      sidebar: 'expanded',
      analytics: 'detailed'
    },
    aiGeneration: {
      satireStyle: 'southPark',
      defaultIntensity: 'high',
      autoGenerate: true,
      improveScripts: true
    },
    privacy: {
      dataSharing: 'minimal',
      anonymousAnalytics: true,
      saveGenerationHistory: true
    },
    subscription: {
      currentPlan: 'professional',
      billing: 'monthly',
      cardEnding: '4242'
    }
  });
  
  const updateSettings = (category, setting, value) => {
    setSettings({
      ...settings,
      [category]: {
        ...settings[category],
        [setting]: value
      }
    });
  };
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Settings</h1>
      <p className="text-gray-400 mb-6">Manage your account and preferences</p>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Settings navigation */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-gray-800 rounded-xl p-4">
            <nav className="space-y-1">
              <button 
                onClick={() => handleTabChange('account')}
                className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                  activeTab === 'account' 
                    ? 'bg-yellow-500 text-black font-medium' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <User size={18} className="mr-2" />
                Account
              </button>
              
              <button 
                onClick={() => handleTabChange('notifications')}
                className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                  activeTab === 'notifications' 
                    ? 'bg-yellow-500 text-black font-medium' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Bell size={18} className="mr-2" />
                Notifications
              </button>
              
              <button 
                onClick={() => handleTabChange('aiGeneration')}
                className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                  activeTab === 'aiGeneration' 
                    ? 'bg-yellow-500 text-black font-medium' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <PenTool size={18} className="mr-2" />
                AI Generation
              </button>
              
              <button 
                onClick={() => handleTabChange('privacy')}
                className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                  activeTab === 'privacy' 
                    ? 'bg-yellow-500 text-black font-medium' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Lock size={18} className="mr-2" />
                Privacy
              </button>
              
              <button 
                onClick={() => handleTabChange('subscription')}
                className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                  activeTab === 'subscription' 
                    ? 'bg-yellow-500 text-black font-medium' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <DollarSign size={18} className="mr-2" />
                Subscription
              </button>
              
              <div className="pt-4 mt-4 border-t border-gray-700">
                <button 
                  onClick={() => handleTabChange('danger')}
                  className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                    activeTab === 'danger' 
                      ? 'bg-red-500/20 text-red-400 font-medium' 
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <AlertOctagon size={18} className="mr-2" />
                  Danger Zone
                </button>
              </div>
            </nav>
          </div>
        </div>
        
        {/* Settings content */}
        <div className="flex-1">
          <div className="bg-gray-800 rounded-xl p-6">
            {activeTab === 'account' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Account Settings</h2>
                
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg font-medium">Profile Information</h3>
                      <p className="text-gray-400 text-sm mt-1">
                        Update your account details
                      </p>
                    </div>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg text-sm font-medium">
                      Edit Profile
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-gray-700">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Name
                      </label>
                      <input 
                        type="text" 
                        disabled 
                        value="Tom Sherman" 
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Email
                      </label>
                      <input 
                        type="email" 
                        disabled 
                        value="tom@satirestudio.com" 
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Role
                      </label>
                      <input 
                        type="text" 
                        disabled 
                        value="Producer" 
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Account Created
                      </label>
                      <input 
                        type="text" 
                        disabled 
                        value="March 15, 2023" 
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <h3 className="text-lg font-medium mb-4">Connected Accounts</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 border border-gray-700 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white mr-3">
                            <span className="font-bold">f</span>
                          </div>
                          <div>
                            <h4 className="font-medium">Facebook</h4>
                            <p className="text-gray-400 text-xs">Connected</p>
                          </div>
                        </div>
                        <button className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded">
                          Disconnect
                        </button>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 border border-gray-700 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white mr-3">
                            <span className="font-bold">Y</span>
                          </div>
                          <div>
                            <h4 className="font-medium">YouTube</h4>
                            <p className="text-gray-400 text-xs">Connected</p>
                          </div>
                        </div>
                        <button className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded">
                          Disconnect
                        </button>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 border border-gray-700 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded bg-blue-400 flex items-center justify-center text-white mr-3">
                            <span className="font-bold">T</span>
                          </div>
                          <div>
                            <h4 className="font-medium">Twitter</h4>
                            <p className="text-gray-400 text-xs">Not connected</p>
                          </div>
                        </div>
                        <button className="text-sm bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded">
                          Connect
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Notification Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Content Generation Complete</h4>
                          <p className="text-gray-400 text-sm">Receive notifications when AI finishes generating content</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={settings.notifications.contentCompletion}
                            onChange={(e) => updateSettings('notifications', 'contentCompletion', e.target.checked)}
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Performance Reports</h4>
                          <p className="text-gray-400 text-sm">Weekly analytics and content performance reports</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={settings.notifications.performance}
                            onChange={(e) => updateSettings('notifications', 'performance', e.target.checked)}
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Trending Topics</h4>
                          <p className="text-gray-400 text-sm">Get alerts about trending topics ideal for satire</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={settings.notifications.trendingTopics}
                            onChange={(e) => updateSettings('notifications', 'trendingTopics', e.target.checked)}
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-medium mb-4">Push Notifications</h3>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-medium">Enable Push Notifications</h4>
                        <p className="text-gray-400 text-sm">Allow browser notifications from SatireStudio</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer"
                          checked={settings.notifications.push}
                          onChange={(e) => updateSettings('notifications', 'push', e.target.checked)}
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                      </label>
                    </div>
                    
                    <button className="w-full bg-gray-700 hover:bg-gray-600 py-2 rounded-lg text-sm">
                      Configure Push Notification Settings
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                  <button className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg text-sm font-medium">
                    <Save size={16} className="mr-2" />
                    Save Notification Settings
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'aiGeneration' && (
              <div>
                <h2 className="text-xl font-bold mb-6">AI Generation Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Content Generation Preferences</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">
                          Default Satirical Style
                        </label>
                        <select 
                          value={settings.aiGeneration.satireStyle}
                          onChange={(e) => updateSettings('aiGeneration', 'satireStyle', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                          <option value="southPark">South Park</option>
                          <option value="simpsons">The Simpsons</option>
                          <option value="familyGuy">Family Guy</option>
                          <option value="rickMorty">Rick & Morty</option>
                          <option value="custom">Custom</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">
                          Default Satire Intensity
                        </label>
                        <select 
                          value={settings.aiGeneration.defaultIntensity}
                          onChange={(e) => updateSettings('aiGeneration', 'defaultIntensity', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                          <option value="mild">Mild</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                          <option value="extreme">Extreme</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-medium mb-4">AI Behavior</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Auto-Generate Script Variations</h4>
                          <p className="text-gray-400 text-sm">Automatically create alternative versions of scripts</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={settings.aiGeneration.autoGenerate}
                            onChange={(e) => updateSettings('aiGeneration', 'autoGenerate', e.target.checked)}
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">AI Script Improvement</h4>
                          <p className="text-gray-400 text-sm">Let AI analyze and improve scripts based on performance data</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={settings.aiGeneration.improveScripts}
                            onChange={(e) => updateSettings('aiGeneration', 'improveScripts', e.target.checked)}
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                  <button className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg text-sm font-medium">
                    <Save size={16} className="mr-2" />
                    Save AI Settings
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'privacy' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Privacy Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Data Collection</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">
                          Data Sharing Level
                        </label>
                        <select 
                          value={settings.privacy.dataSharing}
                          onChange={(e) => updateSettings('privacy', 'dataSharing', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                          <option value="minimal">Minimal - Essential data only</option>
                          <option value="standard">Standard - Improve AI generation</option>
                          <option value="extended">Extended - Full analytics and personalization</option>
                        </select>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Anonymous Analytics</h4>
                          <p className="text-gray-400 text-sm">Share anonymized usage data to improve the platform</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={settings.privacy.anonymousAnalytics}
                            onChange={(e) => updateSettings('privacy', 'anonymousAnalytics', e.target.checked)}
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-medium mb-4">Content & History</h3>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Save Generation History</h4>
                        <p className="text-gray-400 text-sm">Keep a record of your AI content generation sessions</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer"
                          checked={settings.privacy.saveGenerationHistory}
                          onChange={(e) => updateSettings('privacy', 'saveGenerationHistory', e.target.checked)}
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                      </label>
                    </div>
                    
                    <div className="mt-4">
                      <button className="bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-lg text-sm">
                        Clear Generation History
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                  <button className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg text-sm font-medium">
                    <Save size={16} className="mr-2" />
                    Save Privacy Settings
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'subscription' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Subscription Settings</h2>
                
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <DollarSign size={20} className="text-yellow-400 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Professional Plan - $49/month</h3>
                      <p className="text-sm text-gray-300">
                        Your subscription renews on April 15, 2023
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Plan Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">
                          Current Plan
                        </label>
                        <select 
                          value={settings.subscription.currentPlan}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                          disabled
                        >
                          <option value="starter">Starter - $19/month</option>
                          <option value="professional">Professional - $49/month</option>
                          <option value="enterprise">Enterprise - $199/month</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">
                          Billing Cycle
                        </label>
                        <select 
                          value={settings.subscription.billing}
                          onChange={(e) => updateSettings('subscription', 'billing', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                          <option value="monthly">Monthly</option>
                          <option value="annual">Annual (Save 20%)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <button className="bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-lg text-sm">
                        View Plan Comparison
                      </button>
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded-lg text-sm ml-3">
                        Upgrade Plan
                      </button>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-medium mb-4">Payment Method</h3>
                    
                    <div className="flex justify-between items-center p-3 border border-gray-700 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-6 rounded bg-blue-600 flex items-center justify-center text-white mr-3">
                          <span className="font-bold text-xs">VISA</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Visa ending in {settings.subscription.cardEnding}</h4>
                          <p className="text-gray-400 text-xs">Expires 09/2025</p>
                        </div>
                      </div>
                      <button className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded">
                        Update
                      </button>
                    </div>
                    
                    <div className="mt-4">
                      <button className="bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-lg text-sm">
                        Add Payment Method
                      </button>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-medium mb-2">Billing History</h3>
                    <p className="text-gray-400 text-sm mb-4">View past invoices and payment history</p>
                    
                    <div className="bg-gray-700 rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-600 text-left">
                            <th className="py-2 px-4">Date</th>
                            <th className="py-2 px-4">Description</th>
                            <th className="py-2 px-4">Amount</th>
                            <th className="py-2 px-4">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t border-gray-600">
                            <td className="py-2 px-4">Mar 15, 2023</td>
                            <td className="py-2 px-4">Professional Plan - Monthly</td>
                            <td className="py-2 px-4">$49.00</td>
                            <td className="py-2 px-4">
                              <span className="px-2 py-1 bg-green-400/20 text-green-400 rounded-full text-xs">
                                Paid
                              </span>
                            </td>
                          </tr>
                          <tr className="border-t border-gray-600">
                            <td className="py-2 px-4">Feb 15, 2023</td>
                            <td className="py-2 px-4">Professional Plan - Monthly</td>
                            <td className="py-2 px-4">$49.00</td>
                            <td className="py-2 px-4">
                              <span className="px-2 py-1 bg-green-400/20 text-green-400 rounded-full text-xs">
                                Paid
                              </span>
                            </td>
                          </tr>
                          <tr className="border-t border-gray-600">
                            <td className="py-2 px-4">Jan 15, 2023</td>
                            <td className="py-2 px-4">Starter Plan - Monthly</td>
                            <td className="py-2 px-4">$19.00</td>
                            <td className="py-2 px-4">
                              <span className="px-2 py-1 bg-green-400/20 text-green-400 rounded-full text-xs">
                                Paid
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="mt-4 text-right">
                      <button className="text-yellow-400 hover:underline text-sm">
                        View All Invoices
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'danger' && (
              <div>
                <h2 className="text-xl font-bold mb-2 text-red-400">Danger Zone</h2>
                <p className="text-gray-400 mb-6">Irreversible actions that will affect your account</p>
                
                <div className="space-y-6">
                  <div className="border border-red-500/30 rounded-lg p-4">
                    <div className="flex items-start">
                      <Trash2 size={20} className="text-red-400 mr-3 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Delete All Content</h3>
                        <p className="text-sm text-gray-300 mb-3">
                          This will permanently delete all your generated content, scripts, and assets. This action cannot be undone.
                        </p>
                        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-sm">
                          Delete All Content
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-red-500/30 rounded-lg p-4">
                    <div className="flex items-start">
                      <Database size={20} className="text-red-400 mr-3 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Reset AI Preferences</h3>
                        <p className="text-sm text-gray-300 mb-3">
                          Reset all AI customizations, training data, and preferences to factory defaults.
                        </p>
                        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-sm">
                          Reset AI Preferences
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-red-500/30 rounded-lg p-4">
                    <div className="flex items-start">
                      <AlertOctagon size={20} className="text-red-400 mr-3 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Delete Account</h3>
                        <p className="text-sm text-gray-300 mb-3">
                          Permanently delete your account and all associated data. This action cannot be undone.
                        </p>
                        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-sm">
                          Delete Account
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
