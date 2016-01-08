define('flamestack/routes/index', ['exports', 'flamestack/routes/base'], function (exports, Base) {

  'use strict';

  exports['default'] = Base['default'].extend({

    auth: false,

    model: function model() {
      var filtersObj = {
        orderChild: 'votos'
      };
      return this.Data.grabData('publicRef', [], 'frasesData', filtersObj).then(function (data) {
        console.log(data);
      });
    },

    actions: {

      focus: function focus(id, animation, speed) {
        id = '#' + id;
        this.Animate.go(id, animation, speed);
      }

    }

  });

});