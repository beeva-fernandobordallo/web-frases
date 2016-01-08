define('torii/providers/edmodo-connect', ['exports', 'torii/providers/oauth2-bearer', 'torii/configuration'], function (exports, Oauth2Bearer, configuration) {

  'use strict';

  exports['default'] = Oauth2Bearer['default'].extend({
    name: 'edmodo-connect',
    baseUrl: 'https://api.edmodo.com/oauth/authorize',
    responseParams: ['access_token'],

    /* Configurable parameters */
    redirectUri: configuration.configurable('redirectUri'),
    // See https://developers.edmodo.com/edmodo-connect/docs/#connecting-your-application for the full list of scopes
    scope: configuration.configurable('scope', 'basic')
  });

});