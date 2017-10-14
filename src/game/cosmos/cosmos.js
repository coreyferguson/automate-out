
const ioc = require('../../ioc');

const width = 5000;
const height = 5000;
const cosmosMiddleX = width/2;
const cosmosMiddleY = height/2;

class Cosmos {

  constructor() {
    this.init = {
      bounds: {
        width,
        height,
        x: 0,
        y: 0
      },
      home: {
        x: cosmosMiddleX,
        y: cosmosMiddleY,
        resources: {
          iron: 5
        }
      }
    };
    this.timeline = [
      {
        duration: 10,
        create: () => {
          ioc.ironService.spawn(2200, cosmosMiddleY, 100);
        }
      }
    ];
  }

}

module.exports = new Cosmos();
module.exports.Cosmos = Cosmos;
