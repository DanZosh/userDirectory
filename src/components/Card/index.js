import React from 'react'
import "./style.css";

function Card() {
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="../../../hidden_resources/HeadshotDanMaier.jpg" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Title</h6>
                    <p className="card-text">Status2</p>
                    <p className="card-text">Status3</p>
                    <p className="card-text">Status4</p>

                </div>
            </div>
        </div>
    )
}
export default Card