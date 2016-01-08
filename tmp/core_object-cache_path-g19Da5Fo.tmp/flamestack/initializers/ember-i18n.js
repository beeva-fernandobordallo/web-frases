define('flamestack/initializers/ember-i18n', ['exports', 'flamestack/instance-initializers/ember-i18n'], function (exports, instanceInitializer) {

  'use strict';

  exports['default'] = {
    name: instanceInitializer['default'].name,

    initialize: function initialize() {
      var application = arguments[1] || arguments[0]; // depending on Ember version
      if (application.instanceInitializer) {
        return;
      }

      instanceInitializer['default'].initialize(application);
    }
  };

});