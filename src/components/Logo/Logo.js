import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import logoCss from './Logo.module.css';

const logo = (props) => (
    <div className={logoCss.Logo}>
        <a href="/">
        <img src={burgerLogo} alt="MyBurger"/>
        </a>
    </div>

);

export default logo;