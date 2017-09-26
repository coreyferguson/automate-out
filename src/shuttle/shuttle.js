
const ioc = require('../ioc');

class Shuttle {

	constructor(game) {
		this.resources = {
			energy: 100,
			iron: 0
		};
	}

	preload() {
		ioc.game.load.image('shuttle', 'assets/images/shuttle.png');
	}

	create(level) {
		this.shuttle = ioc.game.add.sprite(level.shuttle.x, level.shuttle.y, 'shuttle');
		this.shuttle.anchor.setTo(0.5, 0.5);
		this.shuttle.angle = 0;
	}

	update(level) {
	}

}

module.exports = new Shuttle();
module.exports.Shuttle = Shuttle;
