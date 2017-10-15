
const Energy = require('./Energy');

class EnergyService {

  constructor() {
    this.reset();
  }

  reset() {
    this.energies = [];
  }

  spawn(x, y, mass) {
    const energy = new Energy(x, y, mass);
    this.energies.push(energy);
  }

}

module.exports = new EnergyService();
