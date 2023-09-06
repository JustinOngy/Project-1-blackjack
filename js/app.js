// Setting up global variables

let userTotal = 0;
let computerTotal = 0;
let currentBalance = 1000;
let betAmount = 0;
let potentialWinning = 0;
let userArray = [];
let computerArray = [];

// Function
buildOriginalDeck();
getNewShuffledDeck();
renderDeckInContainer();

chooseBetAmount();
displayPotentialWinning();

dealTwoCardsToPlayer();
dealTwoCardsToComputer();
