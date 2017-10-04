
const ioc = require('../ioc');

class Hud {

  preload() {
  }

  create() {
    this.ironCounterIcon = ioc.game.add.sprite(10, 10, 'iron');
    this.ironCounterIcon.fixedToCamera = true;
    this.ironCounterIcon.width = 20;
    this.ironCounterIcon.height = 20;
    this.ironCounterText = ioc.game.add.text(35, 8, ioc.state.home.resources.iron, {
      font: "20px Arial",
      fill: "#ccc",
      align: "center"
    });
    this.ironCounterText.fixedToCamera = true;
  }

  update() {
    this.ironCounterText.setText(ioc.state.home.resources.iron);
  }

}

module.exports = new Hud();
module.exports.Hud = Hud;
