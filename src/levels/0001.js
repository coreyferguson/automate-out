
const ioc = require('../ioc');

module.exports = {
  title: "Level 1",
  description: "Program a miner and move it to the iron.",
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
  home: {
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
    const miner = ioc.miner.sprites[0];
    const resources = ioc.resources.reduce((resources, resource) => {
      return resources.concat(resource.sprites);
    }, []);
    if (resources && miner) {
      const distance = ioc.game.physics.arcade.distanceBetween(
        miner, resources[0]);
      return distance < 10;
    }
  }
}
