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
        .otherwise({redirectTo:'/'})
    });