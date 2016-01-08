define('ember-cli-materialize/components/md-collapsible', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-collapsible', 'ember-new-computed'], function (exports, Ember, layout, _computed) {

  'use strict';

  var deprecate = Ember['default'].deprecate;
  var Component = Ember['default'].Component;

  exports['default'] = Component.extend({
    layout: layout['default'],
    tagName: 'li',
    classNameBindings: ['class'],
    actionArg: null,
    model: _computed['default']('actionArg', {
      get: function get() {
        deprecate('md-collapsible#model is deprecated. Please use md-collapsible#actionArg instead');
        return this.get('actionArg');
      },
      set: function set(key, val) {
        deprecate('md-collapsible#model is deprecated. Please use md-collapsible#actionArg instead');
        return this.set('actionArg', val);
      }
    }),
    actions: {
      headerClicked: function headerClicked() {
        this.sendAction('action', this.get('actionArg'));
      }
    }
  });

});