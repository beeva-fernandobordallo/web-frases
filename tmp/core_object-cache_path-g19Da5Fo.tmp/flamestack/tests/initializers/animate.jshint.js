define('flamestack/tests/initializers/animate.jshint', function () {

  'use strict';

  QUnit.module('JSHint - initializers');
  QUnit.test('initializers/animate.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'initializers/animate.js should pass jshint.\ninitializers/animate.js: line 1, col 1, \'export\' is only available in ES6 (use esnext option).\ninitializers/animate.js: line 6, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});