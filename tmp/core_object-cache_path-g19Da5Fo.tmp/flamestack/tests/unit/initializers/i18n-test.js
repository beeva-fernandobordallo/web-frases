define('flamestack/tests/unit/initializers/i18n-test', ['ember', 'flamestack/initializers/i18n', 'qunit'], function (Ember, i18n, qunit) {

  'use strict';

  var registry, application;

  qunit.module('Unit | Initializer | i18n', {
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
    i18n.initialize(registry, application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });

});