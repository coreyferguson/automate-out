
const ioc = require('../../../../ioc');

class IronGameState {

  preload() {
    ioc.game.phaserGame.load.image('iron', 'assets/images/iron_50x50.png');
  }

  create() {
    ioc.ironService.reset();
    this.updateVirtualState();
  }

  update() {
    ioc.ironService.updateProgressBars();
    this.updateVirtualState();
  }

  updateVirtualState() {
    ioc.state.irons = ioc.ironVirtualStateAssembler.toVirtuals(ioc.ironService.irons);
  }

}

module.exports = IronGameState;
