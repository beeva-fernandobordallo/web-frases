define('ember-cli-materialize/components/md-modal', ['exports', 'ember', 'ember-cli-materialize/mixins/uses-settings', 'ember-cli-materialize/templates/components/md-modal'], function (exports, Ember, UsesSettings, layout) {

  'use strict';

  var Component = Ember['default'].Component;
  var computed = Ember['default'].computed;
  var oneWay = Ember['default'].computed.oneWay;

  exports['default'] = Component.extend(UsesSettings['default'], {
    layout: layout['default'],

    acceptsKeyResponder: true,
    attributeBindings: ['style:inlineStyle'],
    concatenatedProperties: ['modalClassNames'],

    inlineStyle: computed(function () {
      return new Ember['default'].Handlebars.SafeString('z-index: 1000;');
    }),

    isFooterFixed: oneWay('_mdSettings.modalIsFooterFixed'),

    modalClassNames: ['modal', 'show'],
    _modalClassString: computed('modalClassNames.[]', 'isFooterFixed', function () {
      var names = this.get('modalClassNames');
      if (this.get('isFooterFixed')) {
        names.push('modal-fixed-footer');
      }
      return names.join(' ');
    }),

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      this.becomeKeyResponder();
    },

    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      this.resignKeyResponder();
    },

    cancel: function cancel() {
      this.sendAction('close');
    },

    actions: {
      closeModal: function closeModal() {
        this.sendAction('close');
      }
    }

  });

});