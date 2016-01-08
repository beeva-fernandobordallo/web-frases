define('flamestack/routes/login', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({

    existingUsers: '',

    actions: {

      didTransition: function didTransition() {
        $('#login-page').removeClass('hide');
        this.Animate.entryPage('.page', 'fadeInDownBig', 'normal');
      },

      willTransition: function willTransition(transition) {
        this.Animate.exitPage('.page', 'flipOutX', transition);
      }
    }

  });

});