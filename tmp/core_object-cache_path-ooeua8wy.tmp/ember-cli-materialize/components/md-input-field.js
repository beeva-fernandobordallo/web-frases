define('ember-cli-materialize/components/md-input-field', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var Component = Ember['default'].Component;
  var computed = Ember['default'].computed;
  var isPresent = Ember['default'].isPresent;

  exports['default'] = Component.extend({
    classNames: ['input-field'],

    bindAttributes: ['disabled', 'readonly', 'autofocus'],
    validate: false,

    isValid: computed('validate', 'errors', function () {
      return !this.get('validate') && !isPresent(this.get('errors.firstObject'));
    }),

    isInvalid: computed('validate', 'errors', function () {
      return !this.get('validate') && isPresent(this.get('errors.firstObject'));
    }),

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      // pad the errors element when an icon is present
      if (isPresent(this.get('icon'))) {
        this.$('> span').css('padding-left', '3rem');
      }
    },

    id: computed('elementId', function () {
      return this.get('elementId') + '-input';
    }),

    _setupLabel: function _setupLabel() {
      var $label = this.$('> label');
      if (isPresent(this.get('value')) && !$label.hasClass('active')) {
        $label.addClass('active');
      }
    }

  });

});