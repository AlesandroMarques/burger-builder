import React from 'react';
import tbCss from './Toolbar.module.css';
import BurgerLogo from '../../../components/Logo/Logo';
const toolbar = (props) => (

//placeorders for now 
<header className={tbCss.Toolbar}>
    <div>MENU</div>
    <BurgerLogo/>
    <nav>
        <ul>...</ul>    
    </nav> 
</header>




);

export default toolbar;