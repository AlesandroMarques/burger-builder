import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.50,
    cheese:1.00,
    patty:1.50,
    bacon:1.25


}

class BurgerBuilder extends Component {
    state = {
        //key value pairs of ingredients names and amount of each 
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            patty: 0
        },
        totalPrice: 4.00
    }

    // add handlers for adding and removing ingredients 
    //copy state into a temp , map it  change a value bthen assign back 

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updatdIngredients = {...this.state.ingredients};
        updatdIngredients[type] = updatedCount;


        const oldTotal = this.state.totalPrice;
        const newTotal = oldTotal + INGREDIENT_PRICES[type];

        this.setState({ingredients: updatdIngredients, totalPrice: newTotal});

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount >0){
            const updatedCount = oldCount -1;
        const updatdIngredients = {...this.state.ingredients};
        updatdIngredients[type] = updatedCount;

        const oldTotal = this.state.totalPrice;
        const newTotal = oldTotal - INGREDIENT_PRICES[type];

        this.setState({ingredients: updatdIngredients, totalPrice: newTotal});
        }
        
    }

render(){
// diable remove buttons if count is 0
const disabledInfo = {...this.state.ingredients};
for (let key in disabledInfo) {
        if(disabledInfo[key] <1) {disabledInfo[key]= true;  }
        else{disabledInfo[key]= false;}
}


    return(
        <Aux>
            <Burger ingredients = {this.state.ingredients} />
            <BuildControls 
            price = {this.state.totalPrice}
            priceMap = {INGREDIENT_PRICES}
            ingredientAdd = {this.addIngredientHandler}
            ingredientRemove = {this.removeIngredientHandler}
            disabled = {disabledInfo}
            />
        </Aux>

    );

}


}

export default BurgerBuilder;