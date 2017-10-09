
const ioc = require('../../../ioc');
const Home = require('./Home');

class HomeService {

  constructor() {
    this.reset();
  }

  reset() {
    this.home = undefined;
  }

  spawn() {
    const x = ioc.cosmos.init.home.x;
    const y = ioc.cosmos.init.home.y;
    const sprite = ioc.game.phaserGame.add.sprite(x, y, 'home');
    sprite.anchor.setTo(0.5, 0.5);
    sprite.angle = 0;
    this.home = new Home({ sprite });
  }

  /**
   * Attempt build of given type.
   * @returns boolean construction built successfully
   */
  construct(type) {
    let couldBuild = false;
    ioc.homeConstructions
      .filter(construction => construction.type === type)
      .forEach(construction => {
        if (this.home.resources.iron >= construction.cost) {
          couldBuild = true;
          this.home.resources.iron -= construction.cost;
          const buildTime = Phaser.Timer.SECOND * ioc.minerService.buildTimeInSeconds;
          ioc.game.phaserGame.time.events.add(buildTime, () => {
            ioc.minerService.spawn(this.home.sprite.x, this.home.sprite.y);
          });
        }
      });
    return couldBuild;
  }

}

module.exports = new HomeService();
