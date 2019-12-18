import React from 'react'

function Mapper({pokemons}){
    return(
        <div>
            <h1>MAPPER</h1>
            {pokemons.map(poke => <p>{poke.name}</p>)}
        </div>
    )
}

function Exercices(e_props){

    const tableau = [
        {name: "Bulbizarre", type: "Plante"},
        {name: "Salamèche", type: "Feu"},
        {name: "Carapuce", type: "Eau"},
        {name: "Pikachu", type: "Electricité"}
    ]

    const types = tableau.map(pokemon => pokemon.type)
    console.log('types', types)

    return(
        <div>
            <div>EXERCICES</div>
            <Mapper 
                pokemons={tableau}
            />
        </div>
    )
}

function Consumer({size, adress}){
    return(
        <div>
            <h2>Consommateur</h2>
            <p>{size}</p>
            <p>{adress}</p>
        </div>
    )
}

function Deconstructor(props){
    return(
        <div>
            <h1>Déconstructeur</h1>
            <p>{props.age}</p>
            <Consumer {...props} />
            <Consumer 
                size={122}
                adress="2 rue de la laque"
            />

        </div>
    )
}

export default Exercices