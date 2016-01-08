define('flamestack/tests/unit/helpers/role-level-test', ['flamestack/helpers/role-level', 'qunit'], function (role_level, qunit) {

  'use strict';

  qunit.module('Unit | Helper | role level');

  // Replace this with your real tests.
  qunit.test('it works', function (assert) {
    var result = role_level.roleLevel(42);
    assert.ok(result);
  });

});