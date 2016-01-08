define('ember-i18n/config/zh', ['exports', 'ember-i18n/config/constants'], function (exports, constants) {

  'use strict';

  exports['default'] = {
    rtl: false,

    pluralForm: function pluralForm() /* n */{
      return constants.OTHER;
    }
  };

});