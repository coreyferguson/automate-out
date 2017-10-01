
const ioc = require('../ioc');

class Iron {

  preload() {
    ioc.game.load.image('iron', 'assets/images/iron-ingot.png');
  }

  create() {
  }

  update() {
  }

  spawn(x, y, mass) {
    const sprite = ioc.game.add.sprite(x, y, 'iron');
    sprite.anchor.setTo(0.5, 0.5);
    ioc.state.resources = ioc.state.resources || [];
    ioc.state.resources.push({
      sprite
    })
  }

}

module.exports = new Iron();
module.exports.Iron = Iron;
