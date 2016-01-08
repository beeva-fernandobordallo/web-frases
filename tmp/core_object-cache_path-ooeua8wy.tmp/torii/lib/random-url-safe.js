define('torii/lib/random-url-safe', ['exports'], function (exports) {

  'use strict';

  function randomUrlSafe(length) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';

    for (var i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
  }
  exports['default'] = randomUrlSafe;

});