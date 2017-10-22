
const ioc = require('../../ioc');

class GameOverState {

  create() {
    const style = {
      font: 'bold 50px Arial',
      fill: '#ccc',
      boundsAlignH: 'center',
      boundsAlignV: 'middle'
    };

    const mapStateStart = ioc.state.mapStateStart;
    const mapStateEnd = ioc.state.mapStateEnd;
    const diff = mapStateEnd - mapStateStart;

    let text = 'Game Over';
    text += '\n';
    text += `Points: ${diff}`;

    this.gameOverText = ioc.game.phaserGame.add.text(35, 8, text, style);
    this.gameOverText.fixedToCamera = true;
    this.gameOverText.setTextBounds(0, 0, ioc.game.width, ioc.game.height);
  }

  update() {
    if (ioc.game.phaserGame.input.activePointer.isDown) {
      ioc.game.reset();
    }
  }

}

module.exports = new GameOverState();
module.exports.GameOverState = GameOverState;
