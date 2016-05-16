(function() {
  'use strict';

  angular
    .module('votenme')
    .factory('Data', Data);

    /** @ngInject */
    function Data(){

      var data = {};

      return {
        getUser: function(){
          return data.User;
        },
        setUser: function(User){
          data.User = User;
        },
        getCandidate: function(){
          return data.Candidate;
        },
        setCandidate: function(Candidate){
          data.Candidate = Candidate;
        }
      }
    }

})();
