import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const RewardsSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <RewardItem 
        title="cashback balance"
        value="₹0"
      />
      
      <div className="w-full h-px bg-zinc-800"></div>
      
      <RewardItem 
        title="coins"
        value="26,46,583"
      />
      
      <div className="w-full h-px bg-zinc-800"></div>
      
      <div className="flex justify-between items-center py-2">
        <div className="flex flex-col">
          <span className="text-white">win upto Rs 1000</span>
          <span className="text-zinc-500 text-sm">refer and earn</span>
        </div>
        <ChevronRight className="w-5 h-5 text-zinc-400" />
      </div>
    </div>
  );
};

interface RewardItemProps {
  title: string;
  value: string;
}

const RewardItem: React.FC<RewardItemProps> = ({ title, value }) => {
  return (
    <div className="flex justify-between items-center py-2">
      <div className="flex flex-col">
        <span className="text-white">{title}</span>
        <span className="text-white text-xl">{value}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-zinc-400" />
    </div>
  );
};