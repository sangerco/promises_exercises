const baseURL = 'https://deckofcardsapi.com/api/deck/'

async function singleCard() {
    let card = await axios.get(`${baseURL}/new/draw`)
    console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`)
}

async function twoCards() {
    let first = await axios.get(`${baseURL}/new/draw`);
    let firstCard = first.data.cards[0];
    let deck_id = first.data.deck_id;

    let second = await axios.get(`${baseURL}${deck_id}/draw`);
    let secondCard = second.data.cards[0];

    console.log(`${firstCard.value} of ${firstCard.suit}, ${secondCard.value} of ${secondCard.suit}`);
}


$( document ).ready(async function() {
    let cardGoesHere = document.getElementById('card-goes-here');
    let $newCard = $('#new-card');

    let deck = await axios.get(`${baseURL}new/shuffle/`);
    let deckId = deck.data.deck_id;

    $newCard.on('click', async function() {
        let card = await axios.get(`${baseURL}${deckId}/draw/`);
        cardGoesHere.innerHTML = `<img src=${card.data.cards[0].image}>`
    })

});

