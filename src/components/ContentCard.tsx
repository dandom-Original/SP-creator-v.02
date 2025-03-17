import { Play, MoreVertical } from 'lucide-react';

interface ContentCardProps {
  title: string;
  thumbnail: string;
  views: string;
  likes: string;
  date: string;
  status: string;
  duration?: string;
  category?: string;
  performance?: string | null;
}

const ContentCard = ({
  title,
  thumbnail,
  views,
  likes,
  date,
  status,
  duration = "3:45",
  category = "Episode",
  performance = null
}: ContentCardProps) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden flex flex-col">
      <div className="relative aspect-video">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        
        {/* Duration badge */}
        {duration && (
          <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 rounded text-xs">
            {duration}
          </div>
        )}
        
        {/* Status badge */}
        {status !== 'published' && (
          <div className={`absolute top-2 left-2 px-2 py-0.5 rounded text-xs ${
            status === 'scheduled' ? 'bg-blue-500/90' : 'bg-gray-500/90'
          }`}>
            {status === 'scheduled' ? 'Scheduled' : 'Draft'}
          </div>
        )}
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/30 transition-opacity duration-200">
          <button className="bg-yellow-500 text-black p-3 rounded-full">
            <Play size={20} fill="black" />
          </button>
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between">
          <h3 className="font-medium line-clamp-2">{title}</h3>
          
          <button className="text-gray-400 hover:text-white p-1">
            <MoreVertical size={16} />
          </button>
        </div>
        
        <div className="mt-3 mb-1 flex items-center text-sm text-gray-400">
          {category && (
            <span className="bg-gray-700 px-2 py-0.5 rounded-full text-xs mr-2">
              {category}
            </span>
          )}
          <span>{date}</span>
        </div>
        
        <div className="mt-auto pt-3 flex items-center justify-between text-sm border-t border-gray-700">
          <div className="flex space-x-3">
            {views !== '-' && (
              <div className="flex items-center">
                <span role="img" aria-label="views" className="mr-1.5">👁️</span> 
                <span>{views}</span>
              </div>
            )}
            
            {likes !== '-' && (
              <div className="flex items-center">
                <span role="img" aria-label="likes" className="mr-1.5">👍</span>
                <span>{likes}</span>
              </div>
            )}
          </div>
          
          {performance && (
            <div className={`flex items-center ${
              performance === 'high' ? 'text-green-400' : 
              performance === 'medium' ? 'text-yellow-400' : 
              'text-red-400'
            }`}>
              <span>{performance === 'high' ? '↑' : performance === 'medium' ? '→' : '↓'}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
