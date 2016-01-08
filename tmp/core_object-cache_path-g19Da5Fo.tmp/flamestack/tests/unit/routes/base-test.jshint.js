define('flamestack/tests/unit/routes/base-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/base-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'unit/routes/base-test.js should pass jshint.'); 
  });

});