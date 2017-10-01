
const ioc = require('../ioc');

class Game {

  start(width, height) {
    ioc.game = new Phaser.Game(width, height, Phaser.AUTO);
    ioc.game.state.add('mapState', ioc.mapState);
    ioc.game.state.add('levelTitleState', ioc.levelTitleState);
    ioc.game.state.start('levelTitleState');
  }

}

module.exports = new Game();
module.exports.Game = Game;
ioc.game = module.exports;
