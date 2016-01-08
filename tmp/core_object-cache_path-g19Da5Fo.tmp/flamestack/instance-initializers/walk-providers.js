define('flamestack/instance-initializers/walk-providers', ['exports', 'torii/configuration', 'torii/lib/container-utils'], function (exports, configuration, container_utils) {

  'use strict';

  exports['default'] = {
    name: 'torii-walk-providers',
    initialize: function initialize(applicationInstance) {
      // Walk all configured providers and eagerly instantiate
      // them. This gives providers with initialization side effects
      // like facebook-connect a chance to load up assets.
      for (var key in configuration['default'].providers) {
        if (configuration['default'].providers.hasOwnProperty(key)) {
          container_utils.lookup(applicationInstance, 'torii-provider:' + key);
        }
      }
    }
  };

});