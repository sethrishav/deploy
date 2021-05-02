import React from 'react';
import './popup.css';

const Popup = (props) => {
    return (

        <
        div className = "popup--back" >
        <
        div className = "popup--content" >
        <
        h1 align = "center" > popup < /h1> <
        div className = "popup--close"
        onClick = { props.closePopup } > x < /div> <
        /div> <
        /div>
    )
}


export default Popup;