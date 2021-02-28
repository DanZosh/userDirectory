import React from 'react'
let textInput = React.createRef()

function Search(props) {
    // console.log("Search")

    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput"></label>
                    <input 
                    type="text" 
                    className="form-control" id="formGroupExampleInput" placeholder="Enter their first or last name"
                    onChange = {props.handleInputChangeProp}
                    />
                    <button type="button" className="btn btn-primary" onClick={props.handleSearchClickProp}> search </button>
                    <button type="button" className="btn btn-primary" onClick={props.handleClearClickProp}> clear </button>
                    
                </div>
            </form>
        </div>
    )
}
export default Search