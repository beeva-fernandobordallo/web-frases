import Ember from 'ember';
import layout from 'ember-cli-materialize/templates/default-column-header';

var alias = Ember.computed.alias;

export default Ember.View.extend({
  tagName: 'th',
  layout: layout,
  attributeBindings: ['data-field'],
  'data-field': alias('column.valueBindingPath')
});