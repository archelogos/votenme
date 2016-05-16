(function() {
  'use strict';

  angular
    .module('votenme')
    .factory('Candidate', Candidate);

    /**
    * Database connection for User
    * @TODO Need security Layer on top
    */

    /** @ngInject */
    function Candidate(APP_CONFIG, $resource){

      return $resource(APP_CONFIG.API_URL+'user/:candidate', {user:'@id'}, {
        update: {
          method: 'PUT' // this method issues a PUT request
        },
        cache: true
      });

    }

})();
