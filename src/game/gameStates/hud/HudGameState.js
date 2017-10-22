
const ioc = require('../../../ioc');

class HudGameState {

  preload() {
    ioc.game.phaserGame.load.image('full-screen', 'icons/full-screen.png');
  }

  create() {
    // full screen
    this.fullScreenIcon = ioc.game.phaserGame.add.sprite(
      ioc.game.phaserGame.width-50,
      ioc.game.phaserGame.height-50,
      'full-screen');
    this.fullScreenIcon.width = 50;
    this.fullScreenIcon.height = 50;
    this.fullScreenIcon.fixedToCamera = true;
    this.fullScreenIcon.inputEnabled = true;

    this.fullScreenIcon.events.onInputDown.add(() => {
      if (ioc.game.phaserGame.scale.isFullScreen) {
        ioc.game.phaserGame.scale.stopFullScreen();
      } else {
        ioc.game.phaserGame.scale.startFullScreen(false);
      }
    });

    // iron
    this.ironCounterIcon = ioc.game.phaserGame.add.sprite(10, 10, 'iron');
    this.ironCounterIcon.fixedToCamera = true;
    this.ironCounterIcon.width = 20;
    this.ironCounterIcon.height = 20;

    const iron = (ioc.state.home) ? ioc.state.home.resources.iron : 0;
    this.ironCounterText = ioc.game.phaserGame.add.text(35, 8, iron, {
      font: '20px Arial',
      fill: '#ccc',
      align: 'center'
    });
    this.ironCounterText.fixedToCamera = true;

    // energy
    this.energyCounterIcon = ioc.game.phaserGame.add.sprite(6, 36, 'energy');
    this.energyCounterIcon.fixedToCamera = true;
    this.energyCounterIcon.width = 28;
    this.energyCounterIcon.height = 28;

    const energy = (ioc.state.home) ? ioc.state.home.resources.energy : 0;
    this.energyCounterText = ioc.game.phaserGame.add.text(35, 38, energy, {
      font: '20px Arial',
      fill: '#ccc',
      align: 'center'
    });
    this.energyCounterText.fixedToCamera = true;
  }

  update() {
    if (ioc.state.home) {
      this.ironCounterText.setText(ioc.state.home.resources.iron);
      this.energyCounterText.setText(ioc.state.home.resources.energy);
    }
  }

}

module.exports = HudGameState;
