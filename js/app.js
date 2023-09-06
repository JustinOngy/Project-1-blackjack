// Setting up global variables

let userTotal = 0;
let computerTotal = 0;
let potentialWinning = 0;
let userArray = [];
let computerArray = [];

//Select Bets
const bet10 = document.querySelector(".bet-10");
const bet50 = document.querySelector(".bet-50");
const bet100 = document.querySelector(".bet-100");
const bet500 = document.querySelector(".bet-500");
const bet1000 = document.querySelector(".bet-1000");
const betAll = document.querySelector(".bet-all");
const removeBet10 = document.querySelector(".remove-bet-10");
const removeBet50 = document.querySelector(".remove-bet-50");
const removeBet100 = document.querySelector(".remove-bet-100");
const removeBet500 = document.querySelector(".remove-bet-500");
const removeBet1000 = document.querySelector(".remove-bet-1000");
const removeBetAll = document.querySelector(".remove-bet-all");

const currentBalance = document.querySelector(".balance-amount");
const wagerAmount = document.querySelector(".wager-pot");

const dealButton = document.querySelector(".deal-button");
const hitButton = document.querySelector(".hit-button");
const standButton = document.querySelector(".stand-button");

const computerHandTotal = document.querySelector(".computer-hand-total");
const userHandTotal = document.querySelector(".user-hand-total");



// Beginning balance
let startingBalance = 1000;
let betAmount = 0;
currentBalance.innerHTML = startingBalance;
wagerAmount.innerHTML = betAmount;

//Bet amount display
function updateBalanceAndWager() {
  currentBalance.innerHTML = startingBalance;
  wagerAmount.innerHTML = betAmount;
}
//=====================================================================
// ================         Add bets             ======================
//=====================================================================

bet10.addEventListener("click", () => {
  if (startingBalance >= 10) {
    betAmount += 10;
    startingBalance -= 10;
    updateBalanceAndWager();
  }
});

bet50.addEventListener("click", () => {
  if (startingBalance >= 50) {
    betAmount += 50;
    startingBalance -= 50;
    updateBalanceAndWager();
  }
});

bet100.addEventListener("click", () => {
  if (startingBalance >= 100) {
    betAmount += 100;
    startingBalance -= 100;
    updateBalanceAndWager();
  }
});

bet500.addEventListener("click", () => {
  if (startingBalance >= 500) {
    betAmount += 500;
    startingBalance -= 500;
    updateBalanceAndWager();
  }
});

bet1000.addEventListener("click", () => {
  if (startingBalance >= 1000) {
    betAmount += 1000;
    startingBalance -= 1000;
    updateBalanceAndWager();
  }
});
betAll.addEventListener("click", () => {
  if (startingBalance > 0) {
    betAmount += startingBalance;
    startingBalance = 0;
    updateBalanceAndWager();
  }
});

//=====================================================================
// ================      Remove bets             ======================
//=====================================================================

removeBet10.addEventListener("click", () => {
  if (betAmount >= 10) {
    startingBalance += 10;
    betAmount -= 10;
    updateBalanceAndWager();
  }
});

removeBet50.addEventListener("click", () => {
  if (betAmount >= 50) {
    startingBalance += 50;
    betAmount -= 50;
    updateBalanceAndWager();
  }
});

removeBet100.addEventListener("click", () => {
  if (betAmount >= 100) {
    startingBalance += 100;
    betAmount -= 100;
    updateBalanceAndWager();
  }
});

removeBet500.addEventListener("click", () => {
  if (betAmount >= 500) {
    startingBalance += 500;
    betAmount -= 500;
    updateBalanceAndWager();
  }
});

removeBet1000.addEventListener("click", () => {
  if (betAmount >= 1000) {
    startingBalance += 1000;
    betAmount -= 1000;
    updateBalanceAndWager();
  }
});

removeBetAll.addEventListener("click", () => {
  if (betAmount > 0) {
    startingBalance += betAmount;
    betAmount = 0;
    updateBalanceAndWager();
  }
});

// Function
// buildOriginalDeck();
// getNewShuffledDeck();
// renderDeckInContainer();

// chooseBetAmount();
// displayPotentialWinning();

// dealTwoCardsToPlayer();
// dealTwoCardsToComputer();
