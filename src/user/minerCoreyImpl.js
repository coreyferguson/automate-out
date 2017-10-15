
class MinerCoreyImpl {

  getVelocity(miner, state, phaser) {
    if (miner.resources.energy === 0) {
      return this.getVelocityToIron(miner, state, phaser);
    } else if (miner.resources.energy === miner.massCapacity) {
      return this.getVelocityToHome(miner, state, phaser);
    }
  }

  getVelocityToIron(miner, state, phaser) {
    if (state.energies && state.energies[0]) {
      const iron = state.energies[0];
      const radians = phaser.physics.arcade.angleToXY(miner, iron.x, iron.y);
      const degrees = phaser.math.radToDeg(radians);
      const distance = phaser.physics.arcade.distanceToXY(miner, iron.x, iron.y);
      if (distance > 10) {
        return {
          angle: degrees,
          speed: 100
        };
      }
    }
  }

  getVelocityToHome(miner, state, phaser) {
    const radians = phaser.physics.arcade.angleBetween(miner, state.home);
    const degrees = phaser.math.radToDeg(radians);
    const distance = phaser.physics.arcade.distanceBetween(miner, state.home);
    if (distance > 10) {
      return {
        angle: degrees,
        speed: 100
      };
    }
  }
}

module.exports = new MinerCoreyImpl();
module.exports.MinerCoreyImpl = MinerCoreyImpl;


