
const ioc = require('../ioc');

class Iron {

  preload() {
    ioc.game.load.image('iron', 'assets/images/iron_50x50.png');
  }

  create() {
    this.maxMassProgressBarWidth = 50;
  }

  update() {
    ioc.state.resources.forEach(resource => {
      // mass progress bar
      resource.massProgressBar.x = resource.sprite.x-resource.sprite.width/2;
      resource.massProgressBar.y = resource.sprite.y-resource.sprite.height/2-20;
      resource.massProgressBar.width=
        resource.mass
        * this.maxMassProgressBarWidth
        / resource.massCapacity;
    });
  }

  spawn(x, y, mass) {
    // create resource
    const sprite = ioc.game.add.sprite(x, y, 'iron');
    sprite.anchor.setTo(0.5, 0.5);
    ioc.state.resources = ioc.state.resources || [];
    const resource = {
      mass,
      massCapacity: mass,
      sprite,
      type: 'iron'
    };
    ioc.state.resources.push(resource);

    // mass progress bar
    const massProgressBar = ioc.game.add.image(
      sprite.x,
      sprite.y,
      'progress-bar-neutral'
    );
    massProgressBar.width = 0;
    massProgressBar.height = 10;
    resource.massProgressBar = massProgressBar;
  }

}

module.exports = new Iron();
module.exports.Iron = Iron;
