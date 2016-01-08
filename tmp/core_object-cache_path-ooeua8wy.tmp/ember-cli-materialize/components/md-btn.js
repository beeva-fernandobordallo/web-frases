define('ember-cli-materialize/components/md-btn', ['exports', 'ember', 'ember-cli-materialize/mixins/uses-settings', 'ember-cli-materialize/templates/components/md-btn'], function (exports, Ember, UsesSettings, layout) {

  'use strict';

  var Component = Ember['default'].Component;
  var computed = Ember['default'].computed;
  var oneWay = Ember['default'].computed.oneWay;
  var typeOf = Ember['default'].typeOf;
  var scheduleOnce = Ember['default'].run.scheduleOnce;

  exports['default'] = Component.extend(UsesSettings['default'], {
    layout: layout['default'],
    tagName: 'a',
    classNameBindings: ['btn:waves-effect', 'wavesClass', 'isDisabled:disabled:waves-effect', 'buttonClass'],
    attributeBindings: ['isDisabled:disabled'],
    wavesClass: 'waves-light',
    text: null,
    icon: null,
    iconPosition: oneWay('_mdSettings.buttonIconPosition'),
    buttonType: null,
    actionArg: null,
    isFlat: computed.equal('buttonType', 'flat'),
    isDisabled: false,

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      scheduleOnce('afterRender', this, this._setupWaves);
    },

    buttonClass: computed('buttonType', function () {
      var buttonType = this.get('buttonType');
      return buttonType ? 'btn-' + buttonType : 'btn';
    }),

    _setupWaves: function _setupWaves() {
      var Waves = window.Waves || {};
      if (typeOf(Waves.displayEffect) === 'function') {
        Waves.displayEffect();
      }
    },

    click: function click() {
      if (!this.get('disabled')) {
        this.sendAction('action', this.get('actionArg'));
      }
    }
  });

});