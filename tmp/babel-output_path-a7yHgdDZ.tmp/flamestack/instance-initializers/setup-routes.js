import configuration from 'torii/configuration';
import bootstrapRouting from 'torii/bootstrap/routing';
import "torii/router-dsl-ext";

export default {
  name: 'torii-setup-routes',
  initialize: function initialize(applicationInstance, registry) {
    if (configuration.sessionServiceName) {
      var router = applicationInstance.get('router');
      var setupRoutes = function setupRoutes() {
        var authenticatedRoutes = router.router.authenticatedRoutes;
        var hasAuthenticatedRoutes = !Ember.isEmpty(authenticatedRoutes);
        if (hasAuthenticatedRoutes) {
          bootstrapRouting(applicationInstance, authenticatedRoutes);
        }
        router.off('willTransition', setupRoutes);
      };
      router.on('willTransition', setupRoutes);
    }
  }
};