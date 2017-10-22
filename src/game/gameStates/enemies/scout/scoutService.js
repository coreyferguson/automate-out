
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
    this.updateModes();
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
      let nearestMiner = this.nearestMiner(scout)
      if (scout.mode === 'centroid') this.moveToPosition(scout, centroid);
      else if (scout.mode === 'nearestMiner')
        this.moveToPosition(scout, nearestMiner.miner.sprite);
      else if (scout.mode === 'home')
        this.moveToPosition(scout, ioc.homeService.home.sprite);
    });
  }

  updateModes() {
    this.scouts.forEach(scout => {
      let nearestMiner = this.nearestMiner(scout);
      if (!nearestMiner && ioc.homeService.home)
        scout.mode = 'home';
      else if (nearestMiner && nearestMiner.distance < 200)
        scout.mode = 'nearestMiner'
      else if (nearestMiner && nearestMiner.distance >= 200)
        scout.mode = 'centroid';
      else
        scout.mode = undefined;
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
    if (!distance) return undefined;
    else return { distance, miner };
  }

  spawn(x, y) {
    const scout = new Scout(x, y);
    this.scouts.push(scout);
  }

  attack() {
    this.scouts.forEach(scout => {
      // attack miners
      ioc.minerService.miners.forEach(miner => {
        ioc.game.phaserGame.physics.arcade.collide(
          scout.sprite,
          miner.sprite,
          () => {
            ioc.minerService.attack(miner);
          }
        );
      });
      // attack home
      if (ioc.homeService.home) {
        ioc.game.phaserGame.physics.arcade.collide(
          scout.sprite,
          ioc.homeService.home.sprite,
          () => {
            ioc.homeService.attack()
          }
        );
      }
    });
  }

}

module.exports = new ScoutService();
module.exports.ScoutService = ScoutService;
