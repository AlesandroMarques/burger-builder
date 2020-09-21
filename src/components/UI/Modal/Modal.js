import React from 'react';
import modalCss from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop'

//wrapper to display things , in this case wraps our order
const modal = (props) => {
    let modalDisplay = null;

    if(props.show){
        modalDisplay= (

         <Aux> 
        <Backdrop show ={props.show} clicked={props.modalClosed}/>
        <div className={modalCss.Modal}>
            {props.children}
        </div>
        </Aux>  
        );

    }

return(
modalDisplay);
};

export default modal;