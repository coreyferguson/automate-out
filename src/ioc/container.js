
const container = require('./ioc');

container.game = require('../game');
container.levels = [
	require('../levels/0001.json')
];

// Construction
container.forkLift = require('../construction/forkLift');

// State: Map
container.mapState = require('../game/states/mapState');
container.mapStates = [
	require('../hud/construction'),
	require('../camera'),
	require('../shuttle'),
	require('../construction/forkLift'),
	require('../resources/iron')
];
