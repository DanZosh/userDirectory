import React from 'react'
let textInput = React.createRef()

function Search(props) {
    console.log("Search")

    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput"></label>
                    <input 
                    type="text" 
                    className="form-control" id="formGroupExampleInput" placeholder="Find Someone"
                    ref = {textInput}
                    onChange = {props.handleInputChangeProp}
                    />
                    {/* <button type="button" class="btn btn-primary" onClick={props.handleInputChangeProp}> search </button> */}
                    
                </div>
            </form>
        </div>
    )
}
export default Search