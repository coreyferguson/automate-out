
const ioc = require('../ioc');

class Game {

  start(width, height) {
    this.phaserGame = new Phaser.Game(width, height, Phaser.AUTO);
    this.phaserGame.state.add('mapState', ioc.mapState);
    this.phaserGame.state.start('mapState');
  }

}

module.exports = new Game();
module.exports.Game = Game;
