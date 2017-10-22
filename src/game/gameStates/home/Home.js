
const ioc = require('../../../ioc');

const { minerService } = ioc;

class Home {

  constructor(x, y) {
    this.sprite = ioc.game.phaserGame.add.sprite(x, y, 'home');
    this.sprite.anchor.setTo(0.5, 0.5);
    ioc.game.phaserGame.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.enableBody = true;
    this.sprite.angle = 0;
    this.resources = {
      iron: 5,
      energy: 0
    };
  }

}

module.exports = Home;
