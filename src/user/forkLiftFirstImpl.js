
class ForkLiftFirstImpl {

  getVector(game, sprite) {
    const { math, physics, space } = game;
    const { resources } = space;
    if (resources && resources[0]) {
    	const resource = resources[0];
    	const radians = physics.arcade.angleToXY(sprite, resource.x, resource.y);
    	const distance = physics.arcade.distanceToXY(sprite, resource.x, resource.y);
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

module.exports = new ForkLiftFirstImpl();
module.exports.ForkLiftFirstImpl = ForkLiftFirstImpl;
