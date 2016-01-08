define('flamestack/instance-initializers/ember-i18n', ['exports', 'ember', 'ember-i18n/legacy-helper', 'flamestack/config/environment'], function (exports, Ember, legacyHelper, ENV) {

  'use strict';

  exports['default'] = {
    name: 'ember-i18n',

    initialize: function initialize(instance) {
      if (legacyHelper['default'] != null) {
        Ember['default'].HTMLBars._registerHelper('t', legacyHelper['default']);
      }
    }
  };

});