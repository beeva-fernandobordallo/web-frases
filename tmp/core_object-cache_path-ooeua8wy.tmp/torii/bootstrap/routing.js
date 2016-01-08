define('torii/bootstrap/routing', ['exports', 'torii/routing/application-route-mixin', 'torii/routing/authenticated-route-mixin', 'torii/lib/container-utils'], function (exports, ApplicationRouteMixin, AuthenticatedRouteMixin, container_utils) {

  'use strict';

  var AuthenticatedRoute = null;

  function reopenOrRegister(applicationInstance, factoryName, mixin) {
    var factory = container_utils.lookup(applicationInstance, factoryName);
    var basicFactory;

    if (factory) {
      factory.reopen(mixin);
    } else {
      basicFactory = container_utils.lookupFactory(applicationInstance, 'route:basic');
      if (!AuthenticatedRoute) {
        AuthenticatedRoute = basicFactory.extend(AuthenticatedRouteMixin['default']);
      }
      container_utils.register(applicationInstance, factoryName, AuthenticatedRoute);
    }
  }

  exports['default'] = function(applicationInstance, authenticatedRoutes){
    reopenOrRegister(applicationInstance, 'route:application', ApplicationRouteMixin['default']);
    for (var i = 0; i < authenticatedRoutes.length; i++) {
      var routeName = authenticatedRoutes[i];
      var factoryName = 'route:' + routeName;
      reopenOrRegister(applicationInstance, factoryName, AuthenticatedRouteMixin['default']);
    }
  }

});