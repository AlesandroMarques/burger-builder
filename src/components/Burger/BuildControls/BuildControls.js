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
        <BuildControl key = {ctrl.label} label = {ctrl.label}/>
    ))}
</div>
);


export default buildControls;