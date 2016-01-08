define('ember-cli-materialize/components/md-card', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-card'], function (exports, Ember, layout) {

  'use strict';

  var Component = Ember['default'].Component;

  exports['default'] = Component.extend({
    layout: layout['default'],

    classNames: ['card'],
    classNameBinding: 'class'
  });

});