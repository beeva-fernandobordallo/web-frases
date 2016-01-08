QUnit.module('JSHint - helpers');
QUnit.test('helpers/role-level.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'helpers/role-level.js should pass jshint.\nhelpers/role-level.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nhelpers/role-level.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\nhelpers/role-level.js: line 11, col 20, Use \'===\' to compare with \'0\'.\nhelpers/role-level.js: line 18, col 1, \'export\' is only available in ES6 (use esnext option).\n\n4 errors'); 
});
