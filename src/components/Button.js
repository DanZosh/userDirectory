import React from 'react'

export default function Button(props) {
    // console.log("Button")
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <button 
                            type="button" 
                            className="btn btn-primary btn-lg"
                            onClick = {props.sortEmployeesFirstNameProp}
                            >Sort By First Name
                        </button>
                    </div>
                    <div className="col">
                        <button 
                            type="button" 
                            className="btn btn-primary btn-lg"
                            onClick = {props.sortEmployeesLastNameProp}
                            >Sort By Last Name
                        </button>
                    </div>
                    <div className="col">
                        <button 
                            type="button" 
                            className="btn btn-primary btn-lg"
                            onClick = {props.sortEmployeesLastNameProp}
                            >Unsort
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}