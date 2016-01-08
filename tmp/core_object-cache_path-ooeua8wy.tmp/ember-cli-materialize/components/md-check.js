define('ember-cli-materialize/components/md-check', ['exports', 'ember', 'ember-cli-materialize/components/selectable-item', 'ember-cli-materialize/templates/components/md-checkbox'], function (exports, Ember, SelectableItem, layout) {

  'use strict';

  var alias = Ember['default'].computed.alias;

  exports['default'] = SelectableItem['default'].extend({
    layout: layout['default'],
    text: alias('name'),
    classNames: ['materialize-checkbox']
  });

});