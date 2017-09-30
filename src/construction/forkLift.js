
const ioc = require('../ioc');

class ForkLift {

  preload() {
    ioc.game.load.image('forkLift', 'assets/images/forkLift.png');
  }

  create() {
    this.sprites = [];
  }

  update() {
    if (ioc.forkLiftUserImpl.getVector && this.sprites.length > 0) {
      this.sprites.forEach(sprite => {
        const resources = ioc.resources.reduce((resources, resource) => {
          return resources.concat(resource.sprites);
        }, []);
        const game = {
          space: { resources },
          physics: ioc.game.physics,
          math: ioc.game.math
        };
        const vector = ioc.forkLiftUserImpl.getVector(game, sprite);
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

  spawn() {
    let sprite = ioc.game.add.sprite(
      ioc.game.world.centerX,
      ioc.game.world.centerY,
      'forkLift'
    );
    sprite.anchor.setTo(0.5, 0.5);
    ioc.game.physics.enable(sprite, Phaser.Physics.ARCADE);
    this.sprites.push(sprite);
  }

}

module.exports = new ForkLift();
module.exports.ForkLift = ForkLift;
