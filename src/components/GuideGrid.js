import React from 'react';
import './GuideGrid.scss';

const GuideGrid = () => {
  return (
    <div className="guideGrid">
      <div className="guideGrid-guide">Collect Data</div>
      <div className="guideGrid-guide">Explore Data</div>
      <div className="guideGrid-guide">Build Apps</div>
      <div className="guideGrid-guide">Automate New Relic</div>
      <div className="guideGrid-guide">Reference Docs</div>
    </div>
  );
};

export default GuideGrid;
