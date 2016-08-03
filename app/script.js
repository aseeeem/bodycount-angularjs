// script.js

	// declare a module
	var myApp = angular.module('myApp', ['ng-route']);
	
	// configure our routes
    myApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the buildings page
            .when('/buildings', {
                templateUrl : 'pages/buildings.html',
                controller  : 'pagesController'
            })

            // route for the count page
            .when('/count', {
                templateUrl : 'pages/count.html',
                controller  : 'pagesController'
            })
			.otherwise({redirectTo: '/'});
    });

   // create the controller and inject Angular's $scope
    myApp.controller('mainController', function($scope) {
	$scope.message = 'Welcome to BodyCount';
    });

    myApp.controller('buildingsController', function($scope) {
        $scope.message = 'List of buildings goes here.';
    });

    myApp.controller('countController', function($scope) {
        $scope.message = 'Display of population count goes here.';
    });
	myApp.controller('pagesController', function($scope) {
		$scope.message = 'Here is some message, but its in all pages.';
	});