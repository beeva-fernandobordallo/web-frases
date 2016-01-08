define('flamestack/components/materialize-checkbox', ['exports', 'ember', 'flamestack/components/md-check'], function (exports, Ember, materializeCheckbox) {

  'use strict';

  exports['default'] = materializeCheckbox['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-checkbox}} has been deprecated. Please use {{md-check}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});