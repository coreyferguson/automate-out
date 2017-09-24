
const Camera = require('./Camera');

const game = new Phaser.Game(
	window.innerWidth,
	window.innerHeight,
	Phaser.AUTO
);
const camera = new Camera(game);

const state = {

	preload: function() {
		this.load.image('background', 'assets/images/background.jpg');
		this.load.image('shuttle', 'assets/images/shuttle.png');
	},

	create: function() {
		this.game.world.setBounds(0, 0, 5000, 5000);
		camera.create();

		// background
		this.background = this.game.add.sprite(0, 0, 'background');

		// shuttle
		this.shuttle = this.game.add.sprite(this.game.world.centerY, this.game.world.centerY, 'shuttle');
		this.shuttle.anchor.setTo(0, 0.5);
		this.shuttle.scale.setTo(0.5);
		this.shuttle.angle = 0;
	},

	update: function() {
		camera.update();
	}

};

game.state.add('state', state);
game.state.start('state');
