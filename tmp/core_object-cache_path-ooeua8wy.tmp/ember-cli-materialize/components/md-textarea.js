define('ember-cli-materialize/components/md-textarea', ['exports', 'ember-cli-materialize/components/md-input-field', 'ember-cli-materialize/templates/components/md-textarea'], function (exports, InputField, layout) {

  'use strict';

  exports['default'] = InputField['default'].extend({
    layout: layout['default'],

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      // make sure the label moves when a value is bound.
      this._setupLabel();
    }
  });

});