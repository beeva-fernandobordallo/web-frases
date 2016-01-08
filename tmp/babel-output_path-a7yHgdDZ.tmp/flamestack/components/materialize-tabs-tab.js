import Ember from 'ember';
import materializeTabsTab from './md-tab';

export default materializeTabsTab.extend({
  init: function init() {
    this._super.apply(this, arguments);
    Ember.deprecate("{{materialize-tabs-tab}} has been deprecated. Please use {{md-tab}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
  }
});