define('ember-i18n/config/en', ['exports', 'ember-i18n/config/constants'], function (exports, constants) {

  'use strict';

  exports['default'] = {
    rtl: false,

    pluralForm: function pluralForm(n) {
      if (n === 1) {
        return constants.ONE;
      }
      return constants.OTHER;
    }
  };

});