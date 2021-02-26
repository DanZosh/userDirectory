import React from 'react'
// import "./style.css";

function Card(props) {
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" 
                    src={props.picture.thumbnail} 
                    alt={props.name.first}
                />
                <div className="card-body">
                    <h5 className="card-title">Name: 
                        {props.name.first} 
                        {props.name.last}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">Branch: 
                        {props.location.city}
                    </h6>
                    <p className="card-text">Email: 
                        {props.email}
                    </p>
                    <p className="card-text">Phone: 
                        {props.phone}
                    </p>
                    <p className="card-text">City: 
                        {props.location.city}
                    </p>
                    <p className="card-text">Country: 
                        {props.location.country}
                    </p>

                </div>
            </div>
        </div>
    )
}
export default Card