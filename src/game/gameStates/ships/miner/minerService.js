
const ioc = require('../../../../ioc');
const Miner = require('./Miner');

class MinerService {

  constructor() {
    this.reset();
    this.cost = 5;
    this.buildTimeInSeconds = 1;
  }

  reset() {
    this.miners = [];
  }

  update() {
    if (ioc.minerUserImpl.getVelocity && this.miners.length > 0) {
      this.miners.forEach(miner => {
        // get velocity from user
        const virtualMiner = ioc.minerVirtualStateAssembler.toVirtual(miner);
        const userVelocity = ioc.minerUserImpl.getVelocity(
          virtualMiner, ioc.state, ioc.game.phaserGame);
        const defaultVelocity = {
          angle: miner.sprite.angle,
          speed: 0
        };
        const velocity = userVelocity || defaultVelocity;
        miner.velocity(velocity);
      });
    }
  }

  spawn(x, y) {
    const miner = new Miner(x, y);
    this.miners.push(miner);
    // check for collisions
    ioc.game.phaserGame.time.events.loop(Phaser.Timer.SECOND, () => {
      miner.collectResources();
      miner.dropResources();
    });
  }

}

module.exports = new MinerService();
