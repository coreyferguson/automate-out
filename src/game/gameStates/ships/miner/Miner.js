
const ioc = require('../../../../ioc');

class Miner {

  constructor(x, y) {
    this.type = 'miner';
    this.sprite = ioc.game.phaserGame.add.sprite(x, y, 'miner');
    this.sprite.scale.setTo(0.5, 0.5);
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.enableBody = true;
    ioc.game.phaserGame.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.resources = {
      iron: 0
    };
    this.massCapacity = 5;
  }

}

module.exports = Miner;
