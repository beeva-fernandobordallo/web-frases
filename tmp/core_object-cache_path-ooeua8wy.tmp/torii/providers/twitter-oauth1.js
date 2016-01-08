define('torii/providers/twitter-oauth1', ['exports', 'torii/providers/oauth1'], function (exports, Oauth1Provider) {

  'use strict';

  exports['default'] = Oauth1Provider['default'].extend({
    name: 'twitter'
  });

});