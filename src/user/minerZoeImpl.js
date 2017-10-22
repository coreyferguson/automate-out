
// integer
// boolean
// string
// object

class ZoesMiner {

	constructor() {
		this.isGoingToMine = true;
	}

  getVelocity(miner, state, phaser) {
  	if(this.isGoingToMine===true){
    	if(miner.x>state.irons[0].x){
      	return { // move
        	angle: 180, // angle, in degrees, to aim your saucer
        	speed: 100 // speed, >=0, <=100
      	};
      };
      if(Math.ceil(miner.x)+1===state.irons[0].x){
      	this.isGoingToMine = false;
      };
    }
    else {
    	return {
    		angle: 0,
    		speed: 100
    	};
    }
  };

};

module.exports = new ZoesMiner();
module.exports.ZoesMiner = ZoesMiner;
