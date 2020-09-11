import React from 'react';
import classes from './NavigationItem.module.css';

// li list item
//a hyperlink
const navigationItem = (props) => (
  
<li className={classes.NavigationItem}>
    <a 
        href={props.link}
        className={props.active ? classes.active : null}>
        {props.children}
    </a>
    </li>

);


export default navigationItem;