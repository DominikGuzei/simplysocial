
SimplySocial.directive('composer', ['$timeout', function($timeout) {

  return {
    restrict: 'E',
    templateUrl: 'templates/directives/composer.html',
    scope: {
      placeholder: '@',
    },
    link: function(scope, element, attrs) {
      scope.message = attrs.placeholder || '';
      // Focus message input when rendered
      $timeout(function() {
        element.find('.message').elastic().focus();
      });
    }
  };
}]);
