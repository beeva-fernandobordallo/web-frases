QUnit.module('JSHint - routes');
QUnit.test('routes/login.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'routes/login.js should pass jshint.\nroutes/login.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/login.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
});
