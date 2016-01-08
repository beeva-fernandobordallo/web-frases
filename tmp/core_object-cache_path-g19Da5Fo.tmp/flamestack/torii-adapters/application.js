define('flamestack/torii-adapters/application', ['exports', 'ember', 'emberfire/torii-adapters/firebase'], function (exports, Ember, ToriiFirebaseAdapter) {

  'use strict';

  exports['default'] = ToriiFirebaseAdapter['default'].extend({
    firebase: Ember['default'].inject.service()
  });

});