import React from 'react';

import Aux from '../../hoc/Auxiliary';
import layoutCss from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

// can use {return ();};
// or ();

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <SideDrawer/>
        <main className = {layoutCss.Content}>
         {props.children}
        </main>
    </Aux>
    );


export default layout;