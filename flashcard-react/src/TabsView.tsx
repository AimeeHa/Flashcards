import React, { useState } from 'react';
import './TabsView.css';

type TabConfig = {
  name: string;
  view: React.ReactNode;
};

type Props = {
  tabs: TabConfig[];
};

export const TabView = ({ tabs }: Props) => {
  const [selectedView, setSelectedView] = useState(0);

  return (
    <>
      <div className="all-inner-layout-pages">
        <div className="tab-options">
          {tabs.map((tab, i) => {
            return (
              <div
                key={i}
                className={`tab-view ${
                  i === selectedView ? 'chosen' : 'unchosen'
                }`}
                onClick={() => {
                  setSelectedView(i);
                }}
              >
                {tab.name}
              </div>
            );
          })}
        </div>
        <div className="tab-content-overall">{tabs[selectedView].view}</div>
      </div>
    </>
  );
};
