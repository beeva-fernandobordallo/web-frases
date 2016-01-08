define('flamestack/initializers/datapoint', ['exports'], function (exports) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    application.inject('route', 'Data', 'service:datapoint');
    application.inject('controller', 'Data', 'service:datapoint');
    application.inject('model', 'Data', 'service:datapoint');
  }

  exports['default'] = {
    name: 'datapoint',
    after: ['toast', 'i18n'],
    initialize: initialize
  };

});