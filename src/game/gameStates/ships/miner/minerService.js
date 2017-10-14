
const ioc = require('../../../../ioc');
const Miner = require('./Miner');

class MinerService {

  constructor() {
    this.reset();
    this.massConsumptionPerSecond = 1;
    this.cost = 5;
    this.buildTimeInSeconds = 1;
  }

  reset() {
    this.miners = [];
  }

  update() {
    if (ioc.minerUserImpl.getVector && this.miners.length > 0) {
      this.miners.forEach(miner => {
        // get vector from user
        const virtualMiner = ioc.minerVirtualStateAssembler.toVirtual(miner);
        const vector = ioc.minerUserImpl.getVector(virtualMiner, ioc.state, ioc.game.phaserGame)
          || { direction: 0, magnitude: 0 };
        miner.sprite.angle = vector.direction;
        miner.sprite.body.velocity.x = 0;
        miner.sprite.body.velocity.y = 0;

        // update miner based on user supplied vector
        if (vector) {
          if (vector.magnitude > 100) vector.magnitude = 100;
          if (vector.magnitude < 0) vector.magnitude = 0;
          if (vector.magnitude > 0) {
            ioc.game.phaserGame.physics.arcade.velocityFromAngle(
              vector.direction, vector.magnitude, miner.sprite.body.velocity);
          }
        }
      });
    }
  }

  spawn(x, y) {
    const miner = new Miner(x, y);
    this.miners.push(miner);

    // check for collisions
    ioc.game.phaserGame.time.events.loop(
      Phaser.Timer.SECOND,
      () => {
        // pull iron from nearby resources
        if (miner.resources.iron < miner.massCapacity) {
          ioc.ironService.irons.forEach(iron => {
            if (Phaser.Rectangle.intersects(miner.sprite, iron.sprite)) {
              if (iron.mass > 0) {
                const type = iron.type;
                miner.resources[type] = miner.resources[type] || 0;
                miner.resources[type] += this.massConsumptionPerSecond;
                iron.mass -= this.massConsumptionPerSecond;
              }
            }
          });
        }
        // offload iron to home
        if (miner.resources.iron > 0) {
          const home = ioc.homeService.home;
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

module.exports = new MinerService();
