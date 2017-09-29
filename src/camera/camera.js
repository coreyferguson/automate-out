
const ioc = require('../ioc');

class Camera {

	constructor(game) {
		this.isDragging = false;
		this.dragFromX = null;
		this.dragFromY = null;
	}

	preload() {
	}

	create() {
		ioc.game.camera.x = ioc.game.world.centerX - ioc.game.width/2;
		ioc.game.camera.y = ioc.game.world.centerY - ioc.game.height/2;
		ioc.game.input.mouse.capture = true;
	}

	update() {
		const mouseX = ioc.game.input.activePointer.x;
		const mouseY = ioc.game.input.activePointer.y;
		if (ioc.game.input.activePointer.leftButton.isDown) {
			if (!this.isDragging) {
				this.isDragging = true;
				this.dragFromX = mouseX;
				this.dragFromY = mouseY;
			} else {
				const diffX = this.dragFromX - mouseX;
				const diffY = this.dragFromY - mouseY;
				ioc.game.camera.x += diffX;
				ioc.game.camera.y += diffY;
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

module.exports = new Camera();
module.exports.Camera = Camera;
