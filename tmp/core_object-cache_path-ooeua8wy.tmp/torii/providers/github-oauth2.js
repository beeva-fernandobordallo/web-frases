define('torii/providers/github-oauth2', ['exports', 'torii/providers/oauth2-code', 'torii/configuration'], function (exports, Oauth2, configuration) {

  'use strict';

  var GithubOauth2 = Oauth2['default'].extend({
    name:       'github-oauth2',
    baseUrl:    'https://github.com/login/oauth/authorize',

    responseParams: ['code', 'state'],

    redirectUri: configuration.configurable('redirectUri', function(){
      // A hack that allows redirectUri to be configurable
      // but default to the superclass
      return this._super();
    })
  });

  exports['default'] = GithubOauth2;

});