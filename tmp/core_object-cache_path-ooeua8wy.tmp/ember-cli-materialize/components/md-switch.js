define('ember-cli-materialize/components/md-switch', ['exports', 'ember', 'ember-cli-materialize/components/selectable-item', 'ember-cli-materialize/templates/components/md-switch'], function (exports, Ember, SelectableItem, layout) {

  'use strict';

  var computed = Ember['default'].computed;

  exports['default'] = SelectableItem['default'].extend({
    layout: layout['default'],

    classNames: ['switch', 'materialize-switch'],

    offLabel: 'Off',
    onLabel: 'On',
    disabled: false,

    _labelClass: computed('name', function () {
      return this.get('name') ? 'right' : '';
    })
  });

});