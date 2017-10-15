
const ioc = require('../../../../ioc');

class Energy {

  constructor(x, y, mass) {
    this.sprite = ioc.game.phaserGame.add.sprite(x, y, 'energy');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.scale.setTo(2, 2);
    this.mass = mass;
    this.massCapacity = mass;
    this.type = 'energy';
  }

}

module.exports = Energy;
