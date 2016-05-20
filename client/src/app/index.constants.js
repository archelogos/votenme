(function() {
  'use strict';

  angular
    .module('votenme')
    .constant('APP_CONFIG',{
        'APP_NAME' : 'votenme',
        'APP_VERSION' : '0.1.0',
        'APP_VERSION_NAME' : 'doughnut-insult',
        'LANGUAGES' : {
            'es-ES' : true,
            'en-EN' : false,
        },
        'DEBUG_MODE' : false,
        'ERROR_REPORT' : true,
        //'API_URL': 'http://localhost:8080/',
        'API_URL': 'https://api-dot-votenme.appspot.com/'
        //'API_URL': 'http://api.voten.me/'
    })

})();
