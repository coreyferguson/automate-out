
const container = require('./ioc');

container.game = require('../game');
container.levels = [
	require('../levels/0001.json')
];

// Resources
container.resources = [
	require('../resources/iron')
];

// Construction
container.forkLift = require('../construction/forkLift');
container.forkLiftUserImpl = require('../user/forkLiftFirstImpl');

// State: Map
container.mapState = require('../game/states/mapState');
container.mapStates = [
	require('../hud/construction'),
	require('../camera'),
	require('../home'),
	require('../construction/forkLift'),
	require('../resources/iron')
];
