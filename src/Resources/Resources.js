
const Iron = require('./Iron');

class Resources {

	constructor(game) {
		this.game = game;
		this.iron = new Iron(game);
	}

	preload() {
		this.iron.preload();
	}

	create(level) {
		this.iron.create(level);
	}

	update(level) {
		this.iron.update(level);
	}

}

module.exports = Resources;
