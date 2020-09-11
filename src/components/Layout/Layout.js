import React from 'react';

import Aux from '../../hoc/Auxiliary';
import layoutCss from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

// can use {return ();};
// or ();

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <main className = {layoutCss.Content}>
         {props.children}
        </main>
    </Aux>
    );


export default layout;