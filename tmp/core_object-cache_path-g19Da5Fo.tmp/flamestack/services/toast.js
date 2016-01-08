define('flamestack/services/toast', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Service.extend({

    // Materialize.toast(message, displayLength, className, completeCallback);
    addToast: function addToast(a, b, c, d) {
      a = a ? a : '';
      b = b ? b : 2000;
      c = c ? c : '';
      d = d ? d : null;

      Materialize.toast(a, b, c, d);
    }

  });

});