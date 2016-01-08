define('ember-cli-materialize/components/md-select', ['exports', 'ember', 'ember-cli-materialize/components/md-input-field', 'ember-cli-materialize/templates/components/md-select'], function (exports, Ember, MaterializeInputField, layout) {

  'use strict';

  exports['default'] = MaterializeInputField['default'].extend({
    layout: layout['default'],
    classNames: ['md-select'],
    optionLabelPath: 'content',
    optionValuePath: 'content',

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      this._setupSelect();
    },

    _setupSelect: function _setupSelect() {
      // jscs: disable
      this.$('select').material_select();
      // jscs: enable
    },

    // TODO: clean up any listeners that $.select() puts in place
    // _teardownSelect() {
    //
    // }

    // TODO: this could be converted to a computed property, returning a string
    //  that is bound to the class attribute of the inputSelector
    errorsDidChange: Ember['default'].observer('errors', function () {
      var inputSelector = this.$('input');
      // monitor the select's validity and copy the appropriate validation class to the materialize input element.
      if (!Ember['default'].isNone(inputSelector)) {
        Ember['default'].run.later(this, function () {
          var isValid = this.$('select').hasClass('valid');
          if (isValid) {
            inputSelector.removeClass('invalid');
            inputSelector.addClass('valid');
          } else {
            inputSelector.removeClass('valid');
            inputSelector.addClass('invalid');
          }
        }, 150);
      }
    })
  });

});