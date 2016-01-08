define('flamestack/components/materialize-card', ['exports', 'ember', 'flamestack/components/md-card'], function (exports, Ember, MaterializeCard) {

  'use strict';

  exports['default'] = MaterializeCard['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-card}} has been deprecated. Please use {{md-card}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});