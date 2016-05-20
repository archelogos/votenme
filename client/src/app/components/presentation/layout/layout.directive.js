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

    }

    /** @ngInject */
    function LayoutController($scope, $state, $log, $mdSidenav, Data, APP_CONFIG) {
      var vm = this;
      vm.version = APP_CONFIG.APP_VERSION;

      $scope.initialLoading = Data.initialLoading;
      $scope.partialLoading = Data.partialLoading;

      $scope.user = Data.getUser();

      Data.subscribe('initialResolved', $scope,
        function(){
          $scope.initialLoading = Data.initialLoading;
          Data.getUser().then(function(data){$scope.user=data});});

      Data.subscribe('partialLoading', $scope, function(){$scope.partialLoading = Data.partialLoading;});
      Data.subscribe('partialResolved', $scope, function(){$scope.partialLoading = Data.partialLoading;});


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
