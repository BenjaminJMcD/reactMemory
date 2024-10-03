import React from "react";


function Card({ image, name }) {

    // ONCLICK FUNCTIONS --- FUNCTION MUST BE ON APP AND PASSED TO THIS SO THAT IT CAN JUMBLE THE ORDER OF ITEMS

    // NEED WAY TO KEEP TRACK AND COUNT WHICH HAVE ALREADY BEEN CHOSEN


    return (
        <div className="card">
            <img src={image} alt="" />
            <h1>{name}</h1>
        </div>
    )

}


export default Card
