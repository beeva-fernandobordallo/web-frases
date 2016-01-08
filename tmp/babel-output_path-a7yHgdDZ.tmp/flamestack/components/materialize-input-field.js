import Ember from 'ember';
import materializeInputField from './md-input-field';

export default materializeInputField.extend({
  init: function init() {
    this._super.apply(this, arguments);
    Ember.deprecate("{{materialize-input-field}} has been deprecated. Please use {{md-input-field}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
  }
});