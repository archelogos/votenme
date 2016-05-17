(function() {
  'use strict';

  angular
    .module('votenme')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController($timeout, user) {
    var vm = this;

    vm.user = user;

  }
})();
