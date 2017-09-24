
class Camera {

	constructor(game) {
		this.game = game;
		this.isDragging = false;
		this.dragFromX = null;
		this.dragFromY = null;
	}

	create() {
		this.game.camera.x = this.game.world.centerX - this.game.width/2;
		this.game.camera.y = this.game.world.centerY - this.game.height/2;
		this.game.input.mouse.capture = true;
	}

	update() {
		const mouseX = this.game.input.activePointer.x;
		const mouseY = this.game.input.activePointer.y;
		if (this.game.input.activePointer.leftButton.isDown) {
			if (!this.isDragging) {
				// console.log(`Start dragging: (${mouseX}, ${mouseY})`);
				this.isDragging = true;
				this.dragFromX = mouseX;
				this.dragFromY = mouseY;
			} else {
				const diffX = this.dragFromX - mouseX;
				const diffY = this.dragFromY - mouseY;
				this.game.camera.x += diffX;
				this.game.camera.y += diffY;
				this.dragFromX = mouseX;
				this.dragFromY = mouseY;
			}
		} else {
			if (this.isDragging) {
				// console.log(`Stopped dragging: (${mouseX}, ${mouseY})`);
				this.isDragging = false;
			}
		}
	}

}

module.exports = Camera;
