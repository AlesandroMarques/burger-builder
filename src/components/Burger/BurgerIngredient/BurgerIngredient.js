import React, {Component} from 'react';
import ingredientCss from './BurgerIngredient.module.css';
//typically use prop types on class based compoents so will restructure this to class based 

class BurgerIngredient extends Component {

    render(){
        let ingredient = null;

        //expect parameter type to be sent 
    switch(this.props.type){
        case ('bun-bottom'): 
            ingredient = <div className={ingredientCss.BunBottom}></div>;
            break;
        case('bun-top'): 
            ingredient = (
            <div className = {ingredientCss.BunTop}>
                <div className = {ingredientCss.Seeds1}></div>
                <div className = {ingredientCss.Seeds2}></div>
            </div>);
            break;
        case('meat'):
            ingredient = <div className = {ingredientCss.Meat}></div>
            break;
        case('cheese'):
            ingredient = <div className = {ingredientCss.Cheese}></div>
            break;
        case('salad'):
            ingredient = <div className = {ingredientCss.Salad}></div>
            break;
        case('bacon'):
            ingredient = <div className = {ingredientCss.Bacon}></div>
            break;
        default:
            ingredient = null; 


    }

    return(ingredient);


    }
    

}

export default BurgerIngredient;