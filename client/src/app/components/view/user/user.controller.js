(function() {
  'use strict';

  angular
    .module('votenme')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController($timeout, user, Data) {
    var vm = this;
    Data.notify('initialResolved');
    Data.notify('partialResolved');
    
    vm.user = user;

  }
})();
