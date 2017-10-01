
const ioc = require('../ioc');

class Home {

	constructor(game) {
	}

	preload() {
		ioc.game.load.image('home', 'assets/ships/home_100x100.png');
	}

	create() {
		const x = ioc.world.init.home.x;
		const y = ioc.world.init.home.y;
		const sprite = ioc.game.add.sprite(x, y, 'home');
		sprite.anchor.setTo(0.5, 0.5);
		sprite.angle = 0;
		ioc.state.home = {
			sprite,
			resources: []
		};
	}

	update() {
	}

}

module.exports = new Home();
module.exports.Home = Home;
