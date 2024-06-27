//Buscando elementos do objeto da requisição Fetch

//Criando a função assincrona
async function fetchPokemon(){
    try {
        const pokemonId = document.getElementById('pokemonID').value;
        const pokemonNome = document.getElementById('pokemonNome');
        const pokemonTipo = document.getElementById('pokemonType');

        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

        if(!resp.ok){
            throw new Error('Pokemon não encontrado');
        } else{
            const data = await resp.json();
            console.log(data);
            const imgElemento = document.getElementById('pokemonSprite');
            const pokemonSprite = data.sprites.front_default;
            const pokemonNomeData = data.name;
            const pokemonTipoData = data.types[0].type.name;

            imgElemento.src = pokemonSprite
            imgElemento.style.display = 'block';
            pokemonNome.innerHTML = pokemonNomeData;
            pokemonTipo.innerHTML = pokemonTipoData;
        }

    } catch (error) {
        console.error(error);
    }
}