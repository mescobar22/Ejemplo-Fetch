pokemonList();
function pokemonList() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            data.results.forEach(pokemon => {
                let PokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
                console.log(PokemonName);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
    console.log(" ")    
}

// Fetch de un Pokémon específico (por ejemplo, Pikachu)
function PokemonInfo(pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            // Nombre
            let PokemonName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            console.log(`Nombre: ${PokemonName}`);
            
            // Tipo(s)
            let types = data.types.map(typeInfo => typeInfo.type.name).join(', ');
            console.log(`Tipo(s): ${types}`);
            
            // Habilidades
            let abilities = data.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');
            console.log(`Habilidades: ${abilities}`);
            
            // Stats
            console.log('Stats:');
            data.stats.forEach(stat => {
                console.log(`- ${stat.stat.name}: ${stat.base_stat}`);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Llamar a la función para obtener la lista de Pokémon
pokemonList();


// Llamar a la función para obtener la información de un Pokémon específico
PokemonInfo("mewtwo");  // Cambia "pikachu" por el nombre del Pokémon que desees
