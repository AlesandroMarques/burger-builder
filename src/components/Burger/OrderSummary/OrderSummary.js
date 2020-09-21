import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';


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
        <h4>TOTAL PRICE: ${props.price}</h4>
        <p>A Burger with the following ingredients</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p>Continue To Checkout?</p>
        <Button clicked = {props.clickedContinue} btnType = "Success">CONTINUE</Button>
        <Button clicked = {props.clickedCancel} btnType = "Danger">CANCEL</Button>
    </Aux>
    );





};

export default orderSumary;