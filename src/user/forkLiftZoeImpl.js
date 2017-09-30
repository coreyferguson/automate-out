
class ForkLiftFirstImpl {

  getVector(game, forkLift) {
    const { math, physics, space } = game;
    const { resources } = space;
    if(forkLift.x>resources[0].x){
    	//debugger;
	    return { // move
	      direction: 180, // angle, in degrees, to aim your saucer
	      magnitude: 100// speed, >=0, <=100
	    }
  	}
  }

}

module.exports = new ForkLiftFirstImpl();
module.exports.ForkLiftFirstImpl = ForkLiftFirstImpl;
