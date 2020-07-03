const data = require('./data');
const util = require('./util');
const Round = require('./Round');
const Deck = require('./Deck');


class Game {
  constructor() {}

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start = (cards) => {
    this.newRound(cards);
    this.printMessage(this.deck);
    this.printQuestion(this.currentRound)
  }
  

  
  newRound = (cards) =>  {
    this.deck = new Deck(cards); 
    this.currentRound = new Round(this.deck)
  }
}

module.exports = Game;