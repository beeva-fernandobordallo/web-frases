define('flamestack/routes/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({

    beforeModel: function beforeModel(transition) {

      this.set('i18n.locale', 'es');

      // Initialize the datapoint
      return this.Data.initialize(transition).then(function () {
        console.log('Your are ready to rock & roll!');
        console.log('-------------------------------');
        console.log('-------------------------------');
        console.log('"self" is defined but never used xD');
        console.log('-------------------------------');
        console.log('-------------------------------');
      }, function () {
        // Abstract: catch error on datapoint intialization
      });
    },

    actions: {

      signIn: function signIn(provider) {
        this.Data.signIn(provider);
      },

      signOut: function signOut() {
        this.Data.signOut();
      },

      redirectHome: function redirectHome() {
        this.transitionTo('index');
        // Hide sideNav
        $('.button-collapse').sideNav('hide');
      },

      setLocale: function setLocale(locale) {
        this.set('i18n.locale', locale);
        this.Toast.addToast(this.get('i18n').t('label.languageChange'), 2000);
      },

      focus: function focus(id, animation, speed) {
        id = '#' + id;
        this.Animate.go(id, animation, speed);
      },

      focusHoverIn: function focusHoverIn(id) {
        id = '#' + id;
        $(id).addClass('block-focus-border');
      },

      focusHoverOut: function focusHoverOut(id) {
        id = '#' + id;
        $(id).removeClass('block-focus-border');
      },

      yesToModal: function yesToModal() {
        $('.modal-action').click();
        var data = {
          message: 'yes',
          action: this.Data.get('modalAction'),
          data: this.Data.get('modalData')
        };
        var currPath = this.router.currentRouteName;
        Flamestack.__container__.lookup('controller:' + currPath).set('modalAnswer', data);
      },

      noToModal: function noToModal() {
        $('.modal-action').click();
        var data = {
          message: 'no',
          action: this.Data.get('modalAction'),
          data: this.Data.get('modalData')
        };
        var currPath = this.router.currentRouteName;
        Flamestack.__container__.lookup('controller:' + currPath).set('modalAnswer', data);
      }
    }
  });

});