import React from "react";
import { useEffect, useState } from "react";


function Card() {

    const pokemons = ['squirtle', 'ditto', 'blastoise']

    const [pokemonImages, setPokemonImages] = useState([
        {id: 1, name: "", url: ""}
    ])
    
    // useEffect(() => {
    //     fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
    //     .then(response => response.json())
    //     .then(data => setImage(data.sprites.front_default))
    // }, [])

    useEffect(() => {
        pokemons.map((pokemon) => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(reponse => reponse.json())
            .then(data => setPokemonImages((prev) => [...prev, { name: data.name, url: data.sprites.front_default }]))
        })
    }, [])

    
    console.log(pokemonImages)


    return (
        <div>


        </div>
    )

}


export default Card
