define('torii/providers/facebook-oauth2', ['exports', 'torii/configuration', 'torii/providers/oauth2-code'], function (exports, configuration, Oauth2) {

  'use strict';

  exports['default'] = Oauth2['default'].extend({
    name:    'facebook-oauth2',
    baseUrl: 'https://www.facebook.com/dialog/oauth',

    // Additional url params that this provider requires
    requiredUrlParams: ['display'],

    responseParams: ['code', 'state'],

    scope:        configuration.configurable('scope', 'email'),

    display: 'popup',
    redirectUri: configuration.configurable('redirectUri', function(){
      // A hack that allows redirectUri to be configurable
      // but default to the superclass
      return this._super();
    }),

    open: function() {
      return this._super().then(function(authData){
        if (authData.authorizationCode && authData.authorizationCode === '200') {
          // indication that the user hit 'cancel', not 'ok'
          throw new Error('User canceled authorization');
        }

        return authData;
      });
    }
  });

});