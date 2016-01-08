define('ember-i18n/config/fr', ['exports', 'ember-i18n/config/constants'], function (exports, constants) {

  'use strict';

  exports['default'] = {
    rtl: false,

    pluralForm: function pluralForm(n) {
      if (n >= 0 && n < 2) {
        return constants.ONE;
      }
      return constants.OTHER;
    }
  };

});