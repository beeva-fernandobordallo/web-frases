define('flamestack/initializers/initialize-torii-session', ['exports', 'torii/configuration', 'torii/bootstrap/session'], function (exports, configuration, bootstrapSession) {

  'use strict';

  exports['default'] = {
    name: 'torii-session',
    after: 'torii',

    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      if (configuration['default'].sessionServiceName) {
        bootstrapSession['default'](application, configuration['default'].sessionServiceName);

        var sessionFactoryName = 'service:' + configuration['default'].sessionServiceName;
        application.inject('adapter', configuration['default'].sessionServiceName, sessionFactoryName);
      }
    }
  };

});