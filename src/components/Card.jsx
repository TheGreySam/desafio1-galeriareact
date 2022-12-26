import React from "react";

const Card = (props) => {
    return (
        <div className="card m-3 bg-success" >
            <img className="card-img-top" src={props.imagen} alt="imagen"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.descripcion}</p>
                    
                </div>
        </div>
    )
}

export default Card;