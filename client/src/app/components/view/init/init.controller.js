(function() {
  'use strict';

  angular
    .module('votenme')
    .controller('InitController', InitController);

  /** @ngInject */
  function InitController($timeout, user) {
    var vm = this;

    vm.user = user;

  }

})();
