
const ioc = require('../ioc');

class Home {

  preload() {
    ioc.game.load.image('home', 'assets/images/home.png');
  }

  create(level) {
    this.resources = {
      energy: 100,
      iron: 0
    };
    this.x = level.home.x;
    this.y = level.home.y;
    this.home = ioc.game.add.sprite(this.x, this.y, 'home');
    this.home.anchor.setTo(0.5, 0.5);
    this.home.angle = 0;
  }

  update(level) {
  }

}

module.exports = new Home();
module.exports.Home = Home;
