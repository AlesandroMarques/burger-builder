import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
const INGREDIENT_PRICES = {
    salad: 0.50,
    cheese:1.00,
    patty:1.50,
    bacon:1.25


}

const BASE_PRICE =4.00;

class BurgerBuilder extends Component {
    state = {
        //key value pairs of ingredients names and amount of each 
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            patty: 0
        },
        totalPrice: BASE_PRICE,
        purchasable: false,
        orderSet: false

    }

    // ADD METHOD TO check update purchaseable state , called whenover something is added or removed 
    updatePurchaseState (newTotal){
      //  this lages behind because we are looking at old tootalPrice 
      // there can pass new total from the handlers calling this 

       // const price = this.state.totalPrice;
        let purchaseState = this.state.purchasable;
        if(newTotal>BASE_PRICE){purchaseState=true;}
        else{purchaseState=false;}
       
        this.setState({purchasable: purchaseState});
        

    }

    orderResetHandler = () =>{

        this.setState({
            //key value pairs of ingredients names and amount of each 
            ingredients:{
                salad: 0,
                bacon: 0,
                cheese: 0,
                patty: 0
            },
            totalPrice: BASE_PRICE,
            purchasable: false,
            orderSet: false
    
        });


    }

    orderSetHandler = () =>{

        const orderSetCopy = this.state.orderSet;
            this.setState({orderSet: !orderSetCopy});


    }

    orderContinueHandler = () =>{
        const price = this.state.totalPrice.toFixed(2);
        const msg = ('CHECKOUT: $' + price );

        alert(msg)
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
        this.updatePurchaseState(newTotal);

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
        this.updatePurchaseState(newTotal);
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
            <Modal show = {this.state.orderSet} modalClosed = {this.orderSetHandler}>
                <OrderSummary ingredients={this.state.ingredients} price={this.state.totalPrice.toFixed(2)} clickedCancel={this.orderSetHandler} clickedContinue={this.orderContinueHandler}/>
            </Modal>
            <Burger ingredients = {this.state.ingredients} />
            <BuildControls 
            price = {this.state.totalPrice}
            priceMap = {INGREDIENT_PRICES}
            ingredientAdd = {this.addIngredientHandler}
            ingredientRemove = {this.removeIngredientHandler}
            disabled = {disabledInfo}
            canCheckout = {this.state.purchasable}
            orderSet = {this.orderSetHandler}
            orderReset ={this.orderResetHandler}
            />
        </Aux>

    );

}


}

export default BurgerBuilder;