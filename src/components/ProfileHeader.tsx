import React from 'react';
import { ArrowLeft, MessageSquare, PenTool } from 'lucide-react';

export const ProfileHeader: React.FC = () => {
  return (
    <header className="relative pt-12 pb-4 px-4">
      <div className="flex justify-between items-center mb-8">
        <button className="p-1">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-xl font-medium">Profile</h1>
        <button className="bg-zinc-800 rounded-full px-4 py-2 flex items-center space-x-2">
          <MessageSquare className="w-5 h-5 text-zinc-400" />
          <span className="text-zinc-400 text-sm">support</span>
        </button>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="relative mb-3">
          <img 
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Profile" 
            className="w-24 h-24 rounded-full object-cover border-2 border-zinc-700"
          />
          <button className="absolute bottom-0 right-0 bg-zinc-800 p-2 rounded-full">
            <PenTool className="w-4 h-4 text-white" />
          </button>
        </div>
        <h2 className="text-2xl font-medium text-white">Sanya Gupta</h2>
        <p className="text-zinc-400 text-sm">member since Dec, 2020</p>
      </div>
    </header>
  );
};