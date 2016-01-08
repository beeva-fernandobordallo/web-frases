import Ember from 'ember';
import DefaultCollectionHeaderView from 'ember-cli-materialize/views/default-collection-header';
import layout from '../templates/components/md-collection';

var Component = Ember.Component;
var bool = Ember.computed.bool;

export default Component.extend({
  layout: layout,
  classNames: ['collection'],
  classNameBindings: ['_hasHeader:with-header'],
  headerView: DefaultCollectionHeaderView,
  header: null,
  _hasHeader: bool('header')
});