
const ForkLift = require('./ForkLift');

class Construction {

	constructor(game) {
		this.game = game;
		this.forkLift = new ForkLift(game);
	}

	preload(level) {
		this.forkLift.preload(level);
		this.game.load.image('button-create', 'assets/images/button-create.png');
		this.game.load.image('button-forklift', 'assets/images/button-forklift.png');
	}

	create(level) {
		this.forkLift.create(level);
		this.menuGroup = this.game.add.group();
		this.loadUI('main');
	}

	update(level) {
		this.forkLift.update(level);
	}

	loadUI(menu) {
		this.menuGroup.forEach(item => {
			item.destroy();
		});

		if (menu === 'main') {
			this.game.add.button(
				this.game.camera.x+10,
				this.game.camera.y+10,
				'button-create',
				this.onCreate, this,
				null, null, null, null,
				this.menuGroup
			);
		}

		else if (menu === 'create') {
			this.game.add.button(
				this.game.camera.x+10,
				this.game.camera.y+10,
				'button-forklift',
				this.onCreateForkLift, this,
				null, null, null, null,
				this.menuGroup
			);
		}
	}

	onCreate() {
		this.loadUI('create');
	}

	onCreateForkLift() {
		this.forkLift.createForkLift();
		this.loadUI('main');
	}

}

module.exports = Construction;
