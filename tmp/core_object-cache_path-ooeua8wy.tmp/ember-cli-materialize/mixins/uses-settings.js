define('ember-cli-materialize/mixins/uses-settings', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var computed = Ember['default'].computed;

  exports['default'] = Ember['default'].Mixin.create({
    _mdSettings: computed(function () {
      return this.get('container').lookup('service:materialize-settings');
    })
  });

});