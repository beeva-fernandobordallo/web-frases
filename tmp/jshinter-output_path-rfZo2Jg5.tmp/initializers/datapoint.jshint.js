QUnit.module('JSHint - initializers');
QUnit.test('initializers/datapoint.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'initializers/datapoint.js should pass jshint.\ninitializers/datapoint.js: line 1, col 1, \'export\' is only available in ES6 (use esnext option).\ninitializers/datapoint.js: line 7, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
});
