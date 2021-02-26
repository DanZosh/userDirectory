import React from 'react'

export default function Search() {
    console.log("Search")
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput"></label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Find Someone"/>
                </div>
            </form>
        </div>
    )
}
