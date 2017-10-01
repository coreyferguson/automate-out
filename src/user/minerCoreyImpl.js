
class MinerFirstImpl {

  getVector(game, miner) {
    if (miner.resources.iron === 0) {
      return this.getVectorToIron(game, miner);
    } else if (miner.resources.iron === miner.massCapacity) {
      return this.getVectorToHome(game, miner);
    }
  }

  getVectorToIron(game, miner) {
    const { math, physics, space } = game;
    const { resources } = space;
    if (resources && resources[0]) {
      const resource = resources[0].sprite;
      const radians = physics.arcade.angleToXY(miner.sprite, resource.x, resource.y);
      const distance = physics.arcade.distanceToXY(miner.sprite, resource.x, resource.y);
      if (distance > 10) {
        return {
          direction: math.radToDeg(radians),
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

  getVectorToHome(game, miner) {
    const physics = game.physics;
    const math = game.math;
    const home = game.space.home;
    const radians = physics.arcade.angleBetween(miner.sprite, home.sprite);
    const degrees = math.radToDeg(radians);
    const distance = physics.arcade.distanceBetween(miner.sprite, home.sprite);
    if (distance > 10) {
      return {
        direction: degrees,
        magnitude: 100
      };
    } else {
      return {
        direction: 0,
        magnitude: 0
      }
    }
  }
}

module.exports = new MinerFirstImpl();
module.exports.MinerFirstImpl = MinerFirstImpl;


