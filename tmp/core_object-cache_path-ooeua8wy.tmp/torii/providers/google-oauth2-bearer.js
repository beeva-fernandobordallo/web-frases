define('torii/providers/google-oauth2-bearer', ['exports', 'torii/providers/oauth2-bearer', 'torii/configuration'], function (exports, Oauth2Bearer, configuration) {

  'use strict';

  /**
   * This class implements authentication against google
   * using the client-side OAuth2 authorization flow in a popup window.
   */

  var GoogleOauth2Bearer = Oauth2Bearer['default'].extend({

    name:    'google-oauth2-bearer',
    baseUrl: 'https://accounts.google.com/o/oauth2/auth',

    // additional params that this provider requires
    optionalUrlParams: ['scope', 'request_visible_actions'],

    requestVisibleActions: configuration.configurable('requestVisibleActions', ''),

    responseParams: ['access_token'],

    scope: configuration.configurable('scope', 'email'),

    redirectUri: configuration.configurable('redirectUri',
                              'http://localhost:8000/oauth2callback')
  });

  exports['default'] = GoogleOauth2Bearer;

});