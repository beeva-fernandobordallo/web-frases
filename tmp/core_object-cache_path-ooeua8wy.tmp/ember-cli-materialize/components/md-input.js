define('ember-cli-materialize/components/md-input', ['exports', 'ember-cli-materialize/components/md-input-field', 'ember-cli-materialize/templates/components/md-input'], function (exports, MaterializeInputField, layout) {

  'use strict';

  exports['default'] = MaterializeInputField['default'].extend({
    layout: layout['default'],
    type: 'text',

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      // make sure the label moves when a value is bound.
      this._setupLabel();
    }
  });

});