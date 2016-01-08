define('flamestack/components/materialize-radios', ['exports', 'ember', 'flamestack/components/md-radios'], function (exports, Ember, materializeRadios) {

  'use strict';

  exports['default'] = materializeRadios['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-radios}} has been deprecated. Please use {{md-radios}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});