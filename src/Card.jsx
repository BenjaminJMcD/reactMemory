import React from "react";


function Card({ image, name }) {

    // const [pokemonUrl, setPokemonUrl] = useState(null)
    
    // useEffect(() => {
    //     fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
    //     .then(response => response.json())
    //     .then(data => setImage(data.sprites.front_default))
    // }, [])

    // useEffect(() => {
    //     pokemons.map((pokemon) => {
    //         fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    //         .then(reponse => reponse.json())
    //         .then(data => setPokemonUrl(data.sprites.front_default))
    //     })
    // }, [])






    return (
        <div>
            <img src={image} alt="" />
            <h1>{name}</h1>
        </div>
    )

}


export default Card
