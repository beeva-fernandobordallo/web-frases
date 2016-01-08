define('flamestack/routes/index', ['exports', 'flamestack/routes/base'], function (exports, Base) {

  'use strict';

  exports['default'] = Base['default'].extend({

    auth: false,

    actions: {

      focus: function focus(id, animation, speed) {
        id = '#' + id;
        this.Animate.go(id, animation, speed);
      }

    }

  });

});