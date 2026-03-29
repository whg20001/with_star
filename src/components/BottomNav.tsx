import React from 'react';
import { ICONS } from '../icons';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: '首页', icon: ICONS.Home },
    { id: 'classroom', label: '课堂', icon: ICONS.School },
    { id: 'volunteers', label: '志愿者', icon: ICONS.Users },
    { id: 'psychology', label: '心理支持', icon: ICONS.Brain },
    { id: 'map', label: '资源地图', icon: ICONS.MapIcon },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-white/70 backdrop-blur-xl rounded-t-[20px] shadow-[0_-8px_24px_rgba(0,0,0,0.04)]">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center px-4 py-2 transition-all duration-300 ${
              isActive 
                ? 'bg-primary/10 text-primary rounded-[20px]' 
                : 'text-slate-400 hover:text-primary'
            }`}
          >
            <Icon size={24} fill={isActive ? 'currentColor' : 'none'} />
            <span className="text-[10px] font-medium mt-1">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
