import React from 'react'
import "./style.css";

function Body(props) {
    // console.log("Body")
    return <div className = "body">{props.children}</div>
}

export default Body