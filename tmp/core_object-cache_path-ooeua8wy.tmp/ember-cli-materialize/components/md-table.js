define('ember-cli-materialize/components/md-table', ['exports', 'ember', 'ember-composability/mixins/parent-component-support', 'ember-cli-materialize/templates/components/md-table'], function (exports, Ember, ParentComponentSupport, layout) {

  'use strict';

  var A = Ember['default'].A;
  var Component = Ember['default'].Component;
  var computed = Ember['default'].computed;

  exports['default'] = Component.extend(ParentComponentSupport['default'], {
    tagName: 'table',
    layout: layout['default'],
    columns: null,
    composableChildrenDebounceTime: 1,
    init: function init() {
      this._super.apply(this, arguments);
      this.set('columns', Ember['default'].A());
    },

    columnComponents: computed('composableChildren', function () {
      return new A(this.get('composableChildren'));
    }).readOnly(),

    registerChildComponent: function registerChildComponent(childComponent) {
      this.get('_childComponents').add(childComponent, childComponent.get('key'));
      this._notifyComposableChildrenChanged();
    },

    unregisterChildComponent: function unregisterChildComponent(childComponent) {
      this.get('_childComponents')['delete'](childComponent, childComponent.get('key'));
      this._notifyComposableChildrenChanged();
    }
  });

});