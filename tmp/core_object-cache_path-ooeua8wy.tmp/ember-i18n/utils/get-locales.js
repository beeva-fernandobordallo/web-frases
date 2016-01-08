define('ember-i18n/utils/get-locales', ['exports', 'ember'], function (exports, Ember) {

  'use strict';



  exports['default'] = getLocales;
  var matchKey = '/locales/(.+)/translations$';
  function getLocales() {
    return Object.keys(requirejs.entries).reduce(function (locales, module) {
      var match = module.match(matchKey);
      if (match) {
        locales.pushObject(match[1]);
      }
      return locales;
    }, Ember['default'].A()).sort();
  }

});