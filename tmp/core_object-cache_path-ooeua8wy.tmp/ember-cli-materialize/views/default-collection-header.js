define('ember-cli-materialize/views/default-collection-header', ['exports', 'ember', 'ember-cli-materialize/templates/default-collection-header'], function (exports, Ember, layout) {

  'use strict';

  var View = Ember['default'].View;

  exports['default'] = View.extend({
    layout: layout['default'],
    classNames: ['collection-header']
  });

});