import React from 'react';
import bcCss from './BuildControl.module.css';

const buildControl = (props) => (
<div className = {bcCss.BuildControl}>
    <div className = {bcCss.Label}>{props.label}</div>
    <button className={bcCss.Add}>Add</button>
    <button className={bcCss.Remove}>Remove</button>
</div>



);
export default buildControl