//=====================================================================
// ================  Setting up global variables ======================
//=====================================================================
let userTotal = 0;
let computerTotal = 0;
let potentialWinning = 0;
let userAce = 0;
let computerAce = 0;
let userArray = [];
let computerArray = [];
let gameOver = false;
let disableButton = false;

//=====================================================================
// ================    DOM Query Selectors       ======================
//=====================================================================
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
const sidebar = document.querySelector(".sidebar");

const helpButton = document.querySelector(".help-link");
const leaveButton = document.querySelector(".leave-link");

const dealButton = document.querySelector(".deal-button");
const hitButton = document.querySelector(".hit-button");
const standButton = document.querySelector(".stand-button");
const actionButtons = document.querySelector(".action-buttons");

const dealerProfileImage = document.querySelector(".dealer-image");

const totalsVisable = document.querySelector(".totals");
const computerHandTotal = document.querySelector(".computer-hand-total");
const userHandTotal = document.querySelector(".user-hand-total");
const endGameMessage = document.querySelector(".end-game-message");

//=====================================================================
// ================ CSS CARD LIBRARY - Function Build Deck ============
//=====================================================================
const suits = ["s", "c", "d", "h"];
const ranks = [
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "J",
  "Q",
  "K",
  "A",
];
const originalDeck = buildOriginalDeck();
renderDeckInContainer(
  originalDeck,
  document.getElementById("original-deck-container")
);
let shuffledDeck;
const shuffledContainer = document.getElementById("shuffled-deck-container");
function getNewShuffledDeck() {
  const tempDeck = [...originalDeck];
  const newShuffledDeck = [];
  while (tempDeck.length) {
    const rndIdx = Math.floor(Math.random() * tempDeck.length);
    newShuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  return newShuffledDeck;
}
function renderNewShuffledDeck() {
  shuffledDeck = getNewShuffledDeck();
  renderDeckInContainer(shuffledDeck, shuffledContainer);
}
function renderDeckInContainer(deck, container) {
  //   container.innerHTML = "";
  // Let's build the cards as a string of HTML
  //   let cardsHtml = "";
  //   deck.forEach(function (card) {
  //     cardsHtml += `<div class="card ${card.face}"></div>`;
  //   });
  // Or, use reduce to 'reduce' the array into a single thing - in this case a string of HTML markup
  // const cardsHtml = deck.reduce(function(html, card) {
  //   return html + `<div class="card ${card.face}"></div>`;
  // }, '');
  //   container.innerHTML = cardsHtml;
}
function buildOriginalDeck() {
  const deck = [];
  suits.forEach(function (suit) {
    ranks.forEach(function (rank) {
      deck.push({
        face: `${suit}${rank}`,
        value: Number(rank) || (rank === "A" ? 11 : 10),
      });
    });
  });
  return deck;
}
renderNewShuffledDeck();
//=====================================================================
// ================  Game Functions      ==============================
//=====================================================================

function dealStartingCards() {
  userArray = [];
  computerArray = [];
  gameOver = false;
  endGameMessage.innerText = "";
  if (shuffledDeck.length < 4) {
    renderNewShuffledDeck();
  }
  userArray.push(shuffledDeck.pop(), shuffledDeck.pop());
  computerArray.push(shuffledDeck.pop(), shuffledDeck.pop());
  calculateValues();
  totalsVisable.style.visibility = "visible";
  actionButtons.style.visibility = "visible";
  sidebar.style.visibility = "hidden";
  computerHandTotal.innerText = computerTotal;
  userHandTotal.innerText = userTotal;
  renderHands();
}

function calculateValues() {
  userTotal = calculateValue(userArray);
  computerTotal = calculateValue(computerArray);
}

function calculateValue(hand) {
  let value = 0;
  let aces = 0;
  for (let card of hand) {
    value += card.value;
    if (card.value === 11) aces++;
  }
  while (aces > 0 && hand.length > 2) {
    value -= 10;
    aces--;
  }
  return value;
}
function renderHands() {
  renderHand(userArray, "user-hand-container");

  const computerHandContainer = document.getElementById(
    "computer-hand-container"
  );
  const computerHandHtml = `<div class="card large ${computerArray[0].face}"></div>`;
  const secondCardHtml = `<div class="card large back-red"></div>`;

  computerHandContainer.innerHTML = computerHandHtml + secondCardHtml;
  computerHandTotal.innerText = computerArray[0].value;
}

function renderHand(hand, containerId) {
  let handHtml = "";
  hand.forEach(function (card) {
    handHtml += `<div class="card large ${card.face}"></div>`;
  });
  document.getElementById(containerId).innerHTML = handHtml;
}

function userHit() {
  if (!gameOver && userArray.length >= 2 && userTotal < 21) {
    userArray.push(shuffledDeck.pop());
    calculateValues();
    renderHands();
    userHandTotal.innerText = userTotal;
    if (userTotal > 21) {
      endGame();
      computerHandTotal.innerText = computerTotal;
    }
    computerHandTotal.innerText = computerTotal;
    userHandTotal.innerText = userTotal;
  }
}

function userStand() {
  if (!gameOver && userArray.length >= 2) {
    while (computerTotal < 17) {
      computerArray.push(shuffledDeck.pop());
      calculateValues();
      renderHands();
      computerHandTotal.innerText = computerTotal;
      userHandTotal.innerText = userTotal;
    }
    computerHandTotal.innerText = computerTotal;
    userHandTotal.innerText = userTotal;
    endGame();
  }
}

function endGame() {
  renderHand(computerArray, "computer-hand-container");
  gameOver = true;
  sidebar.style.visibility = "visible";
  actionButtons.style.visibility = "hidden";

  if ((userTotal > computerTotal && userTotal <= 21) || computerTotal > 21) {
    startingBalance += betAmount * 2;
    updateBalanceAndWager();
    endGameMessage.innerHTML = `Congratulations you won <span class="green-text">${betAmount}</span> !!`;
    betAmount = 0;
  } else if (userTotal < computerTotal || userTotal > 21) {
    betAmount = 0;
    updateBalanceAndWager();
    endGameMessage.innerHTML = `<span class="red-text">You lose, better luck next time!</span>`;
  } else {
    startingBalance += betAmount;
    betAmount = 0;
    updateBalanceAndWager();
    endGameMessage.innerText = "It was a tie";
  }
}

function helpInfo() {
  alert(
    "The rules of blackjack are simple. You are dealt cards, which have the face value shown on them. You need to get a hand with a score of as close to 21 as possible, without going over it. Go over 21 and you're out."
  );
}

function leaveOption() {
  alert("Leave? ... there is no leaving lol ");
}

// dealerProfileImage.addEventListener("click", )

// function checkForBlackjack() {}

//=====================================================================
// ================      Action buttons          ======================
//=====================================================================

dealButton.addEventListener("click", dealStartingCards);
hitButton.addEventListener("click", userHit);
standButton.addEventListener("click", userStand);
helpButton.addEventListener("click", helpInfo);
leaveButton.addEventListener("click", leaveOption);

//=====================================================================
// ================      Beginning balance       ======================
//=====================================================================

let startingBalance = 10000;
let betAmount = 0;
currentBalance.innerHTML = startingBalance;
wagerAmount.innerHTML = betAmount;

function updateBalanceAndWager() {
  currentBalance.innerHTML = startingBalance;
  wagerAmount.innerHTML = betAmount;
}
//=====================================================================
// ================       Wager bets             ======================
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
