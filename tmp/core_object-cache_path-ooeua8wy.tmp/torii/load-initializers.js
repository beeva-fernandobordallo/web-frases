define('torii/load-initializers', ['exports', 'torii/lib/load-initializer', 'torii/lib/load-instance-initializer', 'torii/initializers/initialize-torii', 'torii/initializers/initialize-torii-callback', 'torii/initializers/initialize-torii-session', 'torii/instance-initializers/setup-routes', 'torii/instance-initializers/walk-providers'], function (exports, loadInitializer, loadInstanceInitializer, initializeTorii, initializeToriiCallback, initializeToriiSession, setupRoutes, walkProviders) {

  'use strict';

  exports['default'] = function(){
    loadInitializer['default'](initializeToriiCallback['default']);
    loadInitializer['default'](initializeTorii['default']);
    loadInitializer['default'](initializeToriiSession['default']);
    loadInstanceInitializer['default'](walkProviders['default']);
    loadInstanceInitializer['default'](setupRoutes['default']);
  }

});