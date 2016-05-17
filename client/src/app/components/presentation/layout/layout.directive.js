(function() {
  'use strict';

  angular
    .module('votenme')
    .directive('vmLayout', vmLayout);

  /** @ngInject */
  function vmLayout() {
    var directive = {
      restrict: 'E',
      scope: {
        data: '=',
      },
      templateNamespace: 'html',
      templateUrl: 'app/components/presentation/layout/layout.html',
      link: linkFunc,
      controller: LayoutController,
      controllerAs: 'vm',
    };

    return directive;

    function linkFunc(scope, el, attr, vm) {
      var watcher;

      watcher = scope.$watch('', function() {

      });
      scope.$on('$destroy', function () {
        watcher();
      });
    }

    /** @ngInject */
    function LayoutController($rootScope, $state, $log, $mdSidenav) {
      var vm = this;

      vm.openLeftMenu = function() {
        $mdSidenav('left').toggle();
      };

      vm.goTo = function(state){
        $state.go(state);
        $mdSidenav('left').toggle();
      };

    }

  }

})();
