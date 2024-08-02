
let Cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
//console.log(sum)
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
//created object 
let player = {
  name: "Per",
  chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// Create a function, getRandomCard(), that always returns the number 5
// Make this function return a random number between 1 and 13
function getRandomCard() {
   // if 1  -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  Cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame();
}
function renderGame() {
  //render out firstCard and secondCard
  cardsEl.textContent = "Cards :";
  for (i = 0; i < Cards.length; i++) {
    cardsEl.textContent += Cards[i] + "-";
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    //hasBlackJack = true;
    isAlive = false;
  }
  messageEl.textContent = message;
  // render out ALL the cards we have
  sumEl.textContent = "Sum :" + sum;
  //console.log(hasBlackJack)
  //console.log(isAlive);
  //console.log(message)
}

function newCard() {
  // Only allow the player to get a new card if he/she IS alive and does NOT have Blackjack
  if(isAlive === true && hasBlackJack === false){
  let newCards = getRandomCard();
  sum += newCards;
  Cards.push(newCards);  //push new card in array
  renderGame();
  }
}
