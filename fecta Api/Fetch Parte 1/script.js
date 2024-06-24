//Fetch Teste 01 Estudando as Primises

//const req = fetch ('https://pokeapi.co/api/v2/pokemon/pikachu');
//console.log(req);

//Fetch Teste 02 Resolvendo a Promise
//fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//          .then(resp => console.log(resp))
//          .catch(error => console.log(error));

//Fetch Teste 03 Convertendo a resposta em JSON
//fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//    .then(resp => resp.json())
//   .then(data => console.log(data))
//    .catch(error => console.log(error))

//Fetch Teste 04 Acessando Informações via ID
//Fetch('https://pokeapi.co/api/v2/pokemon/pikachu1')
//    .then(resp => resp.json())
//    .then(data => console.log(data))
//    .catch(error => console.log(error));

//Fetch Teste 05 Ultilizando o try catch
async function fetchPokemon(){
    try{
        const rep = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
           if(!resp.ok){
            throw new Error('Pokemon não encontrado');
           } else {
            const data = await resp.json();
            console.log(data);
           }
    } catch (error) {
        console.log(error);
    }
}   

fetchPokemon();
