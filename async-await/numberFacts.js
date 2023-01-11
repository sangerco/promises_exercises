const baseURL = 'http://numbersapi.com'

const randomFact = document.getElementById('randomFact')
const moreRandomFacts = document.getElementById('moreRandomFacts')
const fourFacts = document.getElementById('fourFacts')

async function numberFact(num) {
    let fact = await axios.get(`${baseURL}/${num}?json`);
    randomFact.innerText = fact.data.text;
}

async function moreNumberFacts(nums) {
    for (let i = 0; i < nums.length; i++) {
        let fact = await axios.get(`${baseURL}/${nums[i]}?json`);
        moreRandomFacts.innerHTML += `<li>${fact.data.text}</li>`;
    }
}

async function fourMoreFacts(num) {
    let fact1 = axios.get(`${baseURL}/${num}?json`);
    let fact2 = axios.get(`${baseURL}/${num}?json`);
    let fact3 = axios.get(`${baseURL}/${num}?json`);
    let fact4 = axios.get(`${baseURL}/${num}?json`);

    let f1 = await fact1;
    let f2 = await fact2;
    let f3 = await fact3;
    let f4 = await fact4;

    fourFacts.innerHTML += `<li>${f1.data.text}</li>`;
    fourFacts.innerHTML += `<li>${f2.data.text}</li>`;
    fourFacts.innerHTML += `<li>${f3.data.text}</li>`;
    fourFacts.innerHTML += `<li>${f4.data.text}</li>`;
}