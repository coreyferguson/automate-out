
const ioc = require('../ioc');
const miner = require('../ships/miner');
const iron = require('../resources/iron');

const width = 5000;
const height = 5000;
const worldMiddleX = width/2;
const worldMiddleY = height/2;

class World {

  constructor() {
    this.init = {
      bounds: {
        width,
        height,
        x: 0,
        y: 0
      },
      home: {
        x: worldMiddleX,
        y: worldMiddleY,
        resources: {
          iron: 5
        }
      }
    };
    this.timeline = [
      {
        duration: 10,
        create: () => {
          iron.spawn(2200, worldMiddleY, 100);
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
