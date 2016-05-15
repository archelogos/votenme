(function() {
  'use strict';

  angular
    .module('votenme')
    .directive('component', component);

  /** @ngInject */
  function component() {
    var directive = {
      restrict: 'EA',
      scope: {
        data: '='
      },
      template: 'app/components/presentation/component/component.html',
      link: linkFunc,
      controller: ComponentController,
      controllerAs: 'vm'
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
    function ComponentController($log) {
      var vm = this;


    }

  }

})();
