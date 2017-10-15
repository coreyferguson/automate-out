
const ioc = require('../../../../ioc');

class MinerGameState {

  preload() {
    ioc.game.phaserGame.load.image('miner', 'ships/miner_100x100.png');
  }

  create() {
    ioc.minerService.reset();
    this.updateVirtualState();
  }

  update() {
    ioc.minerService.update();
    this.updateVirtualState();
  }

  updateVirtualState() {
    ioc.state.miners = ioc.minerVirtualStateAssembler.toVirtuals(ioc.minerService.miners);
  }

}

module.exports = MinerGameState;
