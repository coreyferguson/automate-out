
const Iron = require('./Iron');

class IronService {

  constructor() {
    this.reset();
  }

  reset() {
    this.irons = [];
    this.maxMassProgressBarWidth = 50;
  }

  spawn(x, y, mass) {
    const iron = new Iron(x, y, mass);
    this.irons.push(iron);
  }

  updateProgressBars() {
    this.irons.forEach(iron => {
      iron.massProgressBar.x = iron.sprite.x-iron.sprite.width/2;
      iron.massProgressBar.y = iron.sprite.y-iron.sprite.height/2-20;
      iron.massProgressBar.width=
        iron.mass * this.maxMassProgressBarWidth / iron.massCapacity;
    });
  }

}

module.exports = new IronService();
