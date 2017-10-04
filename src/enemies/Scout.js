
const ioc = require('../ioc');

class Scout {

  constructor(x, y) {
    this.sprite = ioc.game.add.sprite(x, y, 'enemy-scout');
    ioc.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.scale.setTo(0.5, 0.5);
    this.health = 1;
    this.type = 'scout';

    this.mode = 'centroid';
  }

}

module.exports = Scout;
