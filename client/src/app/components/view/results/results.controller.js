(function() {
  'use strict';

  angular
    .module('votenme')
    .controller('ResultsController', ResultsController);

  /** @ngInject */
  function ResultsController($timeout) {
    var vm = this;

    vm.imagePath = 'assets/images/student.jpg';

  }
})();
