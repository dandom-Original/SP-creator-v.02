import { ReactNode } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: ReactNode;
}

const StatsCard = ({ title, value, change, isPositive, icon }: StatsCardProps) => {
  return (
    <div className="bg-gray-800 rounded-xl p-4">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          <div className={`flex items-center mt-2 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? 
              <ArrowUp size={14} className="mr-1" /> : 
              <ArrowDown size={14} className="mr-1" />
            }
            <span className="text-sm">{change}</span>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-gray-700">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
