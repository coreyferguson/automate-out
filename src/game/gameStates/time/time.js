
const ioc = require('../../../ioc');

class Time {

  reset() {
    ioc.state.timeIndex = 0;
    if (ioc.game.phaserGame.time) {
      ioc.game.phaserGame.time.events.loop(Phaser.Timer.SECOND, () => {
        const time = ioc.cosmos.timeline[ioc.state.timeIndex];
        if (time) {
          time.create();
          ioc.state.timeIndex++;
        } else {
          // finished
        }
      });
    }
  }

  create() {
  }

}

module.exports = new Time();
module.exports.Time = Time;
