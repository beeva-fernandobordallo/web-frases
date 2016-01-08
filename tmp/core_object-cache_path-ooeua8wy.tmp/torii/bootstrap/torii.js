define('torii/bootstrap/torii', ['exports', 'torii/providers/linked-in-oauth2', 'torii/providers/google-oauth2', 'torii/providers/google-oauth2-bearer', 'torii/providers/facebook-connect', 'torii/providers/facebook-oauth2', 'torii/adapters/application', 'torii/providers/twitter-oauth1', 'torii/providers/github-oauth2', 'torii/providers/azure-ad-oauth2', 'torii/providers/stripe-connect', 'torii/providers/edmodo-connect', 'torii/services/torii', 'torii/services/popup', 'torii/lib/container-utils'], function (exports, LinkedInOauth2Provider, GoogleOauth2Provider, GoogleOauth2BearerProvider, FacebookConnectProvider, FacebookOauth2Provider, ApplicationAdapter, TwitterProvider, GithubOauth2Provider, AzureAdOauth2Provider, StripeConnectProvider, EdmodoConnectProvider, ToriiService, PopupService, container_utils) {

  'use strict';

  exports['default'] = function(application) {
    application.register('service:torii', ToriiService['default']);

    application.register('torii-provider:linked-in-oauth2', LinkedInOauth2Provider['default']);
    application.register('torii-provider:google-oauth2', GoogleOauth2Provider['default']);
    application.register('torii-provider:google-oauth2-bearer', GoogleOauth2BearerProvider['default']);
    application.register('torii-provider:facebook-connect', FacebookConnectProvider['default']);
    application.register('torii-provider:facebook-oauth2', FacebookOauth2Provider['default']);
    application.register('torii-provider:twitter', TwitterProvider['default']);
    application.register('torii-provider:github-oauth2', GithubOauth2Provider['default']);
    application.register('torii-provider:azure-ad-oauth2', AzureAdOauth2Provider['default']);
    application.register('torii-provider:stripe-connect', StripeConnectProvider['default']);
    application.register('torii-provider:edmodo-connect', EdmodoConnectProvider['default']);
    application.register('torii-adapter:application', ApplicationAdapter['default']);

    application.register('torii-service:popup', PopupService['default']);

    application.inject('torii-provider', 'popup', 'torii-service:popup');

    if (window.DS) {
      var storeFactoryName = 'store:main';
      if (container_utils.hasRegistration(application, 'service:store')) {
        storeFactoryName = 'service:store';
      }
      application.inject('torii-provider', 'store', storeFactoryName);
      application.inject('torii-adapter', 'store', storeFactoryName);
    }
  }

});