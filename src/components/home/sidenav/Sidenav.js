import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Blog Page</li>
        <li className="sidenavLi">Portfolio Page</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">Web Development</li>
        <li className="sidenavLi">Portfolio Websites</li>
        <li className="sidenavLi">Backend Setup</li>
   
      </ul>
      <SidenavTitle title="L" subTitle="atest Posts" />
      <ul>
        <li className="sidenavLi">What does a software developer do?</li>
        <li className="sidenavLi">What is SEO?</li>
        <li className="sidenavLi">
        What is domain&server?
        </li>
      
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">+90 554 115 78 95</li>
        <li className="sidenavLi">deth.nhn@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav