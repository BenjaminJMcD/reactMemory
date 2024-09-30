import React from "react";
import { useEffect, useState } from "react";


export default function Card() {

    const [image, setImage] = useState()
    
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => response.json())
        .then(data => setImage(data.sprites.front_default))
    }, [])

    


    return (
        <div>
            {image && <img src={image}></img>}
        </div>
    )

}



