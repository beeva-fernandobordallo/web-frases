define('ember-cli-materialize/components/md-fixed-btn', ['exports', 'ember-cli-materialize/components/-md-fixed-btn-base', 'ember-cli-materialize/templates/components/md-fixed-btn'], function (exports, FixedButtonBase, layout) {

  'use strict';

  exports['default'] = FixedButtonBase['default'].extend({
    layout: layout['default'],
    tagName: 'li',
    classNames: ['md-fixed-btn']
  });

});