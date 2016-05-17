(function() {
  'use strict';

  angular
    .module('votenme')
    .controller('InitController', InitController);

  /** @ngInject */
  function InitController($timeout, Data, user) {
    var vm = this;
    Data.isLoading = false;

    vm.user = user;

  }

})();
