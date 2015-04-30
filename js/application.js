
SimplySocial = angular.module('SimplySocial', [
  'ngRoute'
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
