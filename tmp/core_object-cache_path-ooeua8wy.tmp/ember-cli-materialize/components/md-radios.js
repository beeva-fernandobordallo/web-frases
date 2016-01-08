define('ember-cli-materialize/components/md-radios', ['exports', 'ember-cli-materialize/components/selectable-item-group'], function (exports, SelectableItemGroup) {

  'use strict';

  exports['default'] = SelectableItemGroup['default'].extend({
    classNames: ['md-radios'],
    selectableItemView: 'md-radios-radio'
  });

});