'use strict';

var app = angular.module('app', [
    // Angular modules
    'ngRoute',// routing
    'ngSanitize'
]);

// Handle routing errors and success events
app.run(['$route', '$rootScope', '$location', function ($route, $rootScope, $location) {
    $rootScope.location = $location;
}]);
