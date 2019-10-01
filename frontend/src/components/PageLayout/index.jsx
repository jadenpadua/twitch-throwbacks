import React from "react";

import "./style.less";

import logo from "../../assets/logo.png";
import banner from "../../assets/banner.png";
import pogchamp from "../../assets/pogchamp.png";
import LUL from "../../assets/LUL.png";
import kills from "../../assets/shroud-3k.jpg";

import NavProfile from "../NavProfile";
import NavDropdown from "../NavDropdown";
import NavBarHorizontal from "../NavBarHorizontal";
import StartThrowback from "../StartThrowback";
import StopThrowBack from "../StopThrowback";

class PageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 285,
      numbertwo: 590,
    };
    this.counter = this.counter.bind(this);
    this.timer = "";
    this.counter()
  }

  counter() {
    this.timer = setTimeout(() => {
      this.setState({ 
        number: this.state.number + 1, 
        numbertwo: this.state.numbertwo + 7 }); 
      this.counter();
    }, 1000);
  }
  render() {
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
          <div className="content-table">
            <div className="column-one">
              <h1>
                <b>Start/Stop Throwbacks</b>
                <hr />
              </h1>
              <StartThrowback />
              <StopThrowBack />
              <h1 className="emotes">
                <b>Current Clip</b>
                <hr />
              </h1>
              <h2>⠀Shroud Gets a 3k</h2>
              <img alt="banner" className="kill" src={kills} />

              <h1 className="emotes">
                <b>Emotes</b>
                <hr />
              </h1>
              <div className="emoji-row">
                <img alt="banner" className="emoji" src={LUL} />
                <h3>
                  ⠀<b>LUL:⠀</b>
                </h3>
                <h3>{this.state.numbertwo}</h3>
              </div>
              <div className="emoji-row">
                <img alt="banner" className="emoji" src={pogchamp} />
                <h3>
                  ⠀<b>pogchamp:⠀</b>
                </h3>
                <h3>{this.state.number}</h3>
              </div>
            </div>
          </div>
        </>
      </div>
    );
  }
}

export default PageLayout;
