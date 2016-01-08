define('ember-cli-materialize/components/md-range', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-range'], function (exports, Ember, layout) {

  'use strict';

  var Component = Ember['default'].Component;

  exports['default'] = Component.extend({
    layout: layout['default'],

    classNames: ['range-field'],

    min: 0,
    max: 100,
    step: 5
  });

});