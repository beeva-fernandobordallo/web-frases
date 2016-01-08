define('flamestack/tests/services/datapoint.jshint', function () {

  'use strict';

  QUnit.module('JSHint - services');
  QUnit.test('services/datapoint.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'services/datapoint.js should pass jshint.\nservices/datapoint.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nservices/datapoint.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\nservices/datapoint.js: line 69, col 31, [\'login\'] is better written in dot notation.\nservices/datapoint.js: line 74, col 32, [\'login\'] is better written in dot notation.\nservices/datapoint.js: line 244, col 21, \'arrData\' is already defined.\nservices/datapoint.js: line 246, col 21, \'arrData\' is already defined.\nservices/datapoint.js: line 251, col 21, \'arrData\' used out of scope.\nservices/datapoint.js: line 252, col 90, \'arrData\' used out of scope.\nservices/datapoint.js: line 254, col 61, \'arrData\' used out of scope.\nservices/datapoint.js: line 397, col 8, Unnecessary semicolon.\nservices/datapoint.js: line 430, col 8, Unnecessary semicolon.\n\n11 errors'); 
  });

});