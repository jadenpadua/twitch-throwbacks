import React from 'react';
import { Icon } from 'antd';

import './style.less';
import logo from '../../assets/graphics/heart.svg';


const Heart = props => {
  return (
    ReactDOM.render(
      <div className="icons-list">
        <Icon type="heart" theme="outline"/>
      </div>,
      mountNode,
    );
};

export default Heart;
