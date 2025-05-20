import React from 'react';
import { ProfileHeader } from './ProfileHeader';
import { FinancialMetrics } from './FinancialMetrics';
import { RewardsSection } from './RewardsSection';
import { TransactionsSection } from './TransactionsSection';
import { Car, ArrowRight } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <ProfileHeader />
      
      <div className="px-4 py-6 flex-1">
        <div className="mt-4 mb-8">
          <div className="bg-zinc-900 rounded-xl p-4 mb-6">
            <div className="flex items-center space-x-3 p-2">
              <div className="bg-zinc-800 rounded-full p-2">
                <Car className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm">get to know your vehicles, inside out</p>
                <p className="text-white font-medium">CRED garage</p>
              </div>
              <ArrowRight className="w-5 h-5 text-zinc-400" />
            </div>
          </div>
          
          <FinancialMetrics />
          
          <div className="mt-8">
            <h3 className="text-zinc-500 text-xs tracking-wider uppercase mb-4">
              YOUR REWARDS & BENEFITS
            </h3>
            
            <RewardsSection />
          </div>
          
          <div className="mt-8">
            <h3 className="text-zinc-500 text-xs tracking-wider uppercase mb-4">
              TRANSACTIONS & SUPPORT
            </h3>
            
            <TransactionsSection />
          </div>
        </div>
      </div>
    </div>
  );
};