
const ioc = require('../../../../ioc');

class IronGameState {

  preload() {
    ioc.game.phaserGame.load.image('energy', 'images/energy_50x50.png');
  }

  create() {
    this.updateVirtualState();
  }

  update() {
    this.updateVirtualState();
  }

  updateVirtualState() {
    ioc.state.energies = ioc.energyVirtualStateAssembler.toVirtuals(
      ioc.energyService.energies);
  }

  reset() {
    ioc.energyService.reset();
  }

}

module.exports = IronGameState;
