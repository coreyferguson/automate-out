
const ioc = require('../ioc');

class Miner {

  preload() {
    ioc.game.load.image('miner', 'assets/ships/miner_60x100.png');
  }

  create() {
    this.sprites = [];
  }

  update() {
    if (ioc.minerUserImpl.getVector && this.sprites.length > 0) {
      this.sprites.forEach(sprite => {
        const resources = ioc.state.resources;
        const game = {
          space: { resources },
          physics: ioc.game.physics,
          math: ioc.game.math
        };
        const vector = ioc.minerUserImpl.getVector(game, sprite);
        sprite.angle = vector.direction;
        sprite.body.velocity.x = 0;
        sprite.body.velocity.y = 0;
        if (vector) {
          if (vector.magnitude > 100) vector.magnitude = 100;
          if (vector.magnitude < 0) vector.magnitude = 0;
          if (vector.magnitude > 0) {
            ioc.game.physics.arcade.velocityFromAngle(
              vector.direction, vector.magnitude, sprite.body.velocity);
          }
        }
      });
    }
  }

  spawn(x, y) {
    let sprite = ioc.game.add.sprite(
      x,
      y,
      'miner'
    );
    sprite.scale.setTo(0.5, 0.5);
    sprite.anchor.setTo(0.5, 0.5);
    ioc.game.physics.enable(sprite, Phaser.Physics.ARCADE);
    this.sprites.push(sprite);
  }

}

module.exports = new Miner();
module.exports.Miner = Miner;
