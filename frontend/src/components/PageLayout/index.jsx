import React from "react";

import "./style.less";

import logo from "../../assets/logo.png";
import banner from "../../assets/banner.png";

import NavProfile from "../NavProfile";
import NavDropdown from "../NavDropdown";
import NavBarHorizontal from "../NavBarHorizontal";
import StartThrowback from "../StartThrowback";
import StopThrowBack from "../StopThrowback"

const PageLayout = props => {
  return (
    <div className="contents">
      <div className="header">
        <img alt="twitch" id="logo" src={logo} />
        <span className="heading">twitch </span>
        <span className="subheading">throwbacks</span>
        <div className="profile">
          <NavProfile menu={<NavDropdown />} />
        </div>
      </div>
      <img alt="banner" className="banner" src={banner} />
      <>
        <NavBarHorizontal />
        <div className="content">
          <h1>Start and stop Throwbacks</h1>
          <StartThrowback />
          <StopThrowBack />
        </div>
      </>
    </div>
  );
};

export default PageLayout;
