'use client';

import { useState, useEffect, type ReactNode } from 'react';

type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

type TabSectionProps = {
  tabs: Tab[];
};

export function TabSection({ tabs }: TabSectionProps) {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id ?? '');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && tabs.some((t) => t.id === hash)) {
      setActiveTab(hash);
    }
  }, [tabs]);

  function handleTabClick(tab: Tab) {
    setActiveTab(tab.id);
    window.history.replaceState(null, '', '#' + tab.id);
  }

  const activeContent = tabs.find((t) => t.id === activeTab)?.content;

  return (
    <div>
      <div className="flex gap-1 border-b border-border mb-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'border-b-2 border-accent text-accent'
                : 'text-muted hover:text-foreground'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{activeContent}</div>
    </div>
  );
}
