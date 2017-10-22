
const ioc = require('../../../../ioc');

class ScoutGameState {

  preload() {
    ioc.game.phaserGame.load.image('enemy-scout', 'enemies/scout_60x100.png');
  }

  create() {
    this.updateVirtualState();
  }

  update() {
    ioc.scoutService.move();
    ioc.scoutService.attack();
    this.updateVirtualState();
  }

  updateVirtualState() {
    ioc.state.scouts = ioc.scoutVirtualStateAssembler.toVirtuals(
      ioc.scoutService.scouts);
  }

  reset() {
    ioc.scoutService.reset();
  }

}

module.exports = ScoutGameState;
