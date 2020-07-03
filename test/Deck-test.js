const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
  var cards;
  beforeEach(() => {
    cards = [
      new Card(
        1, 
        "How do you fly?", 
        ["you don't", "you flap your arms", "you steal an airplane"], 
        "you don't"
      ),
      new Card(
        2, 
        "Can I eat a hotdog?", 
        ["Yes", "No", "You can eat several"], 
        "You can eat several"
      ),
      new Card(
        3, 
        "Dogs or cats?", 
        ["dogs", "cats", "robots"], 
        "robots"
      ),
    ];
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should instantiate a new deck', () => {
    const deck = new Deck();
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should be initialized with an array of cards', () => {
    const deck = new Deck(cards);
    expect(deck.cards).to.deep.equal(cards);
  });

  it('should know how many cards it has, even if it has none', () => {
    const deck = new Deck();
    const cardCount = deck.countCards()
    expect(cardCount).to.equal(0);

    const deck2 = new Deck(cards);
    const cardCount2 = deck2.countCards()
    expect(cardCount2).to.equal(3);
  });

  it('can create Card objects from objects not' + 
  'defined with the card class', () => {
    const pile = [{
      id: 1,
      question: "How do you fly?",
      answers: ["you don't", "you flap your arms", "you steal an airplane"],
      correctAnswer: "you don't"
    }, {
      id: 2,
      question: "Can I eat a hotdog?",
      answers: ["Yes", "No", "You can eat several"],
      correctAnswer: "You can eat several"
    }];
    
    const deck = new Deck(pile);
    expect(deck.cards[0]).to.deep.equal(cards[0]);
    expect(deck.cards[0]).to.be.an.instanceOf(Card);
    expect(deck.cards[1]).to.deep.equal(cards[1]);
    expect(deck.cards[1]).to.be.an.instanceOf(Card);
  });
});