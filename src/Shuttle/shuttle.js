
class Shuttle {

	constructor(game) {
		this.game = game;
	}

	preload() {
		this.game.load.image('shuttle', 'assets/images/shuttle.png');
	}

	create(level) {
		this.shuttle = this.game.add.sprite(level.shuttle.x, level.shuttle.y, 'shuttle');
		this.shuttle.anchor.setTo(0.5, 0.5);
		this.shuttle.angle = 0;
	}

	update(level) {
	}

}

module.exports = Shuttle;
