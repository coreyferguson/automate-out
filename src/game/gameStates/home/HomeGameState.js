
const ioc = require('../../../ioc');

class HomeGameState {

  preload() {
    ioc.game.phaserGame.load.image('home', 'assets/ships/home_100x100.png');
  }

  create() {
    ioc.homeService.spawn();
    this.updateVirtualState();
  }

  update() {
    this.updateVirtualState();
  }

  updateVirtualState() {
    ioc.state.home =
      ioc.homeVirtualStateAssembler.toVirtual(ioc.homeService.home);
  }

}

module.exports = HomeGameState;
