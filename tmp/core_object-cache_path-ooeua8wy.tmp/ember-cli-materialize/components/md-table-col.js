define('ember-cli-materialize/components/md-table-col', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-table-col', 'ember-cli-materialize/components/md-table', 'ember-composability/mixins/child-component-support', 'ember-cli-materialize/views/default-column-header'], function (exports, Ember, layout, Table, ChildComponentSupport, DefaultColumnHeaderView) {

  'use strict';

  var Component = Ember['default'].Component;
  var computed = Ember['default'].computed;
  var get = Ember['default'].get;
  var oneWay = Ember['default'].computed.oneWay;

  exports['default'] = Component.extend(ChildComponentSupport['default'], {
    _parentComponentTypes: [Table['default']],
    tagName: 'td',
    layout: layout['default'],
    valueBindingPath: null,
    headerView: DefaultColumnHeaderView['default'],
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

});