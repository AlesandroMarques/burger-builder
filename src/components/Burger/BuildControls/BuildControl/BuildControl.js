import React from 'react';
import bcCss from './BuildControl.module.css';

const buildControl = (props) => (
<div className = {bcCss.BuildControl}>
    <div className = {bcCss.Label}>{props.label}</div>
    <button className={bcCss.Add} onClick = {props.added}>Add</button>
    <button className={bcCss.Remove} onClick = {props.removed}>Remove</button>
</div>



);
export default buildControl