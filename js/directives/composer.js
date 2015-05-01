
SimplySocial.directive('composer', ['$timeout', function($timeout) {

  return {
    restrict: 'E',
    templateUrl: 'templates/directives/composer.html',
    scope: {
      placeholder: '@',
      onSubmit: '&'
    },
    link: function(scope, element, attrs) {
      scope.message = attrs.placeholder || '';
      message = element.find('.message');
      // Focus message input when rendered
      $timeout(function() {
        message.elastic().focus();
      });

      element.keydown(function(event) {
        if(event.keyCode == 13) { // ENTER KEY
          event.preventDefault();
          scope.onSubmit({text: message.val()});
          message.val('');
        }
      });
    }
  };
}]);
