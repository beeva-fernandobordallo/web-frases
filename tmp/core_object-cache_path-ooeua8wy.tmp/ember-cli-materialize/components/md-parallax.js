define('ember-cli-materialize/components/md-parallax', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-parallax'], function (exports, Ember, layout) {

  'use strict';

  var Component = Ember['default'].Component;

  exports['default'] = Component.extend({
    layout: layout['default'],
    classNames: ['parallax-container'],

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      this._setupParallax();
    },

    _setupParallax: function _setupParallax() {
      this.$('.parallax').parallax();
    }

    // TODO: unregister any listeners that $.parallax() registers
    // _teardownParallax() {
    //
    // }
  });

});