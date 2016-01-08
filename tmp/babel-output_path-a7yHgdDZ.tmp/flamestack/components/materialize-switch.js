import Ember from 'ember';
import materializeSwitch from './md-switch';

export default materializeSwitch.extend({
  init: function init() {
    this._super.apply(this, arguments);
    Ember.deprecate("{{materialize-switch}} has been deprecated. Please use {{md-switch}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
  }
});