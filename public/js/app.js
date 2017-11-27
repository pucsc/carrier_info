// Declares the initial angular module "flightsApp". Module grabs other controllers and services.
var app = angular.module('flightsApp', ['addCtrl', 'queryCtrl',  'headerCtrl', 'ngRoute'])

    // Configures Angular routing -- showing the relevant view and controller when needed.
    .config(function($routeProvider){

        // Join Team Control Panel
        $routeProvider.when('/webview', {
            controller: 'addCtrl',
            templateUrl: 'partials/addForm.html',

        // Find Teammates Control Panel
        }).when('/api', {
            controller: 'queryCtrl',
            templateUrl: 'partials/queryForm.html',

        // All else forward to the Join Team Control Panel
        }).otherwise({redirectTo:'/api'})
    });
