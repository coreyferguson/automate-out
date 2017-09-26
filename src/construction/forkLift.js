
const ioc = require('../ioc');

class ForkLift {

	preload() {
		let sprite = ioc.game.load.image('forkLift', 'assets/images/forkLift.png');
	}

	create() {
	}

	update() {
	}

	spawn() {
		let sprite = ioc.game.add.sprite(
			ioc.game.world.centerX,
			ioc.game.world.centerY,
			'forkLift'
		);
		sprite.anchor.setTo(0.5, 0.5);
	}

}

module.exports = new ForkLift();
module.exports.ForkLift = ForkLift;
