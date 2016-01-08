define('flamestack/components/materialize-switches', ['exports', 'ember', 'flamestack/components/md-switches'], function (exports, Ember, materializeSwitches) {

  'use strict';

  exports['default'] = materializeSwitches['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-switches}} has been deprecated. Please use {{md-switches}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});