import React from 'react';

import './style.less';
import StartThrowback from './components/Dashboard/StartThrowback';
import StopThrowback from './components/Dashboard/StopThrowback';

const Dashboard = props => {
  return (
    <div>
      <StartThrowback />
      <StopThrowback />
    </div>
  );
};

export default Dashboard;
