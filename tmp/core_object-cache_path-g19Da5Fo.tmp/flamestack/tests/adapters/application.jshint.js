define('flamestack/tests/adapters/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass jshint.\nadapters/application.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nadapters/application.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\nadapters/application.js: line 4, col 1, \'const\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nadapters/application.js: line 4, col 1, \'destructuring expression\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\nadapters/application.js: line 6, col 1, \'export\' is only available in ES6 (use esnext option).\n\n5 errors'); 
  });

});