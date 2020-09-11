import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
    // add animation via css to slide draeer in and out 


    return(
            <div className={classes.SideDrawer}>
                <div className={classes.Logo}><Logo/></div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>


    );
}

export default sideDrawer;