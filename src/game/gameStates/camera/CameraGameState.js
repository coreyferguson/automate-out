
const ioc = require('../../../ioc');

class Camera {

  preload() {
  }

  create() {
    this.isDragging = false;
    this.dragFromX = null;
    this.dragFromY = null;
    ioc.game.phaserGame.camera.x = ioc.game.phaserGame.world.centerX - ioc.game.phaserGame.width/2;
    ioc.game.phaserGame.camera.y = ioc.game.phaserGame.world.centerY - ioc.game.phaserGame.height/2;
    ioc.game.phaserGame.input.mouse.capture = true;
  }

  update() {
    const mouseX = ioc.game.phaserGame.input.activePointer.x;
    const mouseY = ioc.game.phaserGame.input.activePointer.y;
    if (ioc.game.phaserGame.input.activePointer.leftButton.isDown) {
      if (!this.isDragging) {
        this.isDragging = true;
        this.dragFromX = mouseX;
        this.dragFromY = mouseY;
      } else {
        const diffX = this.dragFromX - mouseX;
        const diffY = this.dragFromY - mouseY;
        ioc.game.phaserGame.camera.x += diffX;
        ioc.game.phaserGame.camera.y += diffY;
        this.dragFromX = mouseX;
        this.dragFromY = mouseY;
      }
    } else {
      if (this.isDragging) {
        this.isDragging = false;
      }
    }
  }

}

module.exports = Camera;
