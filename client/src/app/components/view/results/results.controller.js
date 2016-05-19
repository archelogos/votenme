(function() {
  'use strict';

  angular
    .module('votenme')
    .controller('ResultsController', ResultsController);

  /** @ngInject */
  function ResultsController($timeout, candidates, Candidate, Data) {
    var vm = this;
    Data.notify('initialResolved');
    Data.notify('partialResolved');
    
    vm.candidates = candidates.items;
    vm.pageToken = candidates.nextPageToken;

    vm.loadMoreCandidates = function(){
      var auxCandidates = Candidate.query({pageToken: vm.pageToken}, function(){
        angular.forEach(auxCandidates.items, function(candidate){
          vm.candidates.push(candidate);
        });
        vm.pageToken = auxCandidates.nextPageToken;
      });
    };

  }
})();
