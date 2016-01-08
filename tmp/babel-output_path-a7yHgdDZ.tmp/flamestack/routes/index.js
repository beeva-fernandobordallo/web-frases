import Base from './base';

export default Base.extend({

  auth: false,

  model: function model() {
    var filtersObj = {
      orderChild: 'votos'
    };
    return this.Data.grabData('publicRef', ['frases'], 'frasesData', filtersObj).then((function () {
      return this.Data.get('frasesData');
    }).bind(this));
  },

  actions: {

    focus: function focus(id, animation, speed) {
      id = '#' + id;
      this.Animate.go(id, animation, speed);
    }

  }

});