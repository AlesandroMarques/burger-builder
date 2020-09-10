import React from 'react';
import modalCss from './Modal.module.css';

//wrapper to display things , in this case wraps our order
const modal = (props) => (
<div className={modalCss.Modal}
    style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1': ''

    }}

>
    {props.children}
</div>



);

export default modal;