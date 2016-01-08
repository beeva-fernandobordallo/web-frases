import Base from './base';

export default Base.extend({

  auth: false,

  actions: {

    focus: function focus(id, animation, speed) {
      id = '#' + id;
      this.Animate.go(id, animation, speed);
    }

  }

});