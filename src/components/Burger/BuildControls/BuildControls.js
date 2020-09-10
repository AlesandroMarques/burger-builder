import React from 'react';
import bcsCss from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    {label: 'Patty', type:'patty' },
    {label: 'Cheese', type:'cheese' },
    {label: 'Salad', type:'salad' },
    {label: 'Bacon', type:'bacon' }
];

const buildControls = (props) => (
<div className = {bcsCss.BuildControls}>
<h1 className = {bcsCss.Price}>Price: ${props.price.toFixed(2)}</h1>
    {controls.map(ctrl => (
        <BuildControl 
            key = {ctrl.label} 
            label = {ctrl.label}
            //change this to es6 function to pass value
           // added = { props.ingredientAdd}
           // removed = { props.ingredientRemove}
           IngPrice = {props.priceMap[ctrl.type]}
           added = { () =>props.ingredientAdd(ctrl.type)}
           removed = { () =>props.ingredientRemove(ctrl.type)}
           disabled = {props.disabled[ctrl.type]}
            />
    ))}
    <button className={bcsCss.OrderButton} disabled={!props.canCheckout} onClick={props.orderSet}>PLACE ORDER</button>
</div>
);


export default buildControls;