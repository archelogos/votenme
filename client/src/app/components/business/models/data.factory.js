(function() {
  'use strict';

  angular
    .module('votenme')
    .factory('Data', Data);

    /** @ngInject */
    function Data($rootScope){

      var data = {};

      return {
        initialLoading: true,
        partialLoading: false,
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
        subscribe: function(eventName, scope, callback) {
          var handler = $rootScope.$on(eventName, callback);
          scope.$on('$destroy', handler);
        },
        notify: function(eventName) {
          if(eventName === 'initialResolved')
            this.initialLoading = false;

          if(eventName === 'partialLoading')
            this.partialLoading = true;

          if(eventName === 'partialResolved')
            this.partialLoading = false;

          $rootScope.$emit(eventName);
        },
      }
    }

})();
