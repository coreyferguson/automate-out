
const ioc = require('../ioc');

class Shuttle {

  preload() {
    ioc.game.load.image('shuttle', 'assets/images/shuttle.png');
  }

  create(level) {
    this.resources = {
      energy: 100,
      iron: 0
    };
    this.x = level.shuttle.x;
    this.y = level.shuttle.y;
    this.shuttle = ioc.game.add.sprite(this.x, this.y, 'shuttle');
    this.shuttle.anchor.setTo(0.5, 0.5);
    this.shuttle.angle = 0;
  }

  update(level) {
  }

}

module.exports = new Shuttle();
module.exports.Shuttle = Shuttle;
