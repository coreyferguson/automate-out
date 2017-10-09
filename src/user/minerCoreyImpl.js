
class MinerCoreyImpl {

  getVector(miner, state, phaser) {
    if (miner.resources.iron === 0) {
      return this.getVectorToIron(miner, state, phaser);
    } else if (miner.resources.iron === miner.massCapacity) {
      return this.getVectorToHome(miner, state, phaser);
    }
  }

  getVectorToIron(miner, state, phaser) {
    if (state.irons && state.irons[0]) {
      const iron = state.irons[0];
      const radians = phaser.physics.arcade.angleToXY(miner, iron.x, iron.y);
      const distance = phaser.physics.arcade.distanceToXY(miner, iron.x, iron.y);
      if (distance > 10) {
        return {
          direction: phaser.math.radToDeg(radians),
          magnitude: 100
        };
      } else {
        return {
          direction: 0,
          magnitude: 0
        };
      }
    } else {
      return null;
    }
  }

  getVectorToHome(miner, state, phaser) {
    const radians = phaser.physics.arcade.angleBetween(miner, state.home);
    const degrees = phaser.math.radToDeg(radians);
    const distance = phaser.physics.arcade.distanceBetween(miner, state.home);
    if (distance > 10) {
      return {
        direction: degrees,
        magnitude: 100
      };
    } else {
      return {
        direction: 0,
        magnitude: 0
      };
    }
  }
}

module.exports = new MinerCoreyImpl();
module.exports.MinerCoreyImpl = MinerCoreyImpl;


