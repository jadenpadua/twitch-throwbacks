import React from 'react';
import { Avatar, Icon, Dropdown, Progress } from 'antd';

import './style.less';
import shroud from '../../assets/shroud.png'

const NavProfile = props => {
  return (
    <div className="nav-width">
      <Dropdown overlay={props.menu} trigger={['click']}>
        <div className="nav-profile">
          <Progress
            className="progress"
            showInfo={false}
            strokeColor="#FFFFFF"
            type="circle"
            width={55}
          />
          <Avatar size={55} icon="user" className="avatar" src={shroud} />
          <span className="name">Shroud</span>
          <Icon type="menu-fold" color="white" className="arrow" />
        </div>
      </Dropdown>
    </div>
  );
};

export default NavProfile;
