
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
container.forkLift = require('../construction/forkLift');
container.forkLiftUserImpl = require('../user/forkLiftCoreyImpl');

// State: Level Announcement
container.levelTitleState = require('../game/states/levelTitleState');

// State: Map
container.mapState = require('../game/states/mapState');
container.mapStates = [
  require('../hud/construction'),
  require('../camera'),
  require('../shuttle'),
  require('../construction/forkLift'),
  require('../resources/iron')
];
