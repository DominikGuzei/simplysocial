
SimplySocial = angular.module('SimplySocial', [
  'ngRoute',
  'ngRetina'
]);

SimplySocial.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'HomeController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
