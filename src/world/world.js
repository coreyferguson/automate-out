
const ioc = require('../ioc');
const miner = require('../ships/miner');

class World {

  constructor() {
    this.init = {
      bounds: {
        height: 5000,
        width: 5000,
        x: 0,
        y: 0
      },
      home: {
        x: 2500,
        y: 2500
      },
      resources: [
        {
          type: 'iron',
          x: 2150,
          y: 2500
        }
      ]
    };
    this.time = 0;
    this.timeline = [
      {
        duration: 5,
        create: () => {
          miner.spawn(2550, 2550)
        }
      }
    ];
  }

  reset() {
    ioc.world = new World();
  }

}

module.exports = new World();
module.exports.World = World;
