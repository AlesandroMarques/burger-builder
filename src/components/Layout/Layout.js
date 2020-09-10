import React from 'react';

import Aux from '../../hoc/Auxiliary';
import layoutCss from './Layout.module.css';

// can use {return ();};
// or ();

const layout = (props) => (
    <Aux>
        <div>ToolBar, SideDrawer, BackDrop</div>
        <main className = {layoutCss.Content}>
         {props.children}
        </main>
    </Aux>
    );


export default layout;