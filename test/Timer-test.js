const chai = require('chai');
const expect = chai.expect;

const Timer = require('../src/Timer');

describe('Timer', () => {
  it('should store the time it was instantiated', () => {
    const time = Date.now();
    const timer = new Timer();
    expect(timer.startTime).to.equal(time);
  });

  it('should be able to save a stop time', () => {
    const timer = new Timer();
    timer.stop();
    const time = Date.now();
    expect(timer.stopTime).to.equal(time);
  });

  it('should be able to calculate the difference ' +
  'between the start and stop time', () => {
    const timer = new Timer();
    timer.startTime = 1593736186337;
    timer.stopTime = 1593736267577;
    const difference = timer.calculateTimePassed();
    expect(difference).to.equal(81240);
  });
  it('should return a message if the timer is running when calculated', () => {
    const timer = new Timer();
    const difference = timer.calculateTimePassed();
    expect(difference).to.equal('timer is still running')
  });
  it('should be able to return the time in a standard format', () => {
    const timer = new Timer();
    timer.startTime = 1593736186337;
    timer.stopTime = 1593736267577;
    result = timer.getTimePassed();
    expect(result).to.equal(`1 minute and 21 seconds`)
  });
});