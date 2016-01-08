QUnit.module('JSHint - locales/es');
QUnit.test('locales/es/translations.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'locales/es/translations.js should pass jshint.\nlocales/es/translations.js: line 1, col 1, \'export\' is only available in ES6 (use esnext option).\n\n1 error'); 
});
