const url1 = "https://pokeapi.co/api/v2/pokemon"; //alle pokemons
const url2 = "https://pokeapi.co/api/v2/type"; //strength weakness

// const ID = 250;
const getPokemon = async (ID) => {
    const APIEndpoint = `${url1}/${ID}`;
    try {
        const res = await fetch(APIEndpoint, { method: "GET" });
        console.log(res);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};


//type fetch ivm strength and weakness
// const id = "fire"
// const getPokemonType = async () => {
//     const APIEndpoint = `${url2}/${id}`;
//     try {
//         const res = await fetch(APIEndpoint, { method: "GET" });
//         console.log(res);
//         return await res.json();
//     } catch (error) {
//         console.log(error);
//     }
// };

// getPokemonType();

