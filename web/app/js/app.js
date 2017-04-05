angular.module('FuckingSite',['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
        .when('/team',{
            templateUrl:'/templates/team/index.html'
        })
        .when('/service',{
            templateUrl: '/templates/service/index.html'
        })
        .when('/',{
            templateUrl:'/templates/service/index.html'
        })
        .when('/team/:id', {
        	 templateUrl:'/templates/team/show.html',
        	 controller: 'TeamController',
        	 controllerAs: 'team'
        })
        .otherwise({redirectTo:'/'})
    });