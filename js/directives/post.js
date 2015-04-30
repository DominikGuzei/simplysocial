
SimplySocial.directive('post', [function() {

  return {
    restrict: 'E',
    templateUrl: 'templates/directives/post.html',
    scope: {
      data: '=',
      showComments: '='
    },
    link: function(scope, element, attrs) {

      scope.toggleComments = function() {
        scope.showComments = !scope.showComments;
      };

    }
  };
}]);
