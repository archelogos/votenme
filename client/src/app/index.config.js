(function() {
  'use strict';

  angular
    .module('votenme')
    .config(config);

  /** @ngInject */
  function config(APP_CONFIG, $logProvider,$mdThemingProvider) {

    // Enable log
    $logProvider.debugEnabled(APP_CONFIG.DEBUG_MODE);

    $mdThemingProvider.theme('default')
    .primaryPalette('grey')
    .accentPalette('blue');
  }

})();
