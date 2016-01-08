define('flamestack/components/materialize-select', ['exports', 'ember', 'flamestack/components/md-select'], function (exports, Ember, materializeSelect) {

  'use strict';

  exports['default'] = materializeSelect['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-select}} has been deprecated. Please use {{md-select}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});