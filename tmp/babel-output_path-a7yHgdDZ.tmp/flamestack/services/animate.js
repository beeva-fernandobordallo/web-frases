import Ember from 'ember';

export default Ember.Service.extend({

  go: function go(node, animation, speed) {
    $(node).removeClass('anim-normal anim-slow anim-fast');
    if (speed) {
      var animspeed = 'anim-' + speed;
      $(node).addClass(animspeed);
    } else {
      $(node).addClass('anim-normal');
    }
    var promise = new Promise(function (resolve) {
      var animString = 'animated ' + animation;
      $(node).addClass(animString).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(node).removeClass(animString);
        resolve('end');
      });
    });
    return promise;
  },

  goAndHide: function goAndHide(node, animation, speed) {
    $(node).removeClass('anim-normal anim-slow anim-fast');
    if (speed) {
      var animspeed = 'anim-' + speed;
      $(node).addClass(animspeed);
    } else {
      $(node).addClass('anim-normal');
    }
    var promise = new Promise(function (resolve) {
      var animString = 'animated ' + animation;
      $(node).addClass(animString).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(node).addClass('hide').removeClass(animString);
        resolve('end');
      });
    });
    return promise;
  },

  entryPage: function entryPage(node, animation, speed) {
    $(node).removeClass('anim-normal anim-slow anim-fast');
    var promise = new Promise(function (resolve) {
      Ember.run.scheduleOnce('afterRender', this, function () {
        var animString = 'animated ' + animation;
        if (speed) {
          var animspeed = 'anim-' + speed;
          $(node).addClass(animspeed);
        } else {
          $(node).addClass('anim-normal');
        }
        $(node).addClass(animString).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
          $(node).removeClass(animString);
          resolve('end');
        });
      });
    });
    return promise;
  },

  pageTransitionComplete: false,

  exitPage: function exitPage(node, animation, transition, speed) {
    $(node).removeClass('anim-normal anim-slow anim-fast');
    var promise = new Promise((function (resolve) {
      if (!this.get('pageTransitionComplete')) {
        if (speed) {
          var animspeed = 'anim-' + speed;
          $(node).addClass(animspeed);
        } else {
          $(node).addClass('anim-normal');
        }
        transition.abort();
        this.goAndHide(node, animation).then((function () {
          this.set('pageTransitionComplete', true);
          transition.retry().then(function () {
            resolve('end');
          });
        }).bind(this));
      } else {
        this.set('pageTransitionComplete', false);
        resolve('secondRun');
      }
    }).bind(this));
    return promise;
  }

});