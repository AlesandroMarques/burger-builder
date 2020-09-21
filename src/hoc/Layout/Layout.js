import React, {Component} from 'react';

import Aux from '../Auxiliary/Auxiliary';
import layoutCss from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

// can use {return ();};
// or ();

class Layout extends Component {

    state = {
        showSideDrawer: false

    }

    toggleSideDrawerHandler = () => { 
       // const showSide = !this.state.showSideDrawer;
       // this.setState({showSideDrawer: showSide});
        // above alos works 

        this.setState(
            (prevState) => {return{showSideDrawer: !prevState.showSideDrawer};
        }
        );
    
    
    }

    render(){

        return (
        <Aux>
            <Toolbar toggle={this.toggleSideDrawerHandler}/>
            <SideDrawer open={this.state.showSideDrawer} toggle={this.toggleSideDrawerHandler}/>
            <main className = {layoutCss.Content}>
             {this.props.children}
            </main>
        </Aux>);
    }

};







export default Layout;