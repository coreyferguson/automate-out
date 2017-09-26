
const ioc = require('../../ioc');

class MapState {

	preload() {
		// camera.preload();
		// construction.preload();
		// resources.preload();
		// shuttle.preload();
		ioc.game.load.image('background', 'assets/images/background.png');
	}

	create() {
		// const level = levels[0];

		// game.world.setBounds(
		// 	level.world.bounds.x,
		// 	level.world.bounds.y,
		// 	level.world.bounds.width,
		// 	level.world.bounds.height
		// );

		this.background = ioc.game.add.tileSprite(
			0,
			0,
			window.innerWidth,
			window.innerHeight,
			'background'
		);

		// camera.create(level);
		// construction.create(level);
		// resources.create(level);
		// shuttle.create(level);
	}

	update() {
		// camera.update();
		// construction.update();
		// resources.update();
		// shuttle.update();
	}

}

module.exports = new MapState();
module.exports.MapState = MapState;
ioc.mapState = module.exports;
