(function() {
  'use strict';

  angular
    .module('votenme')
    .controller('CandidateController', CandidateController);

  /** @ngInject */
  function CandidateController($timeout, $state, $mdBottomSheet, $mdDialog, $stateParams, Data, Utils, Candidate, User,
     user, candidates, Upload, APP_CONFIG) {

    var vm = this;
    Data.isLoading = false;

    vm.user = user;
    vm.candidates = candidates.items;
    vm.pageToken = candidates.nextPageToken;
    vm.newCandidate = {};
    vm.selectedCandidate = {};
    vm.status = 'ON_HOLD';

    /* Voting state */
    if($stateParams.id){
      vm.selectedCandidate = Utils.getById(vm.candidates, $stateParams.id);
      if(vm.selectedCandidate === null){
        vm.selectedCandidate = Candidate.get({candidate:$stateParams.id});
      }

    }


    vm.addCandidate = function (){
      vm.status = 'PROCESSING';

      Upload.upload({
        url: APP_CONFIG.API_URL + 'candidate',
        data: {file: vm.file, candidate: vm.newCandidate}
      }).then(function (candidate) {
        var user = vm.user;
        user.vote = true;
        user.candidate = candidate.data.id;
        User.update({user: vm.user.id}, user, function(){
          vm.status = 'SUCCESS';
          $state.go('results');
        });
      });

    };

    vm.addVote = function(){
      var user = vm.user;
      user.vote = true;
      user.candidate = vm.selectedCandidate.id;

      var candidate = vm.selectedCandidate;
      ++candidate.votes;

      vm.status = 'PROCESSING';
      Candidate.update({candidate: vm.selectedCandidate.id}, candidate,
        function(){
          User.update({user: vm.user.id}, user, function(){
            vm.status = 'SUCCESS';
            $state.go('results');
          });
      });
    };


    vm.loadMoreCandidates = function(){
      var auxCandidates = Candidate.query({pageToken: vm.pageToken}, function(){
        angular.forEach(auxCandidates.items, function(candidate){
          vm.candidates.push(candidate);
        });
        vm.pageToken = auxCandidates.nextPageToken;
      });
    };



    vm.imagePath = 'assets/images/student.jpg';


  }
})();
