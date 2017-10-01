
const container = require('./ioc');

container.game = require('../game');
container.world = require('../world');

// Resources
container.resources = [
  require('../resources/iron')
];

// Ships
container.miner = require('../ships/miner');
container.minerUserImpl = require('../user/minerCoreyImpl');

// State: Map
container.state = {};
container.mapState = require('../game/states/mapState');
container.mapStates = [
  require('../camera'),
  require('../home'),
  require('../resources/iron'),
  require('../ships/miner')
];
