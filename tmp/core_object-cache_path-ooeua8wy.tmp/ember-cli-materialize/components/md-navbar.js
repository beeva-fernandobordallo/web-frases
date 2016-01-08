define('ember-cli-materialize/components/md-navbar', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-navbar'], function (exports, Ember, layout) {

  'use strict';

  var computed = Ember['default'].computed;
  var Component = Ember['default'].Component;
  var typeOf = Ember['default'].typeOf;
  var scheduleOnce = Ember['default'].run.scheduleOnce;

  exports['default'] = Component.extend({
    tagName: 'nav',
    layout: layout['default'],
    homeRoute: 'index',

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      // TODO: is this scheduling necessary?
      scheduleOnce('afterRender', this, this._setupNavbar);
    },

    _setupNavbar: function _setupNavbar() {
      if (typeOf(Ember['default'].$('.button-collapse').sideNav) === 'function') {
        this.notifyPropertyChange('_sideNavId');
        this.$('.button-collapse').sideNav({
          closeOnClick: true
        });
      }
    },

    _sideNavId: computed(function () {
      return this.get('element.id') + '-sidenav';
    })

    // TODO: Unregister any listeners that $.sideNav() puts in place
    // _teardownNavbar() {
    //
    // }
  });

});