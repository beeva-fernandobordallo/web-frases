define('ember-cli-materialize/components/md-card-reveal', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-card-reveal'], function (exports, Ember, layout) {

  'use strict';

  var Component = Ember['default'].Component;

  exports['default'] = Component.extend({
    layout: layout['default'],
    tagName: 'div',

    classNames: ['card-reveal'],
    classNameBinding: 'class',
    activatorBinding: 'parentView.activator'
  });

});