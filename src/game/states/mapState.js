
const ioc = require('../../ioc');

class MapState {

	preload() {
		ioc.game.load.image('background', 'assets/images/background.png');
		ioc.mapStates.forEach(state => {
			state.preload();
		});
	}

	create() {
    ioc.game.physics.startSystem(Phaser.Physics.ARCADE);
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
		ioc.mapStates.forEach(state => state.create(level));
	}

	update() {
		ioc.mapStates.forEach(state => state.update());
	}

}

module.exports = new MapState();
module.exports.MapState = MapState;
