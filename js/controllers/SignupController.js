'use strict';
app.controller('SignupController', ['$scope', '$kinvey', '$location', function ($scope, $kinvey, $location) {
    $scope.signup = function () {
        var promise = $kinvey.User.signup({
            username: $scope.user.name,
            password: $scope.user.password,
            email: $scope.user.email
        });
        console.log("signup promise");
        promise.then(
            function () {
                //Kinvey signup finished with success
                console.log("signup success");
                //$location.path("templates/logged_in");
            },
            function (error) {
                //Kinvey signup finished with error
                $scope.errorDescription = error.description;
                console.log("signup error: " + error.description);
            }
        );
    }
}]);