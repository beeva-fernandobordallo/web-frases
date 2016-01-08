import Ember from 'ember';
import materializeParallax from './md-parallax';

export default materializeParallax.extend({
  init: function init() {
    this._super.apply(this, arguments);
    Ember.deprecate("{{materialize-parallax}} has been deprecated. Please use {{md-parallax}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
  }
});