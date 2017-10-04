
const ioc = require('../ioc');
const Scout = require('./Scout');

class ScoutService {

  reset() {
    ioc.state.enemies = ioc.state.enemies || [];
    ioc.state.enemies = ioc.state.enemies.filter(enemy => enemy.type !== 'scout');
    this.scouts = [];
  }

  spawn(x, y) {
    const scout = new Scout(x, y);
    ioc.state.enemies.push(scout);
    this.scouts.push(scout);
  }

}

module.exports = new ScoutService();
module.exports.ScoutService = ScoutService;
