
const ioc = require('../../../../ioc');

class IronGameState {

  preload() {
    ioc.game.phaserGame.load.image('iron', 'images/iron_50x50.png');
  }

  create() {
    this.updateVirtualState();
  }

  update() {
    this.updateVirtualState();
  }

  updateVirtualState() {
    ioc.state.irons = ioc.ironVirtualStateAssembler.toVirtuals(ioc.ironService.irons);
  }

  reset() {
    ioc.ironService.reset();
  }

}

module.exports = IronGameState;
