define('ember-cli-materialize/components/md-checks', ['exports', 'ember-cli-materialize/components/selectable-item-group'], function (exports, SelectableItemGroup) {

  'use strict';

  exports['default'] = SelectableItemGroup['default'].extend({
    selectableItemView: 'md-checks-check',
    multiple: true
  });

});