const pokemonBox = document.getElementById("pokemonBox");
const clearList = () => pokemonBox.innerHTML = "";

const setPokemon = async(pokemon) => {
    clearList();
    const data = await getPokemon(pokemon);
    const pokemonBox = document.getElementById("pokemonBox");
    header = document.createElement("h1");
    header.textContent = `${data.name}`;
    img = document.createElement("img");
    img.src = `${data.sprites.front_default}`;
    h2 = document.createElement("h2");
    h2.textContent = `Style: ${data.types[0].type.name}`;
    span1 = document.createElement("span");
    span1.textContent = `#${data.id}` ;
    span2 = document.createElement("span");
    span2.textContent = `${data.base_experience} XP Points`;
    header.appendChild(img);
    pokemonBox.appendChild(header);
    pokemonBox.appendChild(h2);
    pokemonBox.appendChild(span1);
    pokemonBox.appendChild(span2);
};

// const setPokemonType = async(id) => {
//     const dataType = await getPokemonType();
//     console.log(dataType);
// };

// setPokemonType();

const randomPokemon = () =>{
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const pokemon = (getRandomInt(899)); //898 pokemons in database 
    setPokemon(pokemon)
}

// randomPokemon();

const btn = document.querySelector(".btn");

btn.addEventListener("click", randomPokemon);




  