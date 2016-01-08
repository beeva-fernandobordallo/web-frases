import Ember from 'ember';
import MaterializeCollapsibleCard from './md-card-collapsible';

export default MaterializeCollapsibleCard.extend({
  init: function init() {
    this._super.apply(this, arguments);
    Ember.deprecate("{{materialize-collapsible-card}} has been deprecated. Please use {{md-card-collapsible}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
  }
});