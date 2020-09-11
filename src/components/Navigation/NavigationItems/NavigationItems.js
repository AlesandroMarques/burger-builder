import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem'


// ul unordered list 
// li list item
//a hyperlink

// can outsort idividual links into its own component if you want also we will do that here 
const navigationItems = () => (
<ul className={classes.NavigationItems}>
<NavigationItem link="/" active={true}>Menu</NavigationItem>
    <NavigationItem link="/" active={true}>Burger Builder</NavigationItem>
    <NavigationItem link="/" active={true}>Checkout</NavigationItem>
</ul>



);

export default navigationItems;