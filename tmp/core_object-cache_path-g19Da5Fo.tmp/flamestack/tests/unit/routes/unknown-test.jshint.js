define('flamestack/tests/unit/routes/unknown-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/unknown-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'unit/routes/unknown-test.js should pass jshint.'); 
  });

});