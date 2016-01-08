define('ember-cli-materialize/components/md-tab', ['exports', 'ember', 'ember-composability/mixins/child-component-support', 'ember-cli-materialize/components/md-tabs', 'ember-cli-materialize/templates/components/md-tab'], function (exports, Ember, ChildComponentSupport, MdTabs, layout) {

  'use strict';

  var Component = Ember['default'].Component;
  var computed = Ember['default'].computed;
  var oneWay = Ember['default'].computed.oneWay;

  exports['default'] = Component.extend(ChildComponentSupport['default'], {
    _parentComponentTypes: [MdTabs['default']],
    tagName: 'li',
    layout: layout['default'],

    classNames: ['materialize-tabs-tab', 'tab', 'col'],
    classNameBindings: ['_colClass'],

    colWidth: oneWay('composableParent.colWidth'),

    _colClass: computed('colWidth', function () {
      return 's' + this.get('colWidth');
    }),

    active: computed('composableParent.composableChildren.[]', 'composableParent.selected', 'value', function () {
      var selected = this.get('composableParent.selected');
      if (selected) {
        return selected === this.get('value');
      } else {
        var values = this.get('composableParent').tabComponents().map(function (t) {
          return t.get('value');
        });
        return values.indexOf(this.get('value')) === 0;
      }
    }).readOnly(),

    click: function click() {
      this.get('composableParent').set('selected', this.get('value'));
    }

  });

});