import Ember from 'ember';


export default Ember.Route.extend({

  
  beforeModel: function(transition) {

    this.set('i18n.locale', 'es');

    // Initialize the datapoint
    return this.Data.initialize(transition).then(function(){
      console.log('Your are ready to rock & roll!');
      console.log('-------------------------------');
      console.log('-------------------------------');
      console.log('"self" is defined but never used xD');
      console.log('-------------------------------');
      console.log('-------------------------------');
    }, function(){
        // Abstract: catch error on datapoint intialization
    });

  },

  model: function(){
    return {
      frase: '',
      author: ''
    } 
  },  

  actions: {

    signIn: function(provider) {
      this.Data.signIn(provider);
    },

    signOut: function() {
      this.Data.signOut();
    },

    redirectHome: function(){
      this.transitionTo('index');
      // Hide sideNav
      $('.button-collapse').sideNav('hide');
    },

    setLocale: function (locale) {
      this.set('i18n.locale', locale);
      this.Toast.addToast(this.get('i18n').t('label.languageChange'), 2000);
    },

    focus: function(id, animation, speed){
      id = '#' + id;
      this.Animate.go(id,animation,speed);
    },

    focusHoverIn: function (id) {
      id = '#' + id;
      $(id).addClass('block-focus-border');
    },

    focusHoverOut: function (id) {
      id = '#' + id;
      $(id).removeClass('block-focus-border');
    },

    yesToModal: function(){
      $('.modal-action').click();
      var data = {
        message: 'yes',
        action: this.Data.get('modalAction'),
        data: this.Data.get('modalData')
      };
      var currPath = this.router.currentRouteName;
      Flamestack.__container__.lookup('controller:' + currPath).set('modalAnswer', data);
    },

    noToModal: function(){
      $('.modal-action').click();
      var data = {
        message: 'no',
        action: this.Data.get('modalAction'),
        data: this.Data.get('modalData')
      };
      var currPath = this.router.currentRouteName;
      Flamestack.__container__.lookup('controller:' + currPath).set('modalAnswer', data);
    },



    /* FRASES - WEB SPECIFIC ACTIONS */

    closeNewEntryModal: function(){
      var clearModel = {
        frase: '',
        author: ''
      };
      this.controllerFor('application').set('model', clearModel);
      $('#modalNuevaEntrada').closeModal();
    },

    sendNewEntry: function(){
      var dateNow = new Date();
      dateNow = dateNow.getTime();
      var dataObj = {
        userName: this.get('session.currentUser.displayName'),
        userImg: this.get('session.currentUser.profileImageURL'),
        frase: this.controllerFor('application').get('model.frase'),
        author: this.controllerFor('application').get('model.author'),
        date: dateNow,
        votos: 0
      }
      this.Data.pushData('publicRef', ['frases'], dataObj).then(function(data){
        if(this.Data.get('frasesData') !== null){
          this.Data.get('frasesData').push(dataObj);
        }else{
          this.Data.set('frasesData', [dataObj]);
        }

        var clearModel = {
          frase: '',
          author: ''
        };
        this.controllerFor('application').set('model', clearModel);

        $('#modalNuevaEntrada').closeModal();
        this.Toast.addToast('Lección de vida compartida', 2000);
      }.bind(this));
    }
  }
});
