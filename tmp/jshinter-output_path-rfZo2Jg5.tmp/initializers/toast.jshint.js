QUnit.module('JSHint - initializers');
QUnit.test('initializers/toast.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'initializers/toast.js should pass jshint.\ninitializers/toast.js: line 1, col 1, \'export\' is only available in ES6 (use esnext option).\ninitializers/toast.js: line 7, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
});
