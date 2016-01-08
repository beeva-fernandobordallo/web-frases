import Ember from 'ember';

export default Ember.Object.extend({
  firebase: Ember.inject.service(),

  open: function open(options) {
    var _this = this;

    var provider = options.provider || options.authWith;

    return new Ember.RSVP.Promise(function (resolve, reject) {
      if (!provider) {
        reject(new Error('`provider` must be supplied'));
      }

      if (provider === 'password') {
        if (!options.email && !options.password) {
          reject(new Error('`email` and `password` must be supplied'));
        }

        _this.get('firebase').authWithPassword({
          email: options.email,
          password: options.password
        }, function (error, authData) {

          if (error) {
            reject(error);
          } else {
            resolve(authData);
          }
        });
      } else if (provider === 'custom') {
        if (!options.token) {
          reject(new Error('A token must be supplied'));
        }
        _this.get('firebase').authWithCustomToken(options.token, function (error, authData) {
          if (error) {
            reject(error);
          } else {
            resolve(authData);
          }
        });
      } else if (provider === 'anonymous') {
        _this.get('firebase').authAnonymously(function (error, authData) {
          if (error) {
            reject(error);
          } else {
            resolve(authData);
          }
        });
      } else {
        _this.get('firebase').authWithOAuthPopup(provider, function (error, authData) {
          if (error) {
            reject(error);
          } else {
            resolve(authData);
          }
        }, options.settings || {});
      }
    });
  }
});