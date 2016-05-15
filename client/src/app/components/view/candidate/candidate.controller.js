(function() {
  'use strict';

  angular
    .module('votenme')
    .controller('CandidateController', CandidateController);

  /** @ngInject */
  function CandidateController($timeout, $state, $mdBottomSheet, $mdDialog) {
    var vm = this;

    vm.imagePath = 'assets/images/student.jpg'

    vm.openBottomSheet = function() {
      $mdBottomSheet.show({
        template: '<md-bottom-sheet>Hello!</md-bottom-sheet>'
      });
    };

    vm.showConfirm = function(ev) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
      .title('Confirmas votar a')
      .textContent('Nombre')
      .targetEvent(ev)
      .ok('Votar')
      .cancel('Cancelar');
      $mdDialog.show(confirm).then(function() {
        //$scope.status = 'You decided to get rid of your debt.';
      }, function() {
        //$scope.status = 'You decided to keep your debt.';
      });
    };

  }
})();
