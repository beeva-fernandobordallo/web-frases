define('ember-cli-materialize/components/md-card-content', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-card-content'], function (exports, Ember, layout) {

  'use strict';

  var Component = Ember['default'].Component;
  var computed = Ember['default'].computed;

  exports['default'] = Component.extend({
    layout: layout['default'],

    classNames: ['card-content'],

    classNameBinding: 'class',
    titleBinding: 'parentView.title',
    titleClassBinding: 'parentView.titleClass',
    activatorBinding: 'parentView.activator',

    cardTitleClass: computed('titleClass', function () {
      return this.get('titleClass') || 'black-text';
    })
  });

});