define('flamestack/tests/locales/en/translations.jshint', function () {

  'use strict';

  QUnit.module('JSHint - locales/en');
  QUnit.test('locales/en/translations.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'locales/en/translations.js should pass jshint.\nlocales/en/translations.js: line 1, col 1, \'export\' is only available in ES6 (use esnext option).\n\n1 error'); 
  });

});