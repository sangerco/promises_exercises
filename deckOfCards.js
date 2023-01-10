const baseURL = 'https://deckofcardsapi.com/api/deck/'

    function singleCard() {
        axios.get(`${baseURL}/new/draw`)
            .then(cards => {
                for (let card of cards.data.cards) {
                console.log(`${card.value} of ${card.suit}`);
                }
            })
    }

    function twoCards() {
        let first;
        let second;
        axios.get(`${baseURL}/new/draw`)
            .then(cards => {
                first = cards.data.cards[0];
                return axios.get(`${baseURL}${cards.data.deck_id}/draw`)
            })
            .then(newCards => {
                second = newCards.data.cards[0];
                console.log(`${first.value} of ${first.suit}, ${second.value} of ${second.suit}`)
            })
            .catch(err => console.log(err))
    }

$( document ).ready(function() {

    let cardGoesHere = document.getElementById('card-goes-here')
    let $newCard = $('#new-card')


    let deckId = null;
    axios.get(`${baseURL}new/shuffle/`)
        .then(res => {
            deckId = res.data.deck_id;
        });

    $newCard.on('click', function() {
        axios.get(`${baseURL}/${deckId}/draw/`)
            .then(res => {
                console.log(res.data)
                cardGoesHere.innerHTML = `<img src=${res.data.cards[0].image}>`

            })

        })


});
