QUnit.module('JSHint - services');
QUnit.test('services/animate.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'services/animate.js should pass jshint.\nservices/animate.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nservices/animate.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
});
