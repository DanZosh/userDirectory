import React from 'react'

export default function Button(props) {
    // console.log("Button")
    return (
        <div>
        <button 
            type="button" 
            style={{marginRight : 3}}
            className="btn btn-primary btn-lg"
            onClick = {props.sortEmployeesFirstNameProp}
            >Sort By First Name
        </button>

        <button 
            type="button" 
            style={{marginRight : 3}}
            className="btn btn-primary btn-lg"
            onClick = {props.sortEmployeesLastNameProp}
            >Sort By Last Name
        </button>

        <button 
            type="button" 
            className="btn btn-primary btn-lg"
            onClick = {props.handleClearClickProp}
            >Unsort
        </button>

        </div>
    )
}