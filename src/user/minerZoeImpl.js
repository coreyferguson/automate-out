
class MinerFirstImpl {

  getVelocity(miner, state, phaser) {
    if(miner.x>state.irons[0].x){
      return { // move
        angle: 180, // angle, in degrees, to aim your saucer
        speed: 100 // speed, >=0, <=100
      };
    }
  }

}

module.exports = new MinerFirstImpl();
module.exports.MinerFirstImpl = MinerFirstImpl;
