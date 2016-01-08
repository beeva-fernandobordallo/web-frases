define('ember-cli-materialize/views/default-column-header', ['exports', 'ember', 'ember-cli-materialize/templates/default-column-header'], function (exports, Ember, layout) {

  'use strict';

  var alias = Ember['default'].computed.alias;

  exports['default'] = Ember['default'].View.extend({
    tagName: 'th',
    layout: layout['default'],
    attributeBindings: ['data-field'],
    'data-field': alias('column.valueBindingPath')
  });

});