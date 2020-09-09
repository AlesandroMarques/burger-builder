import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        //key value pairs of ingredients names and amount of each 
        ingredients:{
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 3
        }



    }

render(){
    return(
        <Aux>
            <Burger ingredients = {this.state.ingredients}/>
            <div>Build Controls</div>
        </Aux>

    );

}


}

export default BurgerBuilder;