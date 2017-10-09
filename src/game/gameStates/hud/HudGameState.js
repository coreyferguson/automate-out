
const ioc = require('../../../ioc');

class HudGameState {

  create() {
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
  }

  update() {
    this.ironCounterText.setText(ioc.state.home.resources.iron);
  }

}

module.exports = HudGameState;
