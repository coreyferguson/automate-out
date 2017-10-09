
const ioc = require('../../../../ioc');

class ScoutGameState {

  preload() {
    ioc.game.phaserGame.load.image('enemy-scout', 'assets/enemies/scout_60x100.png');
  }

  create() {
    ioc.scoutService.reset();
    this.updateVirtualState();
  }

  update() {
    ioc.scoutService.move();
    this.updateVirtualState();
  }

  updateVirtualState() {
    ioc.state.scouts = ioc.scoutVirtualStateAssembler.toVirtuals(ioc.scoutService.scouts);
  }

}

module.exports = ScoutGameState;
