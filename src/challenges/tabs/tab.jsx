import { useState } from 'react';
import classes from './tabs.module.css';

export default function Tab({ tabs }) {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0]?.id);
  const selectedTab = tabs.find((tab) => tab.id == selectedTabId);
  return (
    <div className={classes.tabContainer}>
      <div className={classes.headerContainer}>
        {tabs.map((tab) => (
          <span
            className={`${classes.inactive} ${tab.id == selectedTabId ? classes.active : ''}`}
            key={tab.id}
            onClick={() => setSelectedTabId(tab.id)}
          >
            {tab.header}
          </span>
        ))}
        <span className={classes.extraSpan}></span>
      </div>
      <div key={selectedTabId} className={classes.contentContainer}>
        {selectedTab.content}
      </div>
    </div>
  );
}
