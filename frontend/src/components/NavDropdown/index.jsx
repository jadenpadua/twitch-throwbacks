import React from 'react';
import { Divider } from 'antd';
import { NavLink } from 'react-router-dom';

import './style.less';
import NavListItem from '../NavListItem';

const NavDropdown = props => {
  return (
    <nav className="nav-dropdown">
      <section>
        <NavLink activeClassName="selected" className="nav-item" to="/">
          <NavListItem link="/dashboard" text="Dashboard" />
        </NavLink>
        <NavLink activeClassName="selected" className="nav-item" to="/leaderboard">
          <NavListItem text="Leaderboard" />
        </NavLink>
        <NavLink activeClassName="selected" className="nav-item" to="/profile">
          <NavListItem text="Profile" />
        </NavLink>
      </section>

      <Divider style={{ margin: '0.5rem 0' }} />

      <section>
        <NavLink activeClassName="selected" className="nav-item" to="/about">
          <NavListItem text="About ACM" />
        </NavLink>
        <NavLink activeClassName="selected" className="nav-item" to="/store">
          <NavListItem text="ACM Store" />
        </NavLink>
        <a className="nav-item" href="https://discord.gg/mK9Zrf4d">
          <NavListItem text="Discord" />
        </a>
      </section>

      <Divider style={{ margin: '0.5rem 0' }} />
      <div onClick={props.logout} className="logout">
        Sign Out
      </div>
    </nav>
  );
};

export default NavDropdown;
