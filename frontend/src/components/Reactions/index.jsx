import React from 'react';

import './style.less';
import Frown from './components/Reactions/Frown';
import Heart from './components/Reactions/Heart';

const Reactions = props => {
  return (
    <div>
      <Heart />
      <Frown />
    </div>
  );
};

export default Reactions;
