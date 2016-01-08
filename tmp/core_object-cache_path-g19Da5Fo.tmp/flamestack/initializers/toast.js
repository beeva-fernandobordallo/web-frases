define('flamestack/initializers/toast', ['exports'], function (exports) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    application.inject('route', 'Toast', 'service:toast');
    application.inject('controller', 'Toast', 'service:toast');
    application.inject('service:datapoint', 'Toast', 'service:toast');
  }

  exports['default'] = {
    name: 'toast',
    initialize: initialize
  };

});