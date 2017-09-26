
class ForkLift {

	constructor(game) {
		this.game = game;
	}

	preload(level) {
		let sprite = this.game.load.image('ForkLift', 'assets/images/saucer.png');
	}

	create(level) {
	}

	update(level) {
	}

	createForkLift() {
		let sprite = this.game.add.sprite(
			this.game.world.centerX,
			this.game.world.centerY,
			'ForkLift'
		);
		sprite.anchor.setTo(0.5, 0.5);
	}

}

module.exports = ForkLift;
