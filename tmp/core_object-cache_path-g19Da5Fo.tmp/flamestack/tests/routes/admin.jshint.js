define('flamestack/tests/routes/admin.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/admin.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'routes/admin.js should pass jshint.\nroutes/admin.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/admin.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\nroutes/admin.js: line 46, col 118, Missing semicolon.\n\n3 errors'); 
  });

});