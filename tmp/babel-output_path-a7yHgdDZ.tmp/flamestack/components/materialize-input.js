import Ember from 'ember';
import materializeInput from './md-input';

export default materializeInput.extend({
  init: function init() {
    this._super.apply(this, arguments);
    Ember.deprecate("{{materialize-input}} has been deprecated. Please use {{md-input}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
  }
});