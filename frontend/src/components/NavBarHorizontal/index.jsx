import React from "react";
import { Divider, Icon } from "antd";

import "./style.less";
import NavTileItem from "./NavTileItem";
import { ReactComponent as DashboardIcon } from "../../assets/dashboard-icon.svg";
import { ReactComponent as DiscordIcon } from "../../assets/discord-icon.svg";
import { ReactComponent as SwagIcon } from "../../assets/swag-icon.svg";


export default () => {
  return (
    <>
      <nav className="navbar-horizontal">
        <div className="selected">
          <NavTileItem icon={DashboardIcon} link="/" text="Dashboard" />
        </div>
        <a href="https://discord.gg/">
          <NavTileItem icon={DiscordIcon} text="Discord" />
        </a>
        <div className="selecte">
          <NavTileItem icon={SwagIcon} link="/" text="Dashboard" />
        </div>
      </nav>
      <Divider style={{ height: "2px", margin: "0" }} />
    </>
  );
};
