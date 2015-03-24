'use strict';

angular
	.module('demoApp', [
		'ngRoute'
	])
	.config(function($routeProvider) {
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
