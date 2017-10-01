
const ioc = require('../ioc');

class Home {

	constructor(game) {
		this.resources = {
			energy: 100,
			iron: 0
		};
		this.x = null;
		this.y = null;
	}

	preload() {
		ioc.game.load.image('home', 'assets/ships/home_100x100.png');
	}

	create(level) {
		this.x = level.home.x;
		this.y = level.home.y;
		this.home = ioc.game.add.sprite(this.x, this.y, 'home');
		this.home.anchor.setTo(0.5, 0.5);
		this.home.angle = 0;
	}

	update(level) {
	}

}

module.exports = new Home();
module.exports.Home = Home;
