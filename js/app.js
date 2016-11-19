'use strict';
var initialized = false;
var app = angular.module('loginApp', ['ngRoute', 'kinvey']);
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider.when('/', {
        templateUrl: "templates/home.html",
        controller:"LoginController"
    });
    $routeProvider.when('/signup', {
        templateUrl: "templates/signup.html",
        controller: "SignupController"
    });
    $routeProvider.when('/login', {
        templateUrl: "templates/login.html"
    });
    $routeProvider.otherwise({redirectTo: '/'});
});

app.config(['$kinveyProvider', function($kinveyProvider) {
    $kinveyProvider.init({
        appKey: 'kid_HkruFRn-x',
        appSecret: 'afa88e50a33447a8accfda2707207316'
    });
}]);

app.run(['$kinvey', function($kinvey) {
    var promise = $kinvey.ping();
    promise.then(function(response) {
        console.log('Kinvey Ping Success. Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey);
    }, function(error) {
        console.log('Kinvey Ping Failed. Response: ' + error.description);
    });
}]);