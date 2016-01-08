define('ember-cli-materialize/components/md-card-panel', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-card-panel'], function (exports, Ember, layout) {

  'use strict';

  var Component = Ember['default'].Component;

  exports['default'] = Component.extend({
    layout: layout['default'],

    classNames: ['card-panel'],
    classNameBinding: 'class'
  });

});