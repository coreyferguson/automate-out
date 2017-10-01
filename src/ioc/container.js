
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
container.miner = require('../construction/miner');
container.minerUserImpl = require('../user/minerFirstImpl');

// State: Map
container.mapState = require('../game/states/mapState');
container.mapStates = [
	require('../hud/construction'),
	require('../camera'),
	require('../home'),
	require('../construction/miner'),
	require('../resources/iron')
];
