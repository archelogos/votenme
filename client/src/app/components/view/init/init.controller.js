(function() {
  'use strict';

  angular
    .module('votenme')
    .controller('InitController', InitController);

  /** @ngInject */
  function InitController($timeout, Data, user) {
    var vm = this;
    Data.notify('initialResolved');
    Data.notify('partialResolved');
    
    vm.user = user;

    var samples =
    [
      {
        name: 'Pato Donald',
        description: 'Cuac Cuac',
        imageUrl: 'assets/images/donald.jpg'
      },
      {
        name: 'Alberto Chicote',
        description: 'Experto en dar cera',
        imageUrl: 'assets/images/chicote.jpg'
      },
      {
        name: 'Pablo Iglesias',
        description: 'Un clásico, aunque pasadete',
        imageUrl: 'assets/images/pabloiglesias.jpg'
      },
      {
        name: 'Homer Simpson',
        description: 'No puede fallar',
        imageUrl: 'assets/images/homer.gif'
      }
    ];
    var randomIndex = Math.round(Math.random() * (samples.length-1));
    vm.randomHero = samples[randomIndex];

    vm.nextRandom = function(){
      var randomIndex = Math.round(Math.random() * (samples.length-1));
      vm.randomHero = samples[randomIndex];
    };

  }

})();
