
class MinerFirstImpl {

  getVector(game, miner) {
    const { math, physics, space } = game;
    const { resources } = space;
    const
    return {
      direction: 0, // angle, in degrees, to aim your saucer
      magnitude: 0 // speed, >=0, <=100
    };
  }

}

module.exports = new MinerFirstImpl();
module.exports.MinerFirstImpl = MinerFirstImpl;