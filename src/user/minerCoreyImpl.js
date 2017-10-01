
class MinerFirstImpl {

  getVector(game, miner) {
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
}

module.exports = new MinerFirstImpl();
module.exports.MinerFirstImpl = MinerFirstImpl;


