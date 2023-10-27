let cards = []
let sum = 0;
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let isAlive = false
let hasBlackJack = false
function startGame() {
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    isAlive = true;
    hasBlackJack = false;
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        messageEl.textContent = "Do you want to draw a new card?";
    } else if (sum === 21) {
        messageEl.textContent = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        messageEl.textContent = "You're out of the game!";
        isAlive = false;
    }

    let rewardEl = document.getElementById("reward-el")
    if(hasBlackJack === true){
        rewardEl.textContent = "Your Reward: $100"
    }else if(isAlive === false){
        rewardEl.textContent = "Your Reward: $0"
    }
}

function newCard() {
    if(isAlive === true && hasBlackJack === false)
    {
        let card = randomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function randomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber === 1){
        return 11
    }else if(randomNumber > 10){
        return 10
    }else {
        return randomNumber
    }
}


