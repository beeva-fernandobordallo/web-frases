define('ember-cli-materialize/components/md-radio', ['exports', 'ember', 'ember-cli-materialize/components/selectable-item', 'ember-cli-materialize/templates/components/md-radio'], function (exports, Ember, SelectableItem, layout) {

  'use strict';

  var computed = Ember['default'].computed;
  var alias = Ember['default'].computed.alias;

  exports['default'] = SelectableItem['default'].extend({
    layout: layout['default'],

    value: '',
    text: alias('name'),
    groupValue: Ember['default'].computed.alias('group.selection'),

    className: ['materialize-radio'],

    checked: computed('groupValue', 'value', function () {
      return this.get('groupValue') === this.get('value');
    }),

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      Ember['default'].assert(!Ember['default'].isEmpty(this.get('group')), 'materialize-radio is not supported outside the context of a materialize-radio-group');
    }
  });

});