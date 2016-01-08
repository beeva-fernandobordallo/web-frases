define('torii/instance-initializers/setup-routes', ['exports', 'torii/configuration', 'torii/bootstrap/routing', 'torii/router-dsl-ext'], function (exports, configuration, bootstrapRouting) {

  'use strict';

  exports['default'] = {
    name: 'torii-setup-routes',
    initialize: function(applicationInstance, registry){
      if (configuration['default'].sessionServiceName) {
        var router = applicationInstance.get('router');
        var setupRoutes = function(){
          var authenticatedRoutes = router.router.authenticatedRoutes;
          var hasAuthenticatedRoutes = !Ember.isEmpty(authenticatedRoutes);
          if (hasAuthenticatedRoutes) {
            bootstrapRouting['default'](applicationInstance, authenticatedRoutes);
          }
          router.off('willTransition', setupRoutes);
        };
        router.on('willTransition', setupRoutes);
      }
    }
  };

});