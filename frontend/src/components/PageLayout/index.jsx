import React from "react";

import "./style.less";

import logo from "../../assets/logo.png";
import StartThrowback from "../StartThrowback";

const PageLayout = props => {
  return (
    <div>
      {/* <div className="header">
        <img alt="twitch" id="logo" src={logo} />
        <span className="heading">ACM@UCSD</span>
        <span className="subheading">Membership Portal</span>
      </div> */}
      <StartThrowback className="meow"/>
    </div>
  );
};

export default PageLayout;

// const PageLayouts = props => {
//   return (
//     <>

//       <Banner />
//       {props.isMobile ? (
//         <>
//           <NavBarHorizontal />
//           <div className="content">{props.children}</div>
//         </>
//       ) : (
//         <div className="content-table">
//           <NavBarVertical isAdmin={props.isAdmin} />
//           <div className="content">{props.children}</div>
//         </div>
//       )}
//     </>
//   );
