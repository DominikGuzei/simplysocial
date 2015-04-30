(function() {
  function HomeController ($scope, $http) {
    $scope.posts = [];
    $http.get('fixtures/posts.json').success(function(data) {
      $scope.posts = data;
    });
  }
  HomeController.$inject = ['$scope', '$http'];
  SimplySocial.controller('HomeController', HomeController);
}());
