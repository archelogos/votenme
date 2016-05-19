(function() {
  'use strict';

  angular
    .module('votenme')
    .directive('vmFooter', vmFooter);

  /** @ngInject */
  function vmFooter() {
    var directive = {
      restrict: 'E',
      scope: {
        data: '=',
      },
      templateNamespace: 'html',
      templateUrl: 'app/components/presentation/footer/footer.html',
      link: linkFunc,
      controller: FooterController,
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
    function FooterController($scope, $state, $log, $mdSidenav, Data) {
      var vm = this;

      $scope.initialLoading = Data.initialLoading;

      Data.subscribe('initialResolved', $scope, function(){$scope.initialLoading = Data.initialLoading;});

    }

  }

})();
