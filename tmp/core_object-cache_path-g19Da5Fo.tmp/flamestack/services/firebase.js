define('flamestack/services/firebase', ['exports', 'emberfire/services/firebase', 'flamestack/config/environment'], function (exports, Firebase, config) {

	'use strict';

	Firebase['default'].config = config['default'];

	exports['default'] = Firebase['default'];

});