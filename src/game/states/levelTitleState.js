
const ioc = require('../../ioc');

class LevelTitleState {

  preload() {
  }

  create() {
    const level = ioc.levels[ioc.level];
    console.log('ioc.level:', ioc.level);
    console.log('level.title', level.title);
    ioc.game.add.text(
    	ioc.game.world.centerX,
    	ioc.game.world.centerY,
    	level.title,
    	{ font: "65px Arial", fill: "#ccf", align: "center" }
  	);
    // text.anchor.set(0.5, 1);
    // text = ioc.game.add.text(
    //   ioc.game.world.centerX,
    //   ioc.game.world.centerY+50,
    //   level.description,
    //   { font: "30px Arial", fill: "#ccf", align: "center" }
    // );
    // text.anchor.set(0.5, 0);

    ioc.game.time.events.add(Phaser.Timer.SECOND * 4, () => {
    	ioc.game.state.start('mapState');
    });

  }

  update() {
  }

}

module.exports = new LevelTitleState();
module.exports.LevelTitleState = LevelTitleState;
