
class MinerFirstImpl {

  getVelocity(/* game, miner */) {
    return {
      direction: 0, // angle, in degrees, to aim your saucer
      magnitude: 0 // speed, >=0, <=100
    };
  }

}

module.exports = new MinerFirstImpl();
module.exports.MinerFirstImpl = MinerFirstImpl;
