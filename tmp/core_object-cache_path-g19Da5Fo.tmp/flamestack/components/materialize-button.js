define('flamestack/components/materialize-button', ['exports', 'ember', 'flamestack/components/md-btn'], function (exports, Ember, MaterializeButton) {

  'use strict';

  exports['default'] = MaterializeButton['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-button}} has been deprecated. Please use {{md-btn}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});