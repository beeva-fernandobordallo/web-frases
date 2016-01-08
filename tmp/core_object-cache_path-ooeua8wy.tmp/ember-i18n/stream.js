define('ember-i18n/stream', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	var streamModule = Ember['default'].__loader.require('ember-metal/streams/stream');
	exports['default'] = streamModule.Stream || streamModule['default'];
	var readHash = Ember['default'].__loader.require('ember-metal/streams/utils').readHash;

	exports.readHash = readHash;

});