const Card = require('./Card');
class Deck {
  constructor(newCards) {
    this.cards = this.createCards(newCards);
  }

  countCards = () => {
    return this.cards.length
  }

  createCards = (cards) => {
    if (cards) {
      return cards.map(card => {
        return card instanceof Card ? card 
        : new Card(card.id, card.question, card.answers, card.correctAnswer)
      });
    } else {
      return []
    }
  }  
}

module.exports = Deck;