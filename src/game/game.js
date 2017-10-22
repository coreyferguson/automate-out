
const ioc = require('../ioc');

class Game {

  start(width, height) {
    this.phaserGame = new Phaser.Game(width, height, Phaser.AUTO);
    this.width = width;
    this.height = height;
    this.phaserGame.state.add('mapState', ioc.mapState);
    this.phaserGame.state.add('gameOverState', ioc.gameOverState);
    this.phaserGame.state.start('mapState');
  }

}

module.exports = new Game();
module.exports.Game = Game;
