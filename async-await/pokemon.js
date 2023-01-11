const baseURL = 'https://pokeapi.co/api/v2/pokemon/'

async function getPokemon() {
    let pokemon = await axios.get(`${baseURL}?offset=null&limit=1154`)
    console.log(pokemon)
}

async function threeRandomPokemon() {
    let randomOne = Math.floor(Math.random() * 1154);
    let randomTwo = Math.floor(Math.random() * 1154);
    let randomThree = Math.floor(Math.random() * 1154);

    let firstPokemon = await axios.get(`${baseURL}${randomOne}/`);
    let secondPokemon = await axios.get(`${baseURL}${randomTwo}/`);
    let thirdPokemon = await axios.get(`${baseURL}${randomThree}/`);

    console.log(firstPokemon.data);
    console.log(secondPokemon.data);
    console.log(thirdPokemon.data);
}

async function threeRandomPokemonDesc() {
    let randomOne = Math.floor(Math.random() * 1000);
    let randomTwo = Math.floor(Math.random() * 1000);
    let randomThree = Math.floor(Math.random() * 1000);

    let firstPokemon = await axios.get(`${baseURL}${randomOne}/`);
    let secondPokemon = await axios.get(`${baseURL}${randomTwo}/`);
    let thirdPokemon = await axios.get(`${baseURL}${randomThree}/`);

    let firstName = firstPokemon.data.name;
    let secondName = secondPokemon.data.name;
    let thirdName = thirdPokemon.data.name;

    let firstSpeciesURL = firstPokemon.data.species.url
    let secondSpeciesURL = secondPokemon.data.species.url
    let thirdSpeciesURL = thirdPokemon.data.species.url

    let firstSpecies = await axios.get(`${firstSpeciesURL}`);
    let secondSpecies = await axios.get(`${secondSpeciesURL}`);
    let thirdSpecies = await axios.get(`${thirdSpeciesURL}`);

    let firstFlavorArr = firstSpecies.data.flavor_text_entries;
    let secondFlavorArr = secondSpecies.data.flavor_text_entries;
    let thirdFlavorArr = thirdSpecies.data.flavor_text_entries;

    let firstFlavorDesc = firstFlavorArr[0].flavor_text;
    let secondFlavorDesc = secondFlavorArr[0].flavor_text;
    let thirdFlavorDesc = thirdFlavorArr[0].flavor_text;

    console.log(`${firstName}: ${firstFlavorDesc}`);
    console.log(`${secondName}: ${secondFlavorDesc}`);
    console.log(`${thirdName}: ${thirdFlavorDesc}`);
}