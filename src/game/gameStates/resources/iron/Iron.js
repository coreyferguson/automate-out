
const ioc = require('../../../../ioc');

class Iron {

  constructor(x, y, mass) {
    this.sprite = ioc.game.phaserGame.add.sprite(x, y, 'iron');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.mass = mass;
    this.massCapacity = mass;
    this.type = 'iron';
  }

}

module.exports = Iron;
