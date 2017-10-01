
const container = require('./ioc');

container.game = require('../game');
container.level = 0;
container.levels = [
  require('../levels/0001'),
  require('../levels/0002')
];

// Resources
container.resources = [
  require('../resources/iron')
];

// Construction
container.miner = require('../construction/miner');
container.minerUserImpl = require('../user/minerCoreyImpl');

// State: Map
container.mapState = require('../game/states/mapState');
container.mapStates = [
  require('../hud/construction'),
  require('../camera'),
  require('../home'),
  require('../construction/miner'),
  require('../resources/iron')
];
