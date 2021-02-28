import React from 'react'

export default function Button(props) {
    // console.log("Button")
    return (
        <div>
            {/* <div className="container">
                <div className="row">
                    <div style={{marginLeft : 0}} className="col"> */}
                        <button 
                            type="button" 
                            style={{marginRight : 3}}
                            className="btn btn-primary btn-lg"
                            onClick = {props.sortEmployeesFirstNameProp}
                            >Sort By First Name
                        </button>
                    {/* </div>
                    <div className="col"> */}
                        <button 
                            type="button" 
                            style={{marginRight : 3}}
                            className="btn btn-primary btn-lg"
                            onClick = {props.sortEmployeesLastNameProp}
                            >Sort By Last Name
                        </button>
                    {/* </div>
                    <div className="col"> */}
                        <button 
                            type="button" 
                            className="btn btn-primary btn-lg"
                            onClick = {props.handleClearClickProp}
                            >Unsort
                        </button>
                    {/* </div>
                </div>
            </div> */}
        </div>
    )
}