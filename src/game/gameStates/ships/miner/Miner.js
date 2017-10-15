
const ioc = require('../../../../ioc');

class Miner {

  constructor(x, y) {
    this.type = 'miner';
    this.sprite = ioc.game.phaserGame.add.sprite(x, y, 'miner');
    this.sprite.scale.setTo(0.25, 0.25);
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.enableBody = true;
    ioc.game.phaserGame.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.resources = {
      iron: 0,
      energy: 0
    };
    this.massCapacity = 5;
    this.massConsumptionPerSecond = 1;
    this.fuel = 5000;
    this.fuelConsumptionPerSecond = 1;
    this.fuelCapacity = 5000;
  }

  velocity(velocity) {
    // point sprite in right direction
    // const angleInDegrees = ioc.game.phaserGame.math.radToDeg(velocity.angle);
    this.sprite.angle = velocity.angle;
    // remove current velocity
    this.sprite.body.velocity.x = 0;
    this.sprite.body.velocity.y = 0;
    if (this.fuel > 0) {
      // move miner
      // speed limits: 0 <= speed <= 100
      if (velocity.speed > 100) velocity.speed = 100;
      if (velocity.speed < 0) velocity.speed = 0;
      if (velocity.speed > 0) {
        ioc.game.phaserGame.physics.arcade.velocityFromAngle(
          velocity.angle, velocity.speed, this.sprite.body.velocity);
      }
      // consume energy
      this.fuel -= velocity.speed / 100;
      if (this.fuel < 0) this.fuel = 0;
    }
  }

  collectResources() {
    let mass = this.calculateCurrentMass();
    const resources = ioc.ironService.irons.concat(ioc.energyService.energies);
    if (mass < this.massCapacity) {
      resources.forEach(resource => {
        if (Phaser.Rectangle.intersects(this.sprite, resource.sprite)) {
          if (resource.mass > 0) {
            const type = resource.type;
            this.resources[type] = this.resources[type] || 0;
            this.resources[type] += this.massConsumptionPerSecond;
            resource.mass -= this.massConsumptionPerSecond;
          }
        }
      });
    }
    // 1 energy = 1000 fuel
    if (this.fuel < this.fuelCapacity) {
      const home = ioc.homeService.home;
      if (Phaser.Rectangle.intersects(this.sprite, home.sprite)) {
        if (home.resources.energy > 0) {
          home.resources.energy -= this.fuelConsumptionPerSecond;
          this.fuel += 1000;
        }
      }
    }
  }

  dropResources() {
    let mass = this.calculateCurrentMass();
    const home = ioc.homeService.home;
    if (mass > 0) {
      if (Phaser.Rectangle.intersects(this.sprite, home.sprite)) {
        for (let resourceName in this.resources) {
          if (this.resources[resourceName] > 0) {
            home.resources[resourceName] += this.massConsumptionPerSecond;
            this.resources[resourceName] -= this.massConsumptionPerSecond;
            break;
          }
        }
      }
    }
  }

  calculateCurrentMass() {
    let mass = 0;
    for (let resourceName in this.resources) {
      mass += this.resources[resourceName];
    }
    return mass;
  }

}

module.exports = Miner;
