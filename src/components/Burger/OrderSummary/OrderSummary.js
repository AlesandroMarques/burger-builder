import React from 'react';
import Aux from '../../../hoc/Auxiliary';


//this will show a number of things 
// topping summer , price , confirm order , a header etc 
const orderSumary = (props) => {
    // tkae ingrendient and map to list items 
    //expecting object format 
    //<li> list item 
    //<san> capitilizes first letter
const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style ={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                    </li>);
        });

    

    return(
        // <ul> unorderted list
    <Aux>
        <h3>YOUR ORDER</h3>
        <p>A Burger witht the following ingredients</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p>Continue to Order</p>

    </Aux>
    );





};

export default orderSumary;