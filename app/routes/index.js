import Base from './base';

export default Base.extend({

  auth: false,

  model: function(){
  	var filtersObj = {
  		orderChild: 'votos'
  	};
  	return this.Data.grabData('publicRef', [], 'frasesData', filtersObj).then(function(data){
  		console.log(data);
  	});
  },

  actions: {

    focus: function(id, animation, speed){
      id = '#' + id;
      this.Animate.go(id,animation,speed);
    }

  }

});
