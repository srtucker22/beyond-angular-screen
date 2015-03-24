'use strict';

// We assign everything to app to make the formatting of various components "cleaner"
var app = angular.module('demoApp', [
	'ngRoute'
]);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
		})
		.when('/news', {
			templateUrl: 'views/news.html',
			controller: 'NewsCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
});
