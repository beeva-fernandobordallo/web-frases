define('torii/initializers/initialize-torii-callback', ['exports', 'torii/redirect-handler'], function (exports, RedirectHandler) {

  'use strict';

  exports['default'] = {
    name: 'torii-callback',
    before: 'torii',
    initialize: function(application) {
      if (arguments[1]) { // Ember < 2.1
        application = arguments[1];
      }
      application.deferReadiness();
      RedirectHandler['default'].handle(window).catch(function(){
        application.advanceReadiness();
      });
    }
  };

});