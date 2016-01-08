import Ember from 'ember';
import materializeLoader from './md-loader';

export default materializeLoader.extend({
  init: function init() {
    this._super.apply(this, arguments);
    Ember.deprecate("{{materialize-loader}} has been deprecated. Please use {{md-loader}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
  }
});