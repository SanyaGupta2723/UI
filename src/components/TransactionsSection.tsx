import React from 'react';
import { ChevronRight } from 'lucide-react';

export const TransactionsSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center py-2">
        <span className="text-white">all transactions</span>
        <ChevronRight className="w-5 h-5 text-zinc-400" />
      </div>
    </div>
  );
};