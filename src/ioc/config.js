
const container = require('./container');

container.config = require('../config');
container.game = require('../game');
container.cosmos = require('../game/cosmos');

// User Impl
container.buildQueueUserImpl = require('../user/buildQueueCoreyImpl');
container.minerUserImpl = require('../user/minerZoeImpl');

// State: Map
container.state = {}; // state given to user components
container.mapState = require('../game/phaserStates/mapState');
// TODO: render mapStates in reverse order
container.mapStates = [
  require('../game/gameStates/camera'),
  require('../game/gameStates/hud'),
  require('../game/gameStates/home'),
  require('../game/gameStates/ships/miner'),
  require('../game/gameStates/enemies/scout'),
  require('../game/gameStates/resources/iron'),
  require('../game/gameStates/resources/energy'),
];

// Home
container.homeService = require('../game/gameStates/home/homeService');
container.homeVirtualStateAssembler  = require('../game/gameStates/home/homeVirtualStateAssembler');
container.homeConstructions = [
  require('../game/gameStates/ships/miner/MinerHomeConstruction')
];

// Ship: Miner
container.minerService = require('../game/gameStates/ships/miner/minerService');
container.minerVirtualStateAssembler = require('../game/gameStates/ships/miner/minerVirtualStateAssembler')

// Resource: Iron
container.ironService = require('../game/gameStates/resources/iron/ironService');
container.ironVirtualStateAssembler = require('../game/gameStates/resources/iron/ironVirtualStateAssembler');
// Resource: Energy
container.energyService = require('../game/gameStates/resources/energy/energyService');
container.energyVirtualStateAssembler = require('../game/gameStates/resources/energy/energyVirtualStateAssembler');

// Enemy: Scout
container.scoutService = require('../game/gameStates/enemies/scout/scoutService');
container.scoutVirtualStateAssembler = require('../game/gameStates/enemies/scout/scoutVirtualStateAssembler');
