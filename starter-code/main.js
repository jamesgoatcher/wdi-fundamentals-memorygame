console.log("JS file is connected to HTML");

//World variables defined
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');


//Function to check for a match
var isMatch = function() {
    if (cardsInPlay[0] == cardsInPlay[1]) {
	alert('You found a match!');	
    } else {
	alert('Sorry, try again.');
    }
    //location.reload();
    setTimeout(window.location.reload.bind(window.location), 1200);
};


//Function to push active cards into empty array
var isTwoCards = function(event) {
	flipCard(event.target);
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
};

//Function to flip cards
function flipCard(card) {
	if (card.getAttribute('data-card') === 'king') {
    card.innerHTML = '<img src = "king-mew.png" alt = "King of Pokemon"/>';
	} else {
	card.innerHTML = '<img src = "queen-psy.jpg" alt = "Queen of Pokemon"/>';
	}
}

//Set up the gameboard through DOM manipulation
for(var i = 0; i < cards.length; i++) {
	var newCard = document.createElement('div');
	newCard.className = 'card';
	newCard.setAttribute('data-card', cards[i]);
	gameBoard.appendChild(newCard);

	newCard.addEventListener('click', isTwoCards);
}