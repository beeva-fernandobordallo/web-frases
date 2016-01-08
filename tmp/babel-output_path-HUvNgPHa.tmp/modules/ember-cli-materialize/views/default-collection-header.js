import Ember from 'ember';
import layout from '../templates/default-collection-header';

var View = Ember.View;

export default View.extend({
  layout: layout,
  classNames: ['collection-header']
});