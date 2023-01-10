const baseURL = 'https://pokeapi.co/api/v2/pokemon/'

function getPokemon() {
    axios.get(`${baseURL}?offset=null&limit=1154`)
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

function randomThreePokemon() {
    let first;
    let second;
    let third;

    let randomOne = Math.floor(Math.random() * 1154)
    let randomTwo = Math.floor(Math.random() * 1154)
    let randomThree = Math.floor(Math.random() * 1154)

    axios.get(`${baseURL}${randomOne}/`)
        .then(res => {
            first = res.data;
            return axios.get(`${baseURL}${randomTwo}/`);
        })
        .then(res => {
            second = res.data;
            return axios.get(`${baseURL}${randomThree}/`);
        })
        .then(res => {
            third = res.data;
            console.log(first);
            console.log(second);
            console.log(third)
        })
}

function randomThreePokemonDesc() {
    let firstName;
    let secondName;
    let thirdName;

    let firstFlavor;
    let secondFlavor;
    let thirdFlavor;

    let randomOne = Math.floor(Math.random() * 1154)
    let randomTwo = Math.floor(Math.random() * 1154)
    let randomThree = Math.floor(Math.random() * 1154)

    axios.get(`${baseURL}${randomOne}/`)
        .then(res => {
            firstName = res.data.name;
            firstSpeciesURL = res.data.species.url
                axios.get(`${firstSpeciesURL}`)
                    .then(spec => {
                        for (let i = 0; i > spec.data.flavor_text_entries; i++) {
                            if (spec.data.flavor_text_entries[i].language === "en") {
                                    firstFlavor = spec.data.flavor_text_entries[i].description;
                                    break
                            }
                        }
                    })
            return axios.get(`${baseURL}${randomTwo}/`);
        })
        .then(res => {
            secondName = res.data.name;
            secondSpeciesURL = res.data.species.url
                axios.get(`${secondSpeciesURL}`)
                    .then(spec => {
                        for (let i = 0; i > spec.data.flavor_text_entries; i++) {
                            if (spec.data.flavor_text_entries[i].language === "en") {
                                    secondFlavor = spec.data.flavor_text_entries[i].description;
                                    break
                            }
                        }
                    })
            return axios.get(`${baseURL}${randomThree}/`);
        })
        .then(res => {
            thirdName = res.data.name;
            thirdSpeciesURL = res.data.species.url
                axios.get(`${thirdSpeciesURL}`)
                    .then(spec => {
                        for (let i = 0; i > spec.data.flavor_text_entries; i++) {
                            if (spec.data.flavor_text_entries[i].language === "en") {
                                    thirdFlavor = spec.data.flavor_text_entries[i].description;
                                    break
                            }
                        }
                    })
            console.log(`${firstName}: ${firstFlavor}`);
            console.log(`${secondName}: ${secondFlavor}`);
            console.log(`${thirdName}: ${thirdFlavor}`)
        })
}