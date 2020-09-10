import React from 'react';
import bcCss from './BuildControl.module.css';

const buildControl = (props) => (
<div className = {bcCss.BuildControl}>
    <div className = {bcCss.Label}>{props.label}</div>
    <button className={bcCss.Add} onClick = {props.added}>Add</button>
    <button className={bcCss.Remove} onClick = {props.removed} disabled={props.disabled}>Remove</button>
    <label className = {bcCss.Label2}>${props.IngPrice.toFixed(2)}</label>
    
</div>

//<label>${props.IngPrice}</label>

);
export default buildControl