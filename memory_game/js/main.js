console.log("Up and running!");
var cards = ["king", "queen", "king", "queen"];

var cardsInPlay = [];
var cardId = [];

function checkForMatch() {if 
(cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}}

function flipCard(cardId) {
    cardsInPlay.push(cards[cardId]);
console.log("User flipped " + cards[cardId]);}

flipCard(0);
flipCard(1);
checkForMatch();	
