import Ember from 'ember';

var computed = Ember.computed;

export default Ember.Mixin.create({
  _mdSettings: computed(function () {
    return this.get('container').lookup('service:materialize-settings');
  })
});