define('ember-i18n/config/ar', ['exports', 'ember-i18n/config/constants'], function (exports, constants) {

  'use strict';

  exports['default'] = {
    rtl: true,

    pluralForm: function pluralForm(n) {
      var mod100 = n % 100;

      if (n === 0) {
        return constants.ZERO;
      }
      if (n === 1) {
        return constants.ONE;
      }
      if (n === 2) {
        return constants.TWO;
      }
      if (mod100 >= 3 && mod100 <= 10) {
        return constants.FEW;
      }
      if (mod100 >= 11 && mod100 <= 99) {
        return constants.MANY;
      }
      return constants.OTHER;
    }
  };

});