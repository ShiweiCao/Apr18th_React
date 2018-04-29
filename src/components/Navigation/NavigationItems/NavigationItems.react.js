import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem.react';

import './NavigationItems.css';

const navigationItems = (props) => (
  <ul className='NavigationItems'>
    <NavigationItem link="/" exact>HOME</NavigationItem>
    <NavigationItem link="/about" exact>ABOUT US</NavigationItem>
    <NavigationItem link="/signin" exact>SIGN IN</NavigationItem>
    <NavigationItem link="/Signup" exact>SIGN UP</NavigationItem>
    <NavigationItem link="/machines" exact>SERVERS</NavigationItem>
    <NavigationItem link="/messages" exact>MESSAGES</NavigationItem>
  </ul>
);

export default navigationItems;
