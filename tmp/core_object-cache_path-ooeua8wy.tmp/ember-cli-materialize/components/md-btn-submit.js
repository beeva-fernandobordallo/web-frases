define('ember-cli-materialize/components/md-btn-submit', ['exports', 'ember-cli-materialize/components/md-btn'], function (exports, MaterializeButton) {

  'use strict';

  exports['default'] = MaterializeButton['default'].extend({
    layoutName: 'components/materialize-button',
    tagName: 'button',
    attributeBindings: ['type'],
    type: 'submit'
  });

});