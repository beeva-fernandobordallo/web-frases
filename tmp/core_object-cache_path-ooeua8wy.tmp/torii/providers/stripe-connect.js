define('torii/providers/stripe-connect', ['exports', 'torii/providers/oauth2-code', 'torii/configuration'], function (exports, Oauth2, configuration) {

  'use strict';

  exports['default'] = Oauth2['default'].extend({
    name:       'stripe-connect',
    baseUrl:    'https://connect.stripe.com/oauth/authorize',

    // additional url params that this provider requires
    requiredUrlParams: [],
    optionalUrlParams: ['stripe_landing', 'always_prompt'],

    responseParams: ['code', 'state'],

    scope: configuration.configurable('scope', 'read_write'),
    stripeLanding: configuration.configurable('stripeLanding', ''),
    alwaysPrompt: configuration.configurable('alwaysPrompt', 'false'),

    redirectUri: configuration.configurable('redirectUri', function() {
      // A hack that allows redirectUri to be configurable
      // but default to the superclass
      return this._super();
    })
  });

});