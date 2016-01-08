import Ember from 'ember';
import FirebaseAdapter from 'emberfire/adapters/firebase';

var inject = Ember.inject;

export default FirebaseAdapter.extend({
  firebase: inject.service()
});