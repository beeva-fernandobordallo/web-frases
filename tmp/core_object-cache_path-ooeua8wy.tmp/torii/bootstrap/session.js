define('torii/bootstrap/session', ['exports', 'torii/services/torii-session'], function (exports, ToriiSessionService) {

  'use strict';

  exports['default'] = function(application, sessionName){
    var sessionFactoryName = 'service:' + sessionName;
    application.register(sessionFactoryName, ToriiSessionService['default']);
    application.inject(sessionFactoryName, 'torii', 'service:torii');
    application.inject('route',      sessionName, sessionFactoryName);
    application.inject('controller', sessionName, sessionFactoryName);
  }

});