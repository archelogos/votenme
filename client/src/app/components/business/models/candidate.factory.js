(function() {
  'use strict';

  angular
    .module('votenme')
    .factory('Candidate', Candidate);

    /**
    * Database connection for Candidate
    * @TODO Need security Layer on top
    */

    /** @ngInject */
    function Candidate(APP_CONFIG, $resource){

      return $resource(APP_CONFIG.API_URL+'candidate/:candidate', {candidate:'@id'}, {
        update: {
          method: 'PUT', // this method issues a PUT request
        },
        query:{
          method: 'GET',
          isArray: false,
        },
        cache: true,
      });

    }

})();
