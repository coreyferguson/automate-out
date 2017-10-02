
const ioc = require('../../ioc');
const miner = require('../../ships/miner');

class MapState {

  preload() {
    ioc.game.load.image('background', 'assets/images/background.png');
    ioc.game.load.image('progress-bar-friendly', 'assets/images/progress-bar-friendly.png');
    ioc.game.load.image('progress-bar-neutral', 'assets/images/progress-bar-neutral.png');
    ioc.mapStates.forEach(state => {
      state.preload();
    });
  }

  create() {
    ioc.game.physics.startSystem(Phaser.Physics.ARCADE);
    ioc.game.world.setBounds(
      ioc.world.init.bounds.x,
      ioc.world.init.bounds.y,
      ioc.world.init.bounds.width,
      ioc.world.init.bounds.height
    );
    this.background = ioc.game.add.tileSprite(
      0,
      0,
      ioc.world.init.bounds.width,
      ioc.world.init.bounds.height,
      'background'
    );
    ioc.mapStates.forEach(state => state.create());

    ioc.state.timeIndex = 0;
    function play() {
      const time = ioc.world.timeline[ioc.state.timeIndex];
      if (time) {
        console.log('level: ' + (ioc.state.timeIndex+1));
        const duration = Phaser.Timer.SECOND * time.duration;
        ioc.game.time.events.add(duration, () => {
          ioc.state.timeIndex++;
          play();
        });
        time.create();
      } else {
        console.log('fin');
      }
    }
    play();
  }

  update() {
    ioc.mapStates.forEach(state => state.update());

    // build from user queue
    let couldBuild = true;
    while (couldBuild) {
      let buildItem = ioc.buildQueueUserImpl[0];
      if (buildItem) {
        couldBuild = ioc.state.home.construct(buildItem);
        if (couldBuild) {
          ioc.buildQueueUserImpl.shift();
        }
      } else {
        couldBuild = false;
      }
    }
  }

}

module.exports = new MapState();
module.exports.MapState = MapState;
