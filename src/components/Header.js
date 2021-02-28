import React from "react";

function Header(props){
    // console.log("Header")
    return(
        <div className="jumbotron">
            <h1 className="display-4">Your Employees</h1>
                <p className="lead">These are your employees!</p>
            <hr className="my-4"/>
        {props.children}
        </div>
    )
}

export default Header;