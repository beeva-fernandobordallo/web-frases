define('torii/lib/load-instance-initializer', ['exports'], function (exports) {

  'use strict';

  /* global Ember */
  exports['default'] = function(instanceInitializer){
    Ember.onLoad('Ember.Application', function(Application){
      Application.instanceInitializer(instanceInitializer);
    });
  }

});