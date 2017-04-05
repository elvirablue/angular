angular.module('FuckingSite')
.config(function ($routeProvider){
	// body...
	$routeProvider
	.when('/team', {
		templateUrl: '/templates/team/index.html'
	})
	.when('/service', {
		templateUrl: '/templates/service/index.html'
	})
	.otherwise({redirectTo: '/'})
})