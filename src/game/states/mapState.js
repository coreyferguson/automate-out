
const ioc = require('../../ioc');

class MapState {

	preload() {
		ioc.game.load.spritesheet(
			'icon-build',
			'assets/icons/build.png',
			100,
			100,
			4);


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

		// build button
		const click = () => {
			console.log('clicked');
		};
		const btnBuild = ioc.game.add.button(
			10,
			10,
			'icon-build',
			click,
			null,
			0, 1, 2, 3
		);
		btnBuild.scale.setTo(0.5, 0.5);
		btnBuild.fixedToCamera = true;
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
ioc.mapState = module.exports;
