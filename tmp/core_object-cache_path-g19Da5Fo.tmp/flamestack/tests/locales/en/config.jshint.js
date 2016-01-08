define('flamestack/tests/locales/en/config.jshint', function () {

  'use strict';

  QUnit.module('JSHint - locales/en');
  QUnit.test('locales/en/config.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'locales/en/config.js should pass jshint.\nlocales/en/config.js: line 5, col 1, \'export\' is only available in ES6 (use esnext option).\n\n1 error'); 
  });

});