import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem.react';

import './NavigationItems.css';

const navigationItems = (props) => (
  <ul className='NavigationItems'>
    <NavigationItem link="/" exact>CRAZYAPRIL</NavigationItem>
    <NavigationItem link="/about" exact>ABOUT US</NavigationItem>
  </ul>
);

export default navigationItems;
