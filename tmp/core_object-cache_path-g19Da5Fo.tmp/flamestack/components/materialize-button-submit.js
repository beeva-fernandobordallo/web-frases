define('flamestack/components/materialize-button-submit', ['exports', 'ember', 'flamestack/components/md-btn-submit'], function (exports, Ember, MaterializeButtonSubmit) {

  'use strict';

  exports['default'] = MaterializeButtonSubmit['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-button-submit}} has been deprecated. Please use {{md-btn-submit}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});