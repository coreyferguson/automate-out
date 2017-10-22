
const ioc = require('../../../../ioc');
const Scout = require('./Scout');

const { minerService, homeService } = ioc;

class ScoutService {

  constructor() {
    this.reset();
  }

  reset() {
    this.scouts = [];
  }

  move() {
    // get centroid of all miners
    let needsCentroid = false;
    this.scouts.forEach(scout => {
      if (scout.mode === 'centroid') {
        needsCentroid = true;
      }
    });
    let centroid;
    if (needsCentroid) {
      const positions = minerService.miners.map(miner => miner.sprite.position);
      positions.push(homeService.home.sprite.position);
      centroid = Phaser.Point.centroid(positions);
    }

    // move each scout
    this.scouts.forEach(scout => {
      scout.sprite.body.velocity.x = 0;
      scout.sprite.body.velocity.y = 0;
      let nearest = this.nearestMiner(scout);
      if (!nearest.distance) return;
      if (nearest.distance < 200) scout.mode = 'nearestMiner';
      if (scout.mode === 'centroid') this.moveToPosition(scout, centroid);
      else if (scout.mode === 'nearestMiner')
        this.moveToPosition(scout, nearest.miner.sprite);
    });
  }

  moveToPosition(scout, position) {
    const radians = ioc.game.phaserGame.physics.arcade.angleBetween(scout.sprite, position);
    const degrees = ioc.game.phaserGame.math.radToDeg(radians);
    scout.sprite.angle = degrees;
    ioc.game.phaserGame.physics.arcade.velocityFromAngle(
      degrees, 200, scout.sprite.body.velocity);
  }

  nearestMiner(scout) {
    let distance;
    let miner;
    for (let i=0; i<minerService.miners.length; i++) {
      let m = minerService.miners[i];
      if (!distance) {
        distance = ioc.game.phaserGame.math.distance(
          m.sprite.x,
          m.sprite.y,
          scout.sprite.x,
          scout.sprite.y
        );
        miner = m;
        break;
      } else {
        let d = ioc.game.phaserGame.math.distance(
          m.sprite.x,
          m.sprite.y,
          scout.sprite.x,
          scout.sprite.y
        );
        if (d < distance) {
          distance = d;
          miner = m;
          break;
        }
      }
    }
    return { distance, miner };
  }

  spawn(x, y) {
    const scout = new Scout(x, y);
    this.scouts.push(scout);
  }

  attack() {
    this.scouts.forEach(scout => {
      ioc.minerService.miners.forEach(miner => {
        ioc.game.phaserGame.physics.arcade.collide(
          scout.sprite,
          miner.sprite,
          () => {
            ioc.minerService.attack(miner);
          }
        );
      });
    });
  }

}

module.exports = new ScoutService();
module.exports.ScoutService = ScoutService;
