define('flamestack/router', ['exports', 'ember', 'flamestack/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('unknown', { path: "*path" });
    this.route('login');
    this.route('admin');
  });

  exports['default'] = Router;

});