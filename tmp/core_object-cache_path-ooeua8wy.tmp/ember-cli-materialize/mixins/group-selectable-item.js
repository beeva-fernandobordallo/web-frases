define('ember-cli-materialize/mixins/group-selectable-item', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var Mixin = Ember['default'].Mixin;
  var alias = Ember['default'].computed.alias;

  exports['default'] = Mixin.create({
    name: alias('content.label'),
    value: alias('content.value'),
    disabled: false
  });

});