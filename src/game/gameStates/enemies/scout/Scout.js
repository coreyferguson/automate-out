
const ioc = require('../../../../ioc');

class Scout {

  constructor(x, y) {
    this.type = 'scout';
    this.sprite = ioc.game.phaserGame.add.sprite(x, y, 'enemy-scout');
    ioc.game.phaserGame.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.enableBody = true;
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.scale.setTo(0.5, 0.5);
    this.health = 1;
    this.mode = 'centroid';
  }

}

module.exports = Scout;
