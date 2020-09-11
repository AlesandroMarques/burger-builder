import React from 'react';
import tbCss from './Toolbar.module.css';
import BurgerLogo from '../../../components/Logo/Logo';

import NavigationItems from '../NavigationItems/NavigationItems';
const toolbar = (props) => (

//placeorders for now 
<header className={tbCss.Toolbar}>
    <div className = {tbCss.Logo}>
    <BurgerLogo/>
    </div>
    <nav className={tbCss.DesktopOnly}>
        <NavigationItems/>   
    </nav> 
</header>




);

export default toolbar;