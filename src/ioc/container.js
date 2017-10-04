
const container = require('./ioc');

container.game = require('../game');
container.world = require('../world');

// Home
container.home = require('../home');
container.homeConstructions = [
  require('../ships/miner')
];

// User Impl
container.buildQueueUserImpl = require('../user/buildQueueCoreyImpl');
container.minerUserImpl = require('../user/minerCoreyImpl');

// Resources
container.resources = [
  require('../resources/iron')
];

// State: Map
container.state = {};
container.mapState = require('../game/states/mapState');
container.mapStates = [
  require('../camera'),
  require('../home'),
  require('../resources/iron'),
  require('../ships/miner'),
  require('../enemies/scoutGameState'),
  require('../ships/scout'),
  require('../hud/hud')
];
