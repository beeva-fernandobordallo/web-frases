import Ember from 'ember';
import MaterializeInput from './md-input';
import layout from '../templates/components/md-input-date';

var MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function formatDate(timestamp) {
  var d = new Date(timestamp);
  return d.getDate() + ' ' + MONTH_NAMES[d.getMonth()] + ', ' + d.getFullYear();
}

export default MaterializeInput.extend({
  layout: layout,

  selectMonths: true,
  numberOfYears: 15,
  min: '',
  max: '',

  didInsertElement: function didInsertElement() {
    this._super.apply(this, arguments);
    this._setupPicker();
  },

  willDestroyElement: function willDestroyElement() {
    this._super.apply(this, arguments);
    this._teardownPicker();
  },

  _setupPicker: function _setupPicker() {
    var _this = this;

    var datePickerOptions = this.getProperties('selectMonths', 'numberOfYears', 'min', 'max');
    datePickerOptions.selectYears = datePickerOptions.numberOfYears;

    this._onDateSet = function (evt) {
      if (evt.select) {
        _this.set('value', formatDate(evt.select));
      }
    };

    this.$('.datepicker').pickadate(Ember.$.extend(datePickerOptions, {
      onSet: this._onDateSet
    }));
  },

  _teardownPicker: function _teardownPicker() {
    var $pickadate = this.$('.datepicker').data('pickadate');
    if ($pickadate) {
      $pickadate.stop();
    }
  }
});