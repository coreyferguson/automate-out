
const container = require('./ioc');

container.game = require('../game');
container.levels = [
	require('../levels/0001.json')
];

// State: Map
container.mapState = require('../game/states/mapState');
container.mapStates = [
	require('../shuttle'),
	require('../camera'),
	require('../resources/iron')
];
