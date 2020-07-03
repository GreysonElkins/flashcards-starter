class Timer {
  constructor() {
    this.startTime = Date.now();
  }
  stop = () => {
    this.stopTime = Date.now();
  }
  calculateTimePassed = () => {
    return this.stopTime ? this.stopTime - this.startTime : 'timer is still running';
  }
  getTimePassed = () => {
    const seconds = Math.trunc(this.calculateTimePassed() / 1000);
    return seconds < 60 ? `${seconds} seconds` 
    : this.minutesCalculator(seconds);   
  }
  minutesCalculator(seconds) {
    const minuteWord = seconds > 120 ? `minutes` : 'minute';
    const leftOverSeconds = seconds % 60;
    const secondWord = leftOverSeconds == 1 ? `second` : 'seconds';
    const minutes = (seconds - leftOverSeconds) / 60;
    return `${minutes} ${minuteWord} and ${leftOverSeconds} ${secondWord}`;
  }

}

module.exports = Timer;