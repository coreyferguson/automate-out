
const ioc = require('../ioc');

module.exports = {
  title: "Level 2",
  description: "Program your miner to come back",
  allowedConstruction: {
    build: [ "miner" ]
  },
  resources: [
    {
      type: "iron",
      x: 2150,
      y: 2500
    }
  ],
  shuttle: {
    x: 2500,
    y: 2500
  },
  world: {
    bounds: {
      height: 5000,
      width: 5000,
      x: 0,
      y: 0
    }
  },
  success: () => {
    return false;
  }
}
