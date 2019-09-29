import React from 'react';
import { Button } from 'antd';

import './style.less';
import logo from '../../assets/graphics/heart.svg';


const Heart = props => {
  return (
    <div className = "button">
      <Button>Meow</Button>
    </div>
  );
};

export default Heart;
