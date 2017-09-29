
class ForkLiftFirstImpl {

  getVector(game, sprite) {
    const { math, physics, space } = game;
    const { resources } = space;
    return {
      direction: 0, // angle, in degrees, to aim your saucer
      magnitude: 0 // speed, >=0, <=100
    }
  }

}

module.exports = new ForkLiftFirstImpl();
module.exports.ForkLiftFirstImpl = ForkLiftFirstImpl;
