define('flamestack/tests/controllers/admin.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/admin.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'controllers/admin.js should pass jshint.\ncontrollers/admin.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\ncontrollers/admin.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\ncontrollers/admin.js: line 87, col 11, Missing semicolon.\n\n3 errors'); 
  });

});