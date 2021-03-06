define('torii/routing/authenticated-route-mixin', ['exports', 'torii/configuration'], function (exports, configuration) {

  'use strict';

  exports['default'] = Ember.Mixin.create({
    beforeModel: function (transition) {
      var route = this;
      var superBefore = this._super.apply(this, arguments);
      if (superBefore && superBefore.then) {
        return superBefore.then(function() {
          return route.authenticate(transition);
        });
      } else {
        return route.authenticate(transition);
      }
    },
    authenticate: function (transition) {
      var route = this,
        session = this.get(configuration['default'].sessionServiceName),
        isAuthenticated = this.get(configuration['default'].sessionServiceName + '.isAuthenticated'),
        hasAttemptedAuth = isAuthenticated !== undefined;

      if (!isAuthenticated) {
        session.attemptedTransition = transition;

        if (hasAttemptedAuth) {
          return route.accessDenied(transition);
        } else {
          return session.fetch()
            .catch(function() {
              return route.accessDenied(transition);
            });
        }
      } else {
        // no-op; cause the user is already authenticated
        return Ember.RSVP.resolve();
      }
    },
    accessDenied: function (transition) {
      transition.send('accessDenied');
    }
  });

});