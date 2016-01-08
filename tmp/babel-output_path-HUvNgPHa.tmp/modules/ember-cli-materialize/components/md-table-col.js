import Ember from 'ember';
import layout from '../templates/components/md-table-col';
import Table from './md-table';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import DefaultColumnHeaderView from 'ember-cli-materialize/views/default-column-header';

var Component = Ember.Component;
var computed = Ember.computed;
var get = Ember.get;
var oneWay = Ember.computed.oneWay;

export default Component.extend(ChildComponentSupport, {
  _parentComponentTypes: [Table],
  tagName: 'td',
  layout: layout,
  valueBindingPath: null,
  headerView: DefaultColumnHeaderView,
  header: oneWay('valueBindingPath'),
  key: oneWay('valueBindingPath'),
  _value: computed('valueBindingPath', 'row', function () {
    var vbp = this.get('valueBindingPath');
    if (!vbp) {
      return '';
    } else {
      return get(this.get('row'), this.get('valueBindingPath'));
    }
  })
});