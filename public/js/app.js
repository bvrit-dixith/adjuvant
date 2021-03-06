var adjuvant = angular.module('adjuvant', ['ngRoute', 'tabsController', 'juiceController',
                                      'invoiceController', 'usersController',
                                      'mongooseService', 'invoiceService'])

adjuvant.config(function($routeProvider) {
    $routeProvider
        .when('/manageJuices', {
            templateUrl: 'partials/manageJuices.html',
            controller: 'juiceController'
        })
        .when('/invoice', {
            templateUrl: 'partials/invoice.html',
            controller: 'invoiceController'
        })
        .when('/manageUsers', {
            templateUrl: 'partials/manageUsers.html',
            controller: 'usersController'
        })
       .otherwise({
            redirectTo: '/manageJuices'
        });
});
