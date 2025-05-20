import React from 'react';
import { CircleDollarSign, ArrowRight, RefreshCw, IndianRupee, BarChart3 } from 'lucide-react';

export const FinancialMetrics: React.FC = () => {
  return (
    <div className="space-y-6">
      <MetricItem 
        icon={<CircleDollarSign className="w-5 h-5 text-white" />}
        label="credit score"
        value="757"
        extra={
          <div className="flex items-center">
            <span className="text-emerald-400 text-xs mr-2">•</span>
            <span className="text-emerald-400 text-xs">REFRESH AVAILABLE</span>
          </div>
        }
      />
      
      <div className="w-full h-px bg-zinc-800"></div>
      
      <MetricItem 
        icon={<IndianRupee className="w-5 h-5 text-white" />}
        label="lifetime cashback"
        value="₹3"
      />
      
      <div className="w-full h-px bg-zinc-800"></div>
      
      <MetricItem 
        icon={<BarChart3 className="w-5 h-5 text-white" />}
        label="bank balance"
        value="check"
      />
    </div>
  );
};

interface MetricItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  extra?: React.ReactNode;
}

const MetricItem: React.FC<MetricItemProps> = ({ icon, label, value, extra }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="bg-zinc-800 rounded-full p-2">
          {icon}
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center">
            <span className="text-zinc-400 text-sm">{label}</span>
            {extra && <div className="ml-2">{extra}</div>}
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-white">{value}</span>
        <ArrowRight className="w-5 h-5 text-zinc-400" />
      </div>
    </div>
  );
};