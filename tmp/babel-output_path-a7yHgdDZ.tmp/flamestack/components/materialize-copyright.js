import Ember from 'ember';
import materializeCopyright from './md-copyright';

export default materializeCopyright.extend({
  init: function init() {
    this._super.apply(this, arguments);
    Ember.deprecate("{{materialize-copyright}} has been deprecated. Please use {{md-copyright}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
  }
});