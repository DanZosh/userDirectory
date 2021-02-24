import React from "react";
import Button from "./Button"
import Search from "./Search";

function Header(){
    console.log("Header")
    return(
        <div className="jumbotron">
            <h1 className="display-4">Your Employees</h1>
                <p className="lead">These are your employees!</p>
            <hr className="my-4"/>
            <Button/>
            <Search/>
        </div>
    )
}

export default Header;