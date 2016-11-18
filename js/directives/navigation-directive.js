'use strict';
app.directive('navbar', navbar);

function navbar() {
    var directive = {
        restrict: 'E',
        templateUrl: 'templates/navigation.html',
        scope: {}
    };
    return directive;
}