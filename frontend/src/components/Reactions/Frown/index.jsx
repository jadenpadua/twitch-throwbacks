import React from 'react';
import { Icon } from 'antd';

import './style.less';

const Frown = props => {
  return (
    ReactDOM.render(
      <div className="icons-list">
        <Icon type="frown" theme="filled"/>
      </div>,
      mountNode,
      );
};

export default Frown;
