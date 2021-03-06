import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    state = {
        //key value pairs of ingredients names and amount of each 
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }



    }

render(){
    return(
        <Aux>
            <Burger ingredients = {this.state.ingredients}/>
            <BuildControls/>
        </Aux>

    );

}


}

export default BurgerBuilder;