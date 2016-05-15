(function() {
  'use strict';

  angular
    .module('votenme')
    .service('user', User);

    /**
    * Database connection for User
    * @TODO Need security Layer on top
    */

    /** @ngInject */
    function User(){

        /* CRUD */

        /**
        * @name add
        * @description add user
        * @param
        * @return
        */
        this.add = function (){

        };

        /**
        * @name get
        * @description get user
        * @param
        * @return
        */
        this.get = function (id){

        };

        /**
        * @name getAll
        * @description getAll user
        * @param
        * @return
        */
        this.getAll = function (){

        };

        /**
        * @name update
        * @description update user
        * @param
        * @return
        */
        this.update = function (){

        };

        /**
        * @name delete
        * @description delete user
        * @param
        * @return
        */
        this.delete = function (){

        };

    }

})();
