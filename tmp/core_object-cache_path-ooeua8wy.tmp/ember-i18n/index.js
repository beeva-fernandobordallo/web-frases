define('ember-i18n/index', ['exports', 'ember-i18n/utils/i18n/compile-template', 'ember-i18n/services/i18n', 'ember-i18n/utils/macro'], function (exports, compileTemplate, Service, translationMacro) {

	'use strict';



	exports.compileTemplate = compileTemplate['default'];
	exports.Service = Service['default'];
	exports.translationMacro = translationMacro['default'];

});