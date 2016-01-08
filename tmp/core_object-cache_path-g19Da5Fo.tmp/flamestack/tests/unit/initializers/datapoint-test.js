define('flamestack/tests/unit/initializers/datapoint-test', ['ember', 'flamestack/initializers/datapoint', 'qunit'], function (Ember, datapoint, qunit) {

  'use strict';

  var registry, application;

  qunit.module('Unit | Initializer | datapoint', {
    beforeEach: function beforeEach() {
      Ember['default'].run(function () {
        application = Ember['default'].Application.create();
        registry = application.registry;
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  qunit.test('it works', function (assert) {
    datapoint.initialize(registry, application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });

});