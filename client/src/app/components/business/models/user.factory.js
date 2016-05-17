(function() {
  'use strict';

  angular
    .module('votenme')
    .factory('User', User);

    /**
    * Database connection for User
    * @TODO Need security Layer on top
    */

    /** @ngInject */
    function User(APP_CONFIG, $resource){

      return $resource(APP_CONFIG.API_URL+'user/:user', {user:'@id'}, {
        update: {
          method: 'PUT', // this method issues a PUT request
        },
        query:{
          isArray: false,
        },
        cache: true,
      });

    }

})();
