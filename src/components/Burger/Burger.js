import React from 'react';
import burgerCss from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

//this component is a wrapper for all the ingredients 
const burger = (props) => {
// Object.keys coverts the keys into an arrat of key names 
// map that with the keyName , then create array of length value of that keyName
// then return a Burger ingredient obj with randon index/key and the ingreditent keyname as the type 
// result is an array of <BurgerIngredient type = {ingredient names}
    let ingredientNames = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i)=> { 
        return <BurgerIngredient key={igKey +i} type={igKey}/>;
    });
    })
    //reduce below flattens array before this it is array of arrays
    .reduce((arr,el)=>{
        return arr.concat(el)
    },[]);



    // check if inegrediantNames array is empty 
    // if it is output a msg 'start building your burger'
    console.log(ingredientNames);

    //let outputMsg = null;
    if(ingredientNames.length ===0){

        //outputMsg = <p>START BUILDING YOUR BUGER</p>;
        ingredientNames= <p>START BUILDING YOUR BURGER</p>;
    }


return (
<div className={burgerCss.Burger}>
    <BurgerIngredient type='bun-top'/>
    {ingredientNames}
    <BurgerIngredient type='bun-bottom'/>
</div>


);
};

export default burger;