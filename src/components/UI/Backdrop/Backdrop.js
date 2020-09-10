import React from 'react';
import bdCss from "./Backdrop.module.css";


// greys out the background 
// when background is clicked something happens 
const backdrop = (props) => (

    props.show ? <div className={bdCss.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;