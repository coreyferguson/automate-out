
const ioc = require('../ioc');
const miner = require('../ships/miner');

class Home {

  constructor(game) {
  }

  preload() {
    ioc.game.load.image('home', 'assets/ships/home_100x100.png');
  }

  create() {
    const x = ioc.world.init.home.x;
    const y = ioc.world.init.home.y;
    const sprite = ioc.game.add.sprite(x, y, 'home');
    sprite.anchor.setTo(0.5, 0.5);
    sprite.angle = 0;
    ioc.state.home = {
      sprite,
      resources: {
        iron: 5
      },
      construct: this.construct.bind(this)
    };
  }

  update() {
  }

  construct(type) {
    let couldBuild = false;
    ioc.homeConstructions
      .filter(construction => construction.type === type)
      .forEach(construction => {
        if (ioc.state.home.resources.iron >= construction.cost) {
          couldBuild = true;
          ioc.state.home.resources.iron -= construction.cost;
          const buildTime = Phaser.Timer.SECOND * miner.buildTimeInSeconds;
          ioc.game.time.events.add(buildTime, () => {
            miner.spawn(ioc.state.home.sprite.x, ioc.state.home.sprite.y);
          });
        }
      });
    return couldBuild;
  }

}

module.exports = new Home();
module.exports.Home = Home;
