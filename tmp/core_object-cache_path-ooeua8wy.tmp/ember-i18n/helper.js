define('ember-i18n/helper', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var Helper = null;

  if (Ember['default'].Helper) {
    Helper = Ember['default'].Helper.extend({
      i18n: Ember['default'].inject.service(),

      _locale: Ember['default'].computed.readOnly('i18n.locale'),

      compute: function compute(params, interpolations) {
        var key = params[0];
        var i18n = this.get('i18n');
        return i18n.t(key, interpolations);
      },

      _recomputeOnLocaleChange: Ember['default'].observer('_locale', function () {
        this.recompute();
      })
    });
  }

  exports['default'] = Helper;

});