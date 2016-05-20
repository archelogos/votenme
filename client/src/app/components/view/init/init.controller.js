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
        name: 'Pablo Iglesias',
        description: 'Candidato de Podemos. Coletero.',
        imageUrl: 'assets/images/iglesias.jpg'
      },
      {
        name: 'Pedro Sánchez',
        description: 'Candidato del PSOE. Jugaba con Action Man.',
        imageUrl: 'assets/images/sanchez.jpg'
      },
      {
        name: 'Mariano Rajoy',
        description: 'Candidato del PP. Es divertido cuando habla.',
        imageUrl: 'assets/images/rajoy.jpg'
      },
      {
        name: 'Albert Rivera',
        description: 'Candidato de Ciudadanos. Ha dejado los Phoskitos',
        imageUrl: 'assets/images/rivera.jpg'
      },
      {
        name: 'Homer Simpson',
        description: 'Cuando lo simple funciona no te compliques.',
        imageUrl: 'assets/images/homer.gif'
      },
      {
        name: 'Alberto Chicote',
        description: 'No hará promesas, pero dará la cera que necesita el país.',
        imageUrl: 'assets/images/chicote.jpg'
      },
      {
        name: 'Darth Vader',
        description: 'Nos adentrará en la oscuridad. ¿Más?',
        imageUrl: 'assets/images/vader.jpg'
      },
      {
        name: 'Tyrion Lannister',
        description: 'Parece mal pájaro pero es puro amor.',
        imageUrl: 'assets/images/tyrion.jpg'
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
