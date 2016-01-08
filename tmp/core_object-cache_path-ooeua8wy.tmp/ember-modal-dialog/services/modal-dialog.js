define('ember-modal-dialog/services/modal-dialog', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Service.extend({
    destinationElementId: null, // injected
    useEmberTether: null // injected
  });

});