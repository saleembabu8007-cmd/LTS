import React from 'react';

export interface TabItem {
  id: string;
  label: string;
  count?: string | number;
  icon?: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  variant?: 'underline' | 'pills';
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  variant = 'underline',
  className = '',
}) => {
  if (variant === 'pills') {
    return (
      <div className={`flex items-center border border-slate-300 divide-x divide-slate-300 bg-white overflow-x-auto scrollbar-none rounded-none ${className}`}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`px-4 py-2.5 rounded-none text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors flex items-center gap-2 ${
                isActive
                  ? 'bg-[#173C62] text-white'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-none font-mono ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`border-b border-slate-300 overflow-x-auto scrollbar-none ${className}`}>
      <div className="flex space-x-6 sm:space-x-8">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 rounded-none ${
                isActive
                  ? 'border-[#173C62] text-[#173C62]'
                  : 'border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-400'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-none font-mono ${
                    isActive
                      ? 'bg-blue-50 text-[#173C62] border border-blue-200'
                      : 'bg-slate-100 text-slate-600 border border-slate-200'
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
