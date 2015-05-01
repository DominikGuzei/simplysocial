
SimplySocial = angular.module('SimplySocial', [
  'ngRoute',
  'ngRetina',
  'ngDialog'
]);

SimplySocial.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'HomeController'
    })
    .when('/settings', {
      templateUrl: 'templates/settings.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
