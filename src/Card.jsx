import React from "react";


function Card({ id, image, name, click }) {

    // ONCLICK FUNCTIONS --- FUNCTION MUST BE ON APP AND PASSED TO THIS SO THAT IT CAN JUMBLE THE ORDER OF ITEMS

    // NEED WAY TO KEEP TRACK AND COUNT WHICH HAVE ALREADY BEEN CHOSEN


    return (
        <div className="card" data-key={id} onClick={click}>
            <img data-key={id} src={image} alt="" />
            <h1 data-key={id}>{name}</h1>
        </div>
    )

}


export default Card
