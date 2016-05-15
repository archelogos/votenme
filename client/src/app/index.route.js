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
            controllerAs: 'init'
        })
        .state('candidate', {
            url: '/candidate',
            abstract: true,
            template: '<ui-view/>'
        })
        .state('candidate.list', {
            url: '/list',
            parent: 'candidate',
            templateUrl: 'app/components/view/candidate/candidate.list.html',
            controller: 'CandidateController',
            controllerAs: 'candidate'
            //resolve:
        })
        .state('candidate.add', {
            url: '/add',
            parent: 'candidate',
            templateUrl: 'app/components/view/candidate/candidate.add.html',
            controller: 'CandidateController',
            controllerAs: 'candidate'
            //resolve:
        })
        .state('candidate.vote', {
            url: '/vote',
            parent: 'candidate',
            templateUrl: 'app/components/view/candidate/candidate.vote.html',
            controller: 'CandidateController',
            controllerAs: 'candidate'
            //resolve:
        })
        .state('results', {
            url: '/results',
            templateUrl: 'app/components/view/results/results.html',
            controller: 'ResultsController',
            controllerAs: 'results'
            //resolve:
        });
    }

})();
