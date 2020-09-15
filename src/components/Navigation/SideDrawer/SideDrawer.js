import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../..//../hoc/Auxiliary';


const sideDrawer = (props) => {
    // add animation via css to slide draeer in and out 
    let attachedCssClasses = [classes.SideDrawer, classes.Close ];

    if(props.open){
        attachedCssClasses = [classes.SideDrawer, classes.Open ];
    }

    return(
            <Aux>
                <Backdrop show={props.open} clicked={props.toggle}/>
                <div className={attachedCssClasses.join(' ')}>
                    <div className={classes.Logo}><Logo/></div>
                     <nav>
                         <NavigationItems/>
                     </nav>
                 </div>
            </Aux>

    );
}

export default sideDrawer;