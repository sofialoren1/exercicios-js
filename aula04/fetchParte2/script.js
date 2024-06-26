//percorrendo os 100 primeiros Pokemons

const fetchPokemon = async() =>{
    for(let i=1; i <= 100; i++){
        await getPokemons(i);
    }
}

const getPokemons = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.name);
}

fetchPokemon();