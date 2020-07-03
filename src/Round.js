const Turn = require('./Turn');
const data = require('./data');
const Timer = require('./Timer');
class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = deck ? deck.cards[this.turns] : undefined; 
    this.incorrectGuesses = [];
    this.timer = new Timer;
  }

  returnCurrentCard = () => {
    return this.currentCard
  } 

  takeTurn = (response) => {
    this.turns += 1;
    const turn = new Turn(response, this.currentCard);
    turn.evaluateGuess() ? () => {} : this.incorrectQuestions(this.currentCard);
    const result = this.currentCard ? turn.giveFeedback() : undefined;
    this.currentCard = this.deck.cards[this.turns];
    return result
  }

  incorrectQuestions(currentCard) {
    this.incorrectGuesses.push(currentCard.id);
  }

  calculatePercentCorrect = () => {
    return Math.floor((this.deck.cards.length - this.incorrectGuesses.length) / this.deck.cards.length * 100);
  }

  endRound = () => {
    this.timer.stop();
    return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly in ${this.timer.getTimePassed()}!`;
  }
}

module.exports = Round;