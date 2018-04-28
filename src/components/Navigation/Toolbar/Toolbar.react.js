import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo.react';
import NavigationItems from '../NavigationItems/NavigationItems.react';

const toolbar = (props) => (
  <header className='Toolbar'>
      <Logo />
    <nav>
      <NavigationItems  />
    </nav>
  </header>
);

export default toolbar;


// isAuth is a property, passed down to here from Layout, and then be passed to NavigationItems
