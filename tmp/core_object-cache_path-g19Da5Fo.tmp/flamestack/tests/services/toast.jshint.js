define('flamestack/tests/services/toast.jshint', function () {

  'use strict';

  QUnit.module('JSHint - services');
  QUnit.test('services/toast.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'services/toast.js should pass jshint.\nservices/toast.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nservices/toast.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});