import React from "react";


function Card({ id, image, name, click }) {

    return (
        <div className="card" data-key={id} onClick={click}>
            <img data-key={id} src={image} alt="" />
            <h1 className="pokeName" data-key={id}>{name}</h1>
        </div>
    )

}


export default Card
