console.log("Up and running!");
var cards = ["king", "queen", "king", "queen"];
cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped a " + cardOne + "!");
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped a " + cardTwo + "!");
if (cardsInPlay.length === 2) 
if (cardsInPlay[0] === cardsInPlay[1]) 
{console.log("You've found a match!");} 
else if (cardsInPlay[0] !== cardsInPlay[1])
{console.log("Sorry, try again.");}