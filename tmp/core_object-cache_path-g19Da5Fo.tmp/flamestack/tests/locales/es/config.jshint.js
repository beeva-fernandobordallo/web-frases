define('flamestack/tests/locales/es/config.jshint', function () {

  'use strict';

  QUnit.module('JSHint - locales/es');
  QUnit.test('locales/es/config.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'locales/es/config.js should pass jshint.\nlocales/es/config.js: line 5, col 1, \'export\' is only available in ES6 (use esnext option).\n\n1 error'); 
  });

});