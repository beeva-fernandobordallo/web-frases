define('torii/providers/linked-in-oauth2', ['exports', 'torii/providers/oauth2-code', 'torii/configuration'], function (exports, Oauth2, configuration) {

  'use strict';

  var LinkedInOauth2 = Oauth2['default'].extend({
    name:       'linked-in-oauth2',
    baseUrl:    'https://www.linkedin.com/uas/oauth2/authorization',

    responseParams: ['code', 'state'],

    redirectUri: configuration.configurable('redirectUri', function(){
      // A hack that allows redirectUri to be configurable
      // but default to the superclass
      return this._super();
    })

  });

  exports['default'] = LinkedInOauth2;

});