
const ioc = require('../../../../ioc');

class MinerGameState {

  preload() {
    ioc.game.phaserGame.load.image('miner', 'ships/miner_100x100.png');
  }

  create() {
    this.updateVirtualState();
  }

  update() {
    ioc.minerService.update();
    this.updateVirtualState();
  }

  updateVirtualState() {
    ioc.state.miners = ioc.minerVirtualStateAssembler.toVirtuals(ioc.minerService.miners);
  }

  reset() {
    ioc.minerService.reset();
  }

}

module.exports = MinerGameState;
