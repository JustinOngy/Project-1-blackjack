# Project Overview: JUST WIN CASINO - Blackjack Game

# Introduction

Welcome to JUST WIN CASINO, where excitement awaits you, our latest addition to the gaming lineup is the thrilling Blackjack game, designed to provide an immersive and engaging experience right in your browser. This project is built using a combination of HTML, CSS, and JavaScript, with a primary focus on DOM manipulation for an interactive playthrough.

### Game:

<img width="1440" alt="Screenshot 2023-09-08 at 12 30 52 am" src="https://github.com/JustinOngy/Project-1-blackjack/assets/94582556/c5c9fd97-8d7e-4c45-8f78-91beb8ffc02c">

# Tech Stack Used

- HTML
- CSS
- JAVASCRIPT

# How to play

### Object of the Game

Each participant attempts to beat the dealer by getting a count as close to 21 as possible, without going over 21.

### Card Values/scoring

It is up to each individual player if an ace is worth 1 or 11. Face cards are 10 and any other card is its pip value.

### Betting

Before the deal begins, each player places a bet, in chips, in front of them in the designated area. There is no minimum, chips are $10 to $1000 with the maximum limits is to all-in.

### The Shuffle and Cut

This game plays with a deck of 52 cards, each each time a card is drawn by either player or dealer the cards are re-shuffled and taken out of the pile. This ensures no duplicate cards of same suit and rank. This continues until the card pile reaches 4 cards, then resets the deck.

### The Dealer's Play

When the dealer has served every player, the dealers face-down card is turned up. If the total is 17 or more, it must stand. If the total is 16 or under, they must take a card. The dealer must continue to take cards until the total is 17 or more, at which point the dealer must stand. If the dealer has an ace, and counting it as 11 would bring the total to 17 or more (but not over 21), the dealer must count the ace as 11 and stand. The dealer's decisions, then, are automatic on all plays, whereas the player always has the option of taking one or more cards.

# Link to game

https://justinongy.github.io/Project-1-blackjack/

# Screenshots

### Wireframe:

![Screenshot 2023-09-06 at 6 37 22 pm](https://github.com/JustinOngy/Project-1-blackjack/assets/94582556/77e0bbb9-bf61-4406-95ae-5e0469e48a51)

### Pseudocode flowchart:

<img width="784" alt="Screenshot 2023-09-08 at 10 33 29 am" src="https://github.com/JustinOngy/Project-1-blackjack/assets/94582556/95f560d0-4c10-48bf-a329-1b30fbc8fb1c">

# Challenges

During my time working on this project, I experienced difficulty with an abundance of code and a messy environment as I would just write code without keeping organized. This confused me and did slow me down as I thought some functions were doing something but they actually were even the right code. This made it very hard to find the code I was looking for so to fix this I organized my javascript code into categories, after spending the time to organize them, made me work a lot more efficiently and quicker.

More specific problems that I faced whilst programming this project was understanding the game logic behind blackjack and its rules. It's complex with the ace card holding two values depending on the cards in the hand, Despite being quite easy for humans to understand, this was a difficult concept to code. The solution to this was to keep the ace value as 11 and also keep track of the number of aces using a count. By using a for of loop, we are able to check the current card and iterate through the hand adding the values together. Then check the ace count, if the value of the cards is greater than 0 but more than 21, subtract 10 from the value.

# Take aways

- Keep a clean working environment, as it can save you time and headache

# Future plans

- Responsive mobile display
- Re-bet previous feature
- Highscore tracker
- Split hand feature
- Blackjack bonus
- Animations, sounds, UI improvements
