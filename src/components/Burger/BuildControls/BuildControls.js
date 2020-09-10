import React from 'react';
import bcsCss from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    {label: 'Meat', type:'meat' },
    {label: 'Cheese', type:'cheese' },
    {label: 'Salad', type:'salad' },
    {label: 'Bacon', type:'bacon' }
];

const buildControls = (props) => (
<div className = {bcsCss.BuildControls}>
    {controls.map(ctrl => (
        <BuildControl 
            key = {ctrl.label} 
            label = {ctrl.label}
            //change this to es6 function to pass value
           // added = { props.ingredientAdd}
           // removed = { props.ingredientRemove}
           added = { () =>props.ingredientAdd(ctrl.type)}
           removed = { () =>props.ingredientRemove(ctrl.type)}
            />
    ))}
</div>
);


export default buildControls;