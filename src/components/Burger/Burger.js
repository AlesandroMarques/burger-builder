import React from 'react';
import burgerCss from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

//this component is a wrapper for all the ingredients 
const burger = (props) => {

return (
<div className={burgerCss.Burger}>
    <BurgerIngredient type='bun-top'/>
    <BurgerIngredient type='cheese'/>
    <BurgerIngredient type='meat'/>
    <BurgerIngredient type='bacon'/>
    <BurgerIngredient type='salad'/>
    <BurgerIngredient type='cheese'/>
    <BurgerIngredient type='meat'/>
    <BurgerIngredient type='bun-bottom'/>
</div>


);
};

export default burger;