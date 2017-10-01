
const ioc = require('../ioc');

class Miner {

  preload() {
    ioc.game.load.image('miner', 'assets/ships/miner_60x100.png');
  }

  create() {
    this.miners = [];
    this.massConsumptionPerSecond = 1;
    this.massCapacity = 5;
  }

  update() {
    if (ioc.minerUserImpl.getVector && this.miners.length > 0) {
      this.miners.forEach(miner => {
        const resources = ioc.state.resources;
        const game = {
          space: { resources },
          physics: ioc.game.physics,
          math: ioc.game.math
        };
        const vector = ioc.minerUserImpl.getVector(game, miner);
        miner.sprite.angle = vector.direction;
        miner.sprite.body.velocity.x = 0;
        miner.sprite.body.velocity.y = 0;
        if (vector) {
          if (vector.magnitude > 100) vector.magnitude = 100;
          if (vector.magnitude < 0) vector.magnitude = 0;
          if (vector.magnitude > 0) {
            ioc.game.physics.arcade.velocityFromAngle(
              vector.direction, vector.magnitude, miner.sprite.body.velocity);
          }
        }

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
      }
    };

    // check for collisions
    ioc.game.time.events.loop(
      Phaser.Timer.SECOND,
      () => {
        if (miner.resources.iron < this.massCapacity) {
          ioc.state.resources.forEach(resource => {
            if (Phaser.Rectangle.intersects(miner.sprite, resource.sprite)) {
              const type = resource.type;
              miner.resources[type] = miner.resources[type] || 0;
              miner.resources[type] += this.massConsumptionPerSecond;
              resource.mass -= this.massConsumptionPerSecond;
              console.log('miner.resources.iron:', miner.resources.iron);
              console.log('resource.mass:', resource.mass);
            }
          });
        }
      }
    );

    // global reference to all miners
    this.miners.push(miner);
  }

}

module.exports = new Miner();
module.exports.Miner = Miner;
