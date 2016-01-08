define('flamestack/tests/unit/initializers/animate-test', ['ember', 'flamestack/initializers/animate', 'qunit'], function (Ember, animate, qunit) {

  'use strict';

  var registry, application;

  qunit.module('Unit | Initializer | animate', {
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
    animate.initialize(registry, application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });

});