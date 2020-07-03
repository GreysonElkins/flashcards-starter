const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', () => {
  var card;
  beforeEach(() => {
    card = new Card(1, 
      'What allows you to define a set of related ' +  
      'information using key-value pairs?', 
      ['object', 'array', 'function'], 
      'object');
  });
  it('should be a function', () => {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    expect(card).to.be.an.instanceof(Card);
  }); 

  it('should store a question', () => {
    expect(card.question).to.equal('What ' +
    'allows you to define a set of related information using key-value pairs?');
  });  

  it('should store a list of possible answers', () => {
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it('should store the correct answer', () => {
    expect(card.correctAnswer).to.equal('object');
  });
  it('should have an id', () => {
    expect(card.id).to.equal(1);
  });

  it('should be able to store different, ids, questions and answers', () => {
    const card2 = new Card(2, 'how\'s my hair today?', ['good', 'bad'], 'good');
    expect(card2.id).to.equal(2);
    expect(card2.question).to.equal('how\'s my hair today?');
    expect(card2.answers).to.deep.equal(['good', 'bad']);
    expect(card2.correctAnswer).to.equal('good');
  })
});