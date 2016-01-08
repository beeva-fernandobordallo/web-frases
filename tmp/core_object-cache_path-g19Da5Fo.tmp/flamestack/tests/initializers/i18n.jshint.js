define('flamestack/tests/initializers/i18n.jshint', function () {

  'use strict';

  QUnit.module('JSHint - initializers');
  QUnit.test('initializers/i18n.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'initializers/i18n.js should pass jshint.\ninitializers/i18n.js: line 1, col 1, \'export\' is only available in ES6 (use esnext option).\ninitializers/i18n.js: line 5, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});