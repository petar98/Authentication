'use strict';
app.controller('LoginController', ['$scope', '$kinvey', function ($scope, $kinvey) {
    $scope.login = function() {
        //var promise = $kinvey.User.login($scope.email, $scope.password);
        //promise.then(function(user) {
        //    console.log("Login Success!");
        //}).catch(function(error) {
        //    console.log("Login Failed!");
        //});
        console.log("Hello");
        var promise = $kinvey.User.login({
            username: $scope.username,
            password: $scope.password
        });
        console.log(promise);
        promise.then(function(user) {
            console.log("Success" + user);
        }).catch(function(error) {
            console.log("error" + error);
        });
    };
}]);