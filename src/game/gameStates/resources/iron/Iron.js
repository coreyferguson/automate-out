
const ioc = require('../../../../ioc');

class Iron {

  constructor(x, y, mass) {
    this.sprite = ioc.game.phaserGame.add.sprite(x, y, 'iron');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.mass = mass;
    this.massCapacity = mass;
    this.type = 'iron';

    // mass progress bar
    this.massProgressBar = ioc.game.phaserGame.add.image(
      this.sprite.x,
      this.sprite.y,
      'progress-bar-neutral'
    );
    this.massProgressBar.width = 0;
    this.massProgressBar.height = 10;
  }

}

module.exports = Iron;
