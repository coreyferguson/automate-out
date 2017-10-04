
const ioc = require('../ioc');
const scoutService = require('./scoutService');

/**
 * TODO: Refactor this ScoutGameState or the rest of the application based experiments
 * with a new pattern for all game states.
 */
class ScoutGameState {

  preload() {
    ioc.game.load.image('enemy-scout', 'assets/enemies/scout_60x100.png')
  }

  create() {
    scoutService.reset();
  }

  update() {
    // get centroid of all miners
    let needsCentroid = false;
    scoutService.scouts.forEach(scout => {
      if (scout.mode === 'centroid') {
        needsCentroid = true;
      }
    });
    let centroid;
    if (needsCentroid) {
      const positions = ioc.state.miners.map(miner => miner.sprite.position);
      positions.push(ioc.state.home.sprite.position);
      centroid = Phaser.Point.centroid(positions);
    }

    // move each scout
    scoutService.scouts.forEach(scout => {
      scout.sprite.body.velocity.x = 0;
      scout.sprite.body.velocity.y = 0;
      let nearest = this.nearestMiner(scout);
      if (nearest.distance < 200) scout.mode = 'nearestMiner';
      if (scout.mode === 'centroid') this.moveToPosition(scout, centroid);
      else if (nearest.distance > 50 && scout.mode === 'nearestMiner')
        this.moveToPosition(scout, nearest.miner.sprite);
    });
  }

  moveToPosition(scout, position) {
    const radians = ioc.game.physics.arcade.angleBetween(scout.sprite, position);
    const degrees = ioc.game.math.radToDeg(radians);
    scout.sprite.angle = degrees;
    ioc.game.physics.arcade.velocityFromAngle(
      degrees, 200, scout.sprite.body.velocity);
  }

  nearestMiner(scout) {
    let distance;
    let miner;
    for (let i=0; i<ioc.state.miners.length; i++) {
      let m = ioc.state.miners[i];
      if (!distance) {
        distance = ioc.game.math.distance(
          m.sprite.x,
          m.sprite.y,
          scout.sprite.x,
          scout.sprite.y
        );
        miner = m;
        break;
      } else {
        let d = ioc.game.math.distance(
          m.sprite.x,
          m.sprite.y,
          scout.sprite.x,
          scout.sprite.y
        );
        if (d < distance) {
          distance = d;
          miner = miner;
          break;
        }
      }
    };
    return { distance, miner };
  }

}

module.exports = new ScoutGameState();
module.exports.ScoutGameState = ScoutGameState;
