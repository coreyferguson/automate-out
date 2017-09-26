
const ioc = require('../../ioc');

class MapState {

	preload() {


		// camera.preload();
		// construction.preload();
		// resources.preload();
		// shuttle.preload();
		ioc.game.load.image('background', 'assets/images/background.png');

		ioc.mapStates.forEach(state => {
			state.preload();
		});
	}

	create() {
		const level = ioc.levels[0];
		ioc.game.world.setBounds(
			level.world.bounds.x,
			level.world.bounds.y,
			level.world.bounds.width,
			level.world.bounds.height
		);

		this.background = ioc.game.add.tileSprite(
			0,
			0,
			level.world.bounds.width,
			level.world.bounds.height,
			'background'
		);

		// camera.create(level);
		// construction.create(level);
		// resources.create(level);
		// shuttle.create(level);

		ioc.mapStates.forEach(state => state.create(level));
	}

	update() {
		ioc.mapStates.forEach(state => state.update());
		// camera.update();
		// construction.update();
		// resources.update();
		// shuttle.update();
	}

}

module.exports = new MapState();
module.exports.MapState = MapState;
