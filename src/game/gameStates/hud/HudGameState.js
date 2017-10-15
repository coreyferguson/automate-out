
const ioc = require('../../../ioc');

class HudGameState {

  create() {
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
    this.ironCounterText.setText(ioc.state.home.resources.iron);
    this.energyCounterText.setText(ioc.state.home.resources.energy);
  }

}

module.exports = HudGameState;
