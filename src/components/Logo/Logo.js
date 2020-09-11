import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import logoCss from './Logo.module.css';

const logo = (props) => (
    <div className={logoCss.Logo}>
        <img src={burgerLogo} alt="MyBurger"/>
    </div>

);

export default logo;