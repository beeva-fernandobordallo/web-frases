define('flamestack/tests/unit/initializers/toast-test', ['ember', 'flamestack/initializers/toast', 'qunit'], function (Ember, toast, qunit) {

  'use strict';

  var registry, application;

  qunit.module('Unit | Initializer | toast', {
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
    toast.initialize(registry, application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });

});