define('ember-cli-materialize/components/md-badge', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-badge'], function (exports, Ember, layout) {

  'use strict';

  var Component = Ember['default'].Component;

  exports['default'] = Component.extend({
    layout: layout['default'],
    tagName: 'span',
    text: null,
    classNames: ['badge']
  });

});