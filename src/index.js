
const Camera = require('./Camera');
const Resources = require('./Resources');
const Shuttle = require('./Shuttle');
const levels = require('./levels');

const game = new Phaser.Game(
	window.innerWidth,
	window.innerHeight,
	Phaser.AUTO
);

const camera = new Camera(game);
const resources = new Resources(game);
const shuttle = new Shuttle(game);

const state = {

	preload: function() {
		camera.preload();
		resources.preload();
		shuttle.preload();
		this.load.image('background', 'assets/images/background.png');
	},

	create: function() {
		const level = levels[0];

		this.game.world.setBounds(
			level.world.bounds.x,
			level.world.bounds.y,
			level.world.bounds.width,
			level.world.bounds.height
		);

		this.background = this.game.add.tileSprite(
			0,
			0,
			level.world.bounds.width,
			level.world.bounds.height,
			'background'
		);

		shuttle.create(level);
		camera.create(level);
		resources.create(level);
	},

	update: function() {
		camera.update();
		resources.update();
	}

};

game.state.add('state', state);
game.state.start('state');
