
const ioc = require('../ioc');

class Iron {

	preload() {
		ioc.game.load.image('iron', 'assets/images/iron-ingot.png');
	}

	create(level) {
		const irons = level.resources.filter(item => item.type === 'iron');
		irons.forEach(iron => {
			const sprite = ioc.game.add.sprite(iron.x, iron.y, 'iron');
			sprite.anchor.setTo(0.5, 0.5);
		});
	}

	update() {
	}

}

module.exports = new Iron();
module.exports.Iron = Iron;
