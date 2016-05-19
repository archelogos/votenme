(function() {
  'use strict';

  angular
    .module('votenme')
    .constant('APP_CONFIG',{
        'APP_NAME' : 'votenme',
        'APP_VERSION' : '0.0.0',
        'APP_VERSION_NAME' : 'just-talking',
        'LANGUAGES' : {
            'es-ES' : true,
            'en-EN' : true,
        },
        'DEBUG_MODE' : true,
        'ERROR_REPORT' : false,
        //'API_URL': 'http://localhost:8080/',
        'API_URL': 'https://api-dot-votenme.appspot.com/'
    })

})();
