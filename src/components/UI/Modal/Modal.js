import React from 'react';
import modalCss from './Modal.module.css';

//wrapper to display things , in this case wraps our order
const modal = (props) => {
    let modalDisplay = null;

    if(props.show){
        modalDisplay= (
        <div className={modalCss.Modal}>
            {props.children}
        </div>);

    }

return(
modalDisplay);
};

export default modal;