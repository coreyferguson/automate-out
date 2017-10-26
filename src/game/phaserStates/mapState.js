
const ioc = require('../../ioc');

class MapState {

  preload() {
    ioc.game.phaserGame.load.crossOrigin = 'anonymous';
    ioc.game.phaserGame.load.baseURL = ioc.config.assetsBaseUrl;

    ioc.game.phaserGame.load.image('background', 'images/background.png');
    // ioc.game.phaserGame.load.image('progress-bar-friendly', 'assets/images/progress-bar-friendly.png');
    // ioc.game.phaserGame.load.image('progress-bar-neutral', 'assets/images/progress-bar-neutral.png');
    // ioc.game.phaserGame.load.image('progress-bar-enemy', 'assets/images/progress-bar-enemy.png');
    ioc.mapStates.forEach(state => {
      if (state.preload) state.preload();
    });
  }

  create() {
    ioc.state.mapStateStart = ioc.game.phaserGame.time.now;

    ioc.game.phaserGame.physics.startSystem(Phaser.Physics.ARCADE);
    ioc.game.phaserGame.world.setBounds(
      ioc.cosmos.init.bounds.x,
      ioc.cosmos.init.bounds.y,
      ioc.cosmos.init.bounds.width,
      ioc.cosmos.init.bounds.height
    );
    this.background = ioc.game.phaserGame.add.tileSprite(
      0,
      0,
      ioc.cosmos.init.bounds.width,
      ioc.cosmos.init.bounds.height,
      'background'
    );
    ioc.mapStates.forEach(state => {
      if (state.create) state.create();
    });
  }

  update() {
    this.gameOver();
    ioc.mapStates.forEach(state => {
      if (state.update) state.update();
    });
  }

  gameOver() {
    if (!ioc.homeService.home) {
      ioc.state.mapStateEnd = ioc.game.phaserGame.time.now;
      ioc.game.phaserGame.time.events.stop();
      ioc.game.phaserGame.state.start('gameOverState');
    }
  }

}

module.exports = new MapState();
module.exports.MapState = MapState;
