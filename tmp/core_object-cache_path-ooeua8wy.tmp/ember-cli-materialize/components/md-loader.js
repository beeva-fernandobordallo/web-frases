define('ember-cli-materialize/components/md-loader', ['exports', 'ember', 'ember-cli-materialize/mixins/uses-settings', 'ember-cli-materialize/templates/components/md-loader'], function (exports, Ember, UsesSettings, layout) {

  'use strict';

  var Component = Ember['default'].Component;
  var computed = Ember['default'].computed;
  var oneWay = Ember['default'].computed.oneWay;

  exports['default'] = Component.extend(UsesSettings['default'], {
    layout: layout['default'],

    classNameBindings: ['isBarType:progress:preloader-wrapper', 'active:active', 'size'],

    mode: oneWay('_mdSettings.loaderMode'),
    percent: 0,
    size: oneWay('_mdSettings.loaderSize'),
    active: true,
    color: null,

    isBarType: computed('mode', function () {
      return ['determinate', 'indeterminate'].indexOf(this.get('mode')) >= 0;
    }),

    isDeterminate: computed('mode', function () {
      return ['determinate'].indexOf(this.get('mode'));
    }),

    barStyle: computed('mode', 'percent', function () {
      if (this.get('mode') === 'determinate') {
        return new Ember['default'].Handlebars.SafeString('width: ' + parseInt(this.get('percent'), 10) + '%');
      } else {
        return new Ember['default'].Handlebars.SafeString('');
      }
    }),

    barClassName: computed('isBarType', 'mode', function () {
      return this.get('isBarType') ? this.get('mode') : null;
    }),

    spinnerClassNames: computed('color', 'isBarType', function () {
      if (!this.get('isBarType')) {
        var color = this.get('color');
        if (!color) {
          return Ember['default'].A(['blue', 'red', 'green', 'yellow'].map(function (c) {
            return 'spinner-layer spinner-' + c;
          }));
        } else {
          return Ember['default'].A(['spinner-layer spinner-' + color + '-only']);
        }
      } else {
        return Ember['default'].A();
      }
    })
  });

});