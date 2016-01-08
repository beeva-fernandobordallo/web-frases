define('torii/providers/oauth1', ['exports', 'torii/providers/base', 'torii/configuration', 'torii/lib/query-string', 'torii/lib/required-property'], function (exports, Provider, configuration, QueryString, requiredProperty) {

  'use strict';

  /*
   * This class implements authentication against an API
   * using the OAuth1.0a request token flow in a popup window.
   */

  function currentUrl(){
    return [window.location.protocol,
            "//",
            window.location.host,
            window.location.pathname].join('');
  }

  var Oauth1 = Provider['default'].extend({
    name: 'oauth1',

    requestTokenUri: configuration.configurable('requestTokenUri'),

    buildRequestTokenUrl: function(){
      var requestTokenUri = this.get('requestTokenUri');
      return requestTokenUri;
    },

    open: function(){
      var name        = this.get('name'),
          url         = this.buildRequestTokenUrl();

      return this.get('popup').open(url, ['code']).then(function(authData){
        authData.provider = name;
        return authData;
      });
    }
  });

  exports['default'] = Oauth1;

});