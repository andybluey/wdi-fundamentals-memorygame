console.log("JS file is connected to HTML! Woo!")
// represents cards
var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];
// function to create board
function createBoard() {
// find the board and set it to variable
var board = document.getElementById('game-board')[0];
	
	// loop through cards array
	for (var i = 0; i < cards.length; i++) {
	//create a div element which will be used as a card
	var cardElement = document.createElement ('div');
	//add a class to card element
	cardElement.className = 'card';
	//set cards attribute
	cardElement.setAttribute('data-card', cards [i]);
	//when clicked, execute isTwoCards
	cardElement.addEventListener('click', isTwoCards);
	// append card to board
	board.appendChild (cardElement);
	}
}
// checks for two cards
function isTwoCards () {
	//add card to array of cards in play
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	//if two cards in play check for a match
	if (cardsInPlay.length === 'king') {
		this.innerHTML = '<img src="King.jpg" alt="king" />';
	} else {
		this.innerHTML = '<img src="Queen.jpg" alt="queen" />';
	}	
		// if you have two cards in play check for a match
		if (cardsInPlay.length === 2) {
		//pass the cardsInPlay as an argument to isMatch
		isMatch (cardsInPlay);
		//clear cards in play array for next try
		cardsInPlay = [];
	}
}
function isMatch(cards) {
	if (cards [0] === cards[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");	
		}
	}

