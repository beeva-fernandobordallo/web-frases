import Ember from 'ember';
import materializeTextarea from './md-textarea';

export default materializeTextarea.extend({
  init: function init() {
    this._super.apply(this, arguments);
    Ember.deprecate("{{materialize-textarea}} has been deprecated. Please use {{md-textarea}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
  }
});