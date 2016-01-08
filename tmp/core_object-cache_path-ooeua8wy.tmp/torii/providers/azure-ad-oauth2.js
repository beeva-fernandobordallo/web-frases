define('torii/providers/azure-ad-oauth2', ['exports', 'torii/providers/oauth2-code', 'torii/configuration'], function (exports, Oauth2, configuration) {

  'use strict';

  var computed = Ember.computed;

  /**
   * This class implements authentication against AzureAD
   * using the OAuth2 authorization flow in a popup window.
   * @class
   */
  var AzureAdOauth2 = Oauth2['default'].extend({
    name: 'azure-ad-oauth2',

    baseUrl: computed(function() {
      return 'https://login.windows.net/' + this.get('tennantId') + '/oauth2/authorize';
    }),

    tennantId: configuration.configurable('tennantId', 'common'),

    // additional url params that this provider requires
    requiredUrlParams: ['api-version', 'client_id'],

    optionalUrlParams: ['scope', 'nonce', 'response_mode'],

    responseMode: configuration.configurable('responseMode', null),

    responseParams: computed(function () {
      return [ this.get('responseType'), 'state' ];
    }),

    apiVersion: '1.0',

    responseType: configuration.configurable('responseType', 'code'),

    redirectUri: configuration.configurable('redirectUri', function azureRedirectUri(){
      // A hack that allows redirectUri to be configurable
      // but default to the superclass
      return this._super();
    })
  });

  exports['default'] = AzureAdOauth2;

});