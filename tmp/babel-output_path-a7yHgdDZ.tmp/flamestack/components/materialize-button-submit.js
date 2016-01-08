import Ember from 'ember';
import MaterializeButtonSubmit from './md-btn-submit';

export default MaterializeButtonSubmit.extend({
  init: function init() {
    this._super.apply(this, arguments);
    Ember.deprecate("{{materialize-button-submit}} has been deprecated. Please use {{md-btn-submit}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
  }
});