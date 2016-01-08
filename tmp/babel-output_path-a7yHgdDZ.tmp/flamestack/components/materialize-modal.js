import Ember from 'ember';
import MaterializeModal from './md-modal';

export default MaterializeModal.extend({
  init: function init() {
    this._super.apply(this, arguments);
    Ember.deprecate("{{materialize-modal}} has been deprecated. Please use {{md-modal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
  }
});