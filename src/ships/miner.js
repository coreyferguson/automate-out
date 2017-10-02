
const ioc = require('../ioc');

class Miner {

  preload() {
    ioc.game.load.image('miner', 'assets/ships/miner_60x100.png');
  }

  create() {
    this.miners = [];
    this.massConsumptionPerSecond = 1;
    this.maxIronProgressBarWidth=30;
    this.type = 'miner';
    this.cost = 5;
    this.buildTimeInSeconds = 1;
  }

  update() {
    if (ioc.minerUserImpl.getVector && this.miners.length > 0) {
      this.miners.forEach(miner => {
        // get vector from user
        const resources = ioc.state.resources;
        const home = ioc.state.home;
        const game = {
          space: { resources, home },
          physics: ioc.game.physics,
          math: ioc.game.math
        };
        const vector = ioc.minerUserImpl.getVector(game, miner)
          || { direction: 0, magnitude: 0 };
        miner.sprite.angle = vector.direction;
        miner.sprite.body.velocity.x = 0;
        miner.sprite.body.velocity.y = 0;

        // update miner based on user supplied vector
        if (vector) {
          if (vector.magnitude > 100) vector.magnitude = 100;
          if (vector.magnitude < 0) vector.magnitude = 0;
          if (vector.magnitude > 0) {
            ioc.game.physics.arcade.velocityFromAngle(
              vector.direction, vector.magnitude, miner.sprite.body.velocity);
          }
        }

        // iron progress bar
        miner.ironProgressBar.x = miner.sprite.x-miner.sprite.width/2;
        miner.ironProgressBar.y = miner.sprite.y-miner.sprite.height/2-10;
        miner.ironProgressBar.width=
          miner.resources.iron
          * this.maxIronProgressBarWidth
          / miner.massCapacity;
      });
    }
  }

  spawn(x, y) {
    // create miner
    let sprite = ioc.game.add.sprite(x, y, 'miner');
    sprite.scale.setTo(0.5, 0.5);
    sprite.anchor.setTo(0.5, 0.5);
    sprite.enableBody = true;
    ioc.game.physics.enable(sprite, Phaser.Physics.ARCADE);
    const miner = {
      sprite,
      resources: {
        iron: 0
      },
      massCapacity: 5
    };

    // iron progress bar
    const ironProgressBar = ioc.game.add.image(
      sprite.x,
      sprite.y,
      'progress-bar-friendly'
    );
    ironProgressBar.width = 0;
    miner.ironProgressBar = ironProgressBar;

    // check for collisions
    ioc.game.time.events.loop(
      Phaser.Timer.SECOND,
      () => {
        // pull iron from nearby resources
        if (miner.resources.iron < miner.massCapacity) {
          ioc.state.resources.forEach(resource => {
            if (Phaser.Rectangle.intersects(miner.sprite, resource.sprite)) {
              if (resource.mass > 0) {
                const type = resource.type;
                miner.resources[type] = miner.resources[type] || 0;
                miner.resources[type] += this.massConsumptionPerSecond;
                resource.mass -= this.massConsumptionPerSecond;
              }
            }
          });
        }
        // offload iron to home
        if (miner.resources.iron > 0) {
          const home = ioc.state.home;
          if (Phaser.Rectangle.intersects(miner.sprite, home.sprite)) {
            home.resources.iron = home.resources.iron || 0;
            home.resources.iron += this.massConsumptionPerSecond;
            miner.resources.iron -= this.massConsumptionPerSecond;
          }
        }
      }
    );

    // global reference to all miners
    this.miners.push(miner);
  }

}

module.exports = new Miner();
module.exports.Miner = Miner;
