(function() {
  'use strict';

  angular
    .module('votenme')
    .factory('Data', Data);

    /** @ngInject */
    function Data(){

      var data = {};

      return {
        isLoading: false,
        getUser: function(){
          return data.User;
        },
        setUser: function(User){
          data.User = User;
        },
        getCandidates: function(){
          return data.Candidates;
        },
        setCandidates: function(Candidates){
          data.Candidates = Candidates;
        },
      }
    }

})();
