console.log("JS file is connected to HTML! Woo!")

//assigns and defines the cards
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

//conditions for matches
/*if (cardOne === cardTwo) {
	alert("You found a match!");
} else if (cardThree === cardFour) {
	alert("You found a match!")
} else {
	alert("Sorry, try again.")
};*/

//for loop to create the cards
var gameBoard = document.getElementById('game-board');

var createBoard = function () {
for(var i = 0; i < 4; i++) {
	var newCard = document.createElement('div');
	newCard.className = 'card';
	document.getElementsByClassName('board')[0].appendChild(newCard);
	}
};

createBoard();
