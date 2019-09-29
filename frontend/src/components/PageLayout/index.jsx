import React from "react";

import "./style.less";
import StartThrowback from "../StartThrowback";

const PageLayout = props => {
  return (
    <div>
      <StartThrowback />
    </div>
  );
};

export default PageLayout;

// const PageLayout = props => {
//   return (
//     <>
//       <div className="header">
//         <NavLink className="title" to="/">
//           <img alt="ACM" id="logo" src={logo} />
//           <span className="heading">ACM@UCSD</span>
//           <span className={props.isMobile ? 'hidden' : 'subheading'}>&nbsp;Membership Portal</span>
//         </NavLink>
//         <div className="profile">
//           <NavProfile menu={<NavDropdown />} />
//         </div>
//       </div>
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
