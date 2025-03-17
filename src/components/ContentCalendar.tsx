import { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Tag, 
  Users, 
  Bell,
  Eye,
  MoreHorizontal
} from 'lucide-react';

// Mock data for calendar events
const MOCK_EVENTS = [
  {
    id: 1,
    title: "Influencer Island: Episode 2",
    date: new Date(2023, 3, 8), // April 8, 2023
    time: "2:00 PM",
    status: "scheduled",
    type: "episode",
    platform: "YouTube",
    assignee: "Tom S."
  },
  {
    id: 2,
    title: "Crypto Bros Weekly Update",
    date: new Date(2023, 3, 12), // April 12, 2023
    time: "4:30 PM",
    status: "draft",
    type: "episode",
    platform: "YouTube, TikTok",
    assignee: "Alex K."
  },
  {
    id: 3,
    title: "Beauty Guru Drama: Part 3",
    date: new Date(2023, 3, 15), // April 15, 2023
    time: "1:00 PM",
    status: "production",
    type: "episode",
    platform: "YouTube",
    assignee: "Sarah M."
  },
  {
    id: 4,
    title: "Fitness Challenge Disaster",
    date: new Date(2023, 3, 20), // April 20, 2023
    time: "3:00 PM",
    status: "idea",
    type: "short",
    platform: "TikTok, Instagram",
    assignee: "Unassigned"
  },
  {
    id: 5,
    title: "Tech Bro Startup Fail",
    date: new Date(2023, 3, 22), // April 22, 2023
    time: "11:00 AM",
    status: "scheduled",
    type: "episode",
    platform: "YouTube",
    assignee: "Tom S."
  },
  {
    id: 6,
    title: "Behind The Scenes: Character Design",
    date: new Date(2023, 3, 25), // April 25, 2023
    time: "5:00 PM",
    status: "production",
    type: "bts",
    platform: "YouTube, Instagram",
    assignee: "Maya J."
  }
];

// Days of the week
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Months
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Function to get days in month
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

// Function to get the first day of the month (0 = Sunday, 1 = Monday, etc.)
const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

const ContentCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'list'>('month');
  
  // Calculate current month and year
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  // Navigate to previous or next month
  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };
  
  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };
  
  // Generate calendar days array
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: null, isCurrentMonth: false });
    }
    
    // Add days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({ day, isCurrentMonth: true });
    }
    
    // Add empty cells to complete the last week if needed
    const remainingCells = 42 - days.length; // 6 rows of 7 days
    for (let i = 0; i < remainingCells; i++) {
      if (days.length < 35) { // Only fill up to 5 rows if possible
        days.push({ day: null, isCurrentMonth: false });
      }
    }
    
    return days;
  };
  
  // Get events for a specific day
  const getEventsForDay = (day: number) => {
    if (!day) return [];
    
    return MOCK_EVENTS.filter(event => {
      return event.date.getDate() === day && 
             event.date.getMonth() === currentMonth && 
             event.date.getFullYear() === currentYear;
    });
  };
  
  // Format event time
  const formatEventTime = (time: string) => {
    return time;
  };
  
  // Get event status color
  const getEventStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'bg-green-400/20 text-green-400';
      case 'production':
        return 'bg-yellow-400/20 text-yellow-400';
      case 'draft':
        return 'bg-blue-400/20 text-blue-400';
      case 'idea':
        return 'bg-purple-400/20 text-purple-400';
      default:
        return 'bg-gray-400/20 text-gray-400';
    }
  };
  
  // Get event type icon
  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'episode':
        return <Tag size={14} />;
      case 'short':
        return <Eye size={14} />;
      case 'bts':
        return <Users size={14} />;
      default:
        return <Tag size={14} />;
    }
  };
  
  // Filter events for list view
  const getEventsForMonth = () => {
    return MOCK_EVENTS.filter(event => {
      return event.date.getMonth() === currentMonth && 
             event.date.getFullYear() === currentYear;
    }).sort((a, b) => a.date.getTime() - b.date.getTime());
  };
  
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-xl font-bold flex items-center">
            <CalendarIcon size={20} className="mr-2 text-yellow-400" />
            Content Calendar
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Plan and schedule your satirical content
          </p>
        </div>
        
        <div className="flex space-x-3 mt-3 md:mt-0">
          <div className="flex bg-gray-700 rounded-lg overflow-hidden">
            <button 
              onClick={() => setViewMode('month')}
              className={`px-3 py-1.5 text-sm ${viewMode === 'month' ? 'bg-yellow-500 text-black' : 'text-gray-300'}`}
            >
              Month
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 text-sm ${viewMode === 'list' ? 'bg-yellow-500 text-black' : 'text-gray-300'}`}
            >
              List
            </button>
          </div>
          
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1.5 rounded-lg text-sm flex items-center">
            <Plus size={16} className="mr-1" />
            Add Event
          </button>
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">
          {MONTHS[currentMonth]} {currentYear}
        </h3>
        
        <div className="flex space-x-2">
          <button 
            onClick={prevMonth}
            className="p-1 rounded-full hover:bg-gray-700"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextMonth}
            className="p-1 rounded-full hover:bg-gray-700"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      {viewMode === 'month' ? (
        <div>
          {/* Calendar grid - days of week headers */}
          <div className="grid grid-cols-7 mb-2">
            {DAYS.map(day => (
              <div key={day} className="text-center text-gray-400 text-sm font-medium py-1">
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar grid - days */}
          <div className="grid grid-cols-7 gap-1 bg-gray-700 p-1 rounded-lg">
            {generateCalendarDays().map((day, index) => (
              <div 
                key={index}
                className={`aspect-square p-1 rounded-lg overflow-hidden ${
                  day.isCurrentMonth ? 'bg-gray-800' : 'bg-gray-800/50'
                }`}
              >
                {day.day && (
                  <div className="h-full flex flex-col">
                    <div className="flex justify-between items-center">
                      <span className={`text-sm ${
                        new Date().getDate() === day.day &&
                        new Date().getMonth() === currentMonth &&
                        new Date().getFullYear() === currentYear
                          ? 'bg-yellow-500 text-black h-5 w-5 rounded-full flex items-center justify-center'
                          : ''
                      }`}>
                        {day.day}
                      </span>
                      
                      {getEventsForDay(day.day).length > 0 && (
                        <div className="text-xs text-gray-400">
                          {getEventsForDay(day.day).length} event{getEventsForDay(day.day).length > 1 ? 's' : ''}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-grow overflow-hidden">
                      {getEventsForDay(day.day).slice(0, 2).map(event => (
                        <div 
                          key={event.id}
                          className={`mt-1 p-1 rounded-sm text-xs truncate ${getEventStatusColor(event.status)}`}                        >
                          {event.title}
                        </div>
                      ))}
                      
                      {getEventsForDay(day.day).length > 2 && (
                        <div className="mt-1 text-xs text-gray-400 text-center">
                          + {getEventsForDay(day.day).length - 2} more
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-gray-700 rounded-lg overflow-hidden">
          <div className="grid grid-cols-12 bg-gray-600 py-2 px-3 text-sm">
            <div className="col-span-3">Title</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2">Platform</div>
            <div className="col-span-2">Assignee</div>
            <div className="col-span-1">Actions</div>
          </div>
          
          <div className="divide-y divide-gray-600">
            {getEventsForMonth().map(event => (
              <div key={event.id} className="grid grid-cols-12 py-3 px-3 hover:bg-gray-600/50">
                <div className="col-span-3 flex items-center">
                  <div className="mr-2 text-gray-400">
                    {getEventTypeIcon(event.type)}
                  </div>
                  <span className="truncate">{event.title}</span>
                </div>
                <div className="col-span-2 flex items-center text-sm">
                  <div>
                    <div>{event.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
                    <div className="text-gray-400 text-xs">{formatEventTime(event.time)}</div>
                  </div>
                </div>
                <div className="col-span-2 flex items-center">
                  <span className={`px-2 py-0.5 rounded-full text-xs ${getEventStatusColor(event.status)}`}>
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </span>
                </div>
                <div className="col-span-2 flex items-center text-sm">
                  {event.platform}
                </div>
                <div className="col-span-2 flex items-center text-sm">
                  {event.assignee}
                </div>
                <div className="col-span-1 flex items-center justify-end">
                  <button className="p-1 hover:bg-gray-600 rounded">
                    <MoreHorizontal size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-4 flex justify-between items-center">
        <div className="flex space-x-2">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-green-400 mr-1"></div>
            <span className="text-xs text-gray-400">Scheduled</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-yellow-400 mr-1"></div>
            <span className="text-xs text-gray-400">Production</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-blue-400 mr-1"></div>
            <span className="text-xs text-gray-400">Draft</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-purple-400 mr-1"></div>
            <span className="text-xs text-gray-400">Idea</span>
          </div>
        </div>
        
        <button className="text-sm text-yellow-400 hover:underline flex items-center">
          <Bell size={14} className="mr-1" />
          Set Reminders
        </button>
      </div>
    </div>
  );
};

export default ContentCalendar;
