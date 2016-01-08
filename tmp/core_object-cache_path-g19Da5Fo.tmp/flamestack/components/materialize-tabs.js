define('flamestack/components/materialize-tabs', ['exports', 'ember', 'flamestack/components/md-tabs'], function (exports, Ember, materializeTabs) {

  'use strict';

  exports['default'] = materializeTabs['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate("{{materialize-tabs}} has been deprecated. Please use {{md-tabs}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });

});