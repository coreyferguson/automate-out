
class MinerFirstImpl {

  getVector(game, miner) {
    const { math, physics, space } = game;
    const { resources } = space;
    if(miner.x>resources[0].x){
      return { // move
        direction: 180, // angle, in degrees, to aim your saucer
        magnitude: 100// speed, >=0, <=100
      }
    }
  }

}

module.exports = new MinerFirstImpl();
module.exports.MinerFirstImpl = MinerFirstImpl;