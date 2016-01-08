define('torii/providers/google-oauth2', ['exports', 'torii/providers/oauth2-code', 'torii/configuration'], function (exports, Oauth2, configuration) {

  'use strict';

  /**
   * This class implements authentication against google
   * using the OAuth2 authorization flow in a popup window.
   */

  var GoogleOauth2 = Oauth2['default'].extend({

    name:    'google-oauth2',
    baseUrl: 'https://accounts.google.com/o/oauth2/auth',

    // additional params that this provider requires
    optionalUrlParams: ['scope', 'request_visible_actions', 'access_type', 'approval_prompt', 'hd'],

    requestVisibleActions: configuration.configurable('requestVisibleActions', ''),

    accessType: configuration.configurable('accessType', ''),

    responseParams: ['code', 'state'],

    scope: configuration.configurable('scope', 'email'),

    approvalPrompt: configuration.configurable('approvalPrompt', 'auto'),

    redirectUri: configuration.configurable('redirectUri',
                              'http://localhost:8000/oauth2callback'),

    hd: configuration.configurable('hd', '')
  });

  exports['default'] = GoogleOauth2;

});