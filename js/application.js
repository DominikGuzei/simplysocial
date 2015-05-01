
SimplySocial = angular.module('SimplySocial', [
  'ngRoute',
  'ngRetina',
  'ngDialog'
]);

SimplySocial.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', { templateUrl: 'templates/home.html' })
    .when('/settings', { templateUrl: 'templates/settings.html' })
    .otherwise({ redirectTo: '/' });
}]);
