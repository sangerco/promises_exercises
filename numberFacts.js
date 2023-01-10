const baseURL = 'http://numbersapi.com'

const randomFact = document.getElementById('randomFact')
const moreRandomFacts = document.getElementById('moreRandomFacts')
const fourFacts = document.getElementById('fourFacts')

function numberFact(num) {
    axios.get(`${baseURL}/${num}?json`)
        .then(res => {
            randomFact.innerText = res.data.text
        })
        .catch(err => {
            randomFact.innerText = err
        })
}

function moreNumberFacts(nums) {
    let numsArr = [];
    for (let i = 0; i < nums.length; i++) {
        numsArr.push(
            axios.get(`${baseURL}/${nums[i]}?json`)
        );
    }
    Promise.all(numsArr)
        .then(res => (
            res.forEach(
                n => moreRandomFacts.innerHTML += `<li>${n.data.text}</li>`
            ))
        )
        .catch(err => {
            moreRandomFacts.innerHTML = `<li>${err}</li>`
        })
}

function fourMoreFacts(num) {
    axios.get(`${baseURL}/${num}?json`)
        .then(res => {
            fourFacts.innerHTML += `<li>${res.data.text}</li>`
            return axios.get(`${baseURL}/${num}?json`)
        })
        .then(res => {
            fourFacts.innerHTML += `<li>${res.data.text}</li>`
            return axios.get(`${baseURL}/${num}?json`)
        })
        .then(res => {
            fourFacts.innerHTML += `<li>${res.data.text}</li>`
            return axios.get(`${baseURL}/${num}?json`)
        })
        .then(res => {
            fourFacts.innerHTML += `<li>${res.data.text}</li>`
        })
        .catch(err => {
            fourFacts.innerHTML = `<li>${err}</li>`
        })
}