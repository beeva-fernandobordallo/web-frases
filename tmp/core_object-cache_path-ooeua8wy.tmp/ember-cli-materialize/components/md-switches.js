define('ember-cli-materialize/components/md-switches', ['exports', 'ember-cli-materialize/components/selectable-item-group'], function (exports, SelectableItemGroup) {

  'use strict';

  exports['default'] = SelectableItemGroup['default'].extend({
    selectableItemView: 'md-switches-switch',
    multiple: true
  });

});