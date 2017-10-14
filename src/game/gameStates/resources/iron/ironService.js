
const Iron = require('./Iron');

class IronService {

  constructor() {
    this.reset();
  }

  reset() {
    this.irons = [];
  }

  spawn(x, y, mass) {
    const iron = new Iron(x, y, mass);
    this.irons.push(iron);
  }

}

module.exports = new IronService();
