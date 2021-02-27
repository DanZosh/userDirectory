import React from 'react'

export default function Button(props) {
    // console.log("Button")
    return (
        <div>
            <button 
                type="button" 
                className="btn btn-primary btn-lg"
                onClick = {props.sortEmployeesProp}
                >Sort Alphabetically</button>
        </div>
    )
}
