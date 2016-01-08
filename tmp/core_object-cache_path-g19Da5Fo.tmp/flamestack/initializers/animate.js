define('flamestack/initializers/animate', ['exports'], function (exports) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    application.inject('route', 'Animate', 'service:animate');
    application.inject('controller', 'Animate', 'service:animate');
    application.inject('service:datapoint', 'Animate', 'service:animate');
  }

  exports['default'] = {
    name: 'animate',
    initialize: initialize
  };

});