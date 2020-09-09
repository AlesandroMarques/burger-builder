import React from 'react';
import burgerCss from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

//this component is a wrapper for all the ingredients 
const burger = (props) => {
// Object.keys coverts the keys into an arrat of key names 
// map that with the keyName , then create array of length value of that keyName
// then return a Burger ingredient obj with randon index/key and the ingreditent keyname as the type 
// result is an array of <BurgerIngredient type = {ingredient names}
    const ingredientNames = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i)=> { 
        return <BurgerIngredient key={igKey +i} type={igKey}/>;
    });

    });


return (
<div className={burgerCss.Burger}>
    <BurgerIngredient type='bun-top'/>
    {ingredientNames}
    <BurgerIngredient type='bun-bottom'/>
</div>


);
};

export default burger;