QUnit.module('JSHint - torii-adapters');
QUnit.test('torii-adapters/application.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'torii-adapters/application.js should pass jshint.\ntorii-adapters/application.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\ntorii-adapters/application.js: line 3, col 1, \'import\' is only available in ES6 (use esnext option).\ntorii-adapters/application.js: line 6, col 1, \'export\' is only available in ES6 (use esnext option).\n\n3 errors'); 
});
