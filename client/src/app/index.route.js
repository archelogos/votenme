(function() {
  'use strict';

  angular
  .module('votenme')
  .config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    // Enabe HTML5 Mode
    $locationProvider.html5Mode(true);

    // Default State
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('init', {
      url: '/',
      templateUrl: 'app/components/view/init/init.html',
      controller: 'InitController',
      controllerAs: 'vm',
      resolve: {
        user: function(Data){
          Data.isLoading = true;
          return Data.getUser();
        },
      },
    })
    .state('candidate', {
      url: '/candidate',
      abstract: true,
      template: '<ui-view/>',
      resolve: {
        user: function(Data){
          Data.isLoading = true;
          return Data.getUser();
        },
        candidates: function(Data, Candidate){
          if(angular.isDefined(Data.getCandidates())){
            return Data.getCandidates();
          }
          // Query from ngResource element
          var candidates = Candidate.query();
          // Set promise in Data Factory
          Data.setCandidates(candidates.$promise);
          // Retun factory method response
          return Data.getCandidates();
        },
      },
    })
    .state('candidate.list', {
      url: '/list',
      parent: 'candidate',
      templateUrl: 'app/components/view/candidate/candidate.list.html',
      controller: 'CandidateController',
      controllerAs: 'vm',
    })
    .state('candidate.add', {
      url: '/add',
      parent: 'candidate',
      templateUrl: 'app/components/view/candidate/candidate.add.html',
      controller: 'CandidateController',
      controllerAs: 'vm',
    })
    .state('candidate.vote', {
      url: '/:id',
      parent: 'candidate',
      templateUrl: 'app/components/view/candidate/candidate.vote.html',
      controller: 'CandidateController',
      controllerAs: 'vm',
    })
    .state('results', {
      url: '/results',
      templateUrl: 'app/components/view/results/results.html',
      controller: 'ResultsController',
      controllerAs: 'vm',
      resolve: {
        candidates: function(Data, Candidate){
          if(angular.isDefined(Data.getCandidates())){
            return Data.getCandidates();
          }
          // Query from ngResource element
          var candidates = Candidate.query();
          // Set promise in Data Factory
          Data.setCandidates(candidates.$promise);
          // Retun factory method response
          return Data.getCandidates();
        },
      },
    })
    .state('user', {
      url: '/user',
      templateUrl: 'app/components/view/user/user.html',
      controller: 'UserController',
      controllerAs: 'vm',
      resolve: {
        user: function(Data, User){
          if(angular.isDefined(Data.getUser())){
            return Data.getUser();
          }
          // Query from ngResource element
          var user = User.query();
          // Set promise in Data Factory
          Data.setUser(user.$promise);
          // Retun factory method response
          return Data.getUser();
        },
      },
    })
    .state('about', {
      url: '/about',
      templateUrl: 'app/components/view/about/about.html',
      controller: 'AboutController',
      controllerAs: 'vm',
    })
  }

})();
