import Ember from 'ember';
import UsesSettings from '../mixins/uses-settings';
import layout from '../templates/components/md-modal';

var Component = Ember.Component;
var computed = Ember.computed;
var oneWay = Ember.computed.oneWay;

export default Component.extend(UsesSettings, {
  layout: layout,

  acceptsKeyResponder: true,
  attributeBindings: ['style:inlineStyle'],
  concatenatedProperties: ['modalClassNames'],

  inlineStyle: computed(function () {
    return new Ember.Handlebars.SafeString('z-index: 1000;');
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