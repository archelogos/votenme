(function() {
  'use strict';

  angular
    .module('votenme')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
