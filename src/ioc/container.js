
const container = require('./ioc');

container.game = require('../game');
container.levels = require('../levels');

// State: Map
container.mapState = require('../game/states/mapState');
container.mapStates = [
	require('../shuttle')
];
