'use strict';
var app = angular.module('loginApp', ['ngRoute']);
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider.when('/', {
        templateUrl: "templates/home.html"
        //controller:"LoginController"
    });
    $routeProvider.when('/signup', {
        templateUrl: "templates/signup.html"
    });
    $routeProvider.when('/login', {
        templateUrl: "templates/login.html"
    });
    $routeProvider.otherwise({redirectTo: '/'});
});