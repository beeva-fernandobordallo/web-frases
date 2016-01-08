define('ember-cli-materialize/components/md-fixed-btns', ['exports', 'ember-cli-materialize/components/-md-fixed-btn-base', 'ember-cli-materialize/templates/components/md-fixed-btns'], function (exports, FixedButtonBase, layout) {

  'use strict';

  exports['default'] = FixedButtonBase['default'].extend({
    layout: layout['default'],
    classNames: ['md-fixed-btns', 'fixed-action-btn']
  });

});