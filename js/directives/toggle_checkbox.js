SimplySocial.directive('toggleCheckbox', [function() {

  return {
    restrict: 'E',
    templateUrl: 'templates/directives/toggle_checkbox.html',
    scope: {
      isOn: '@',
      name: '@',
      label: '@'
    },
    link: function(scope, element, attrs) {

      scope.toggle = function() {
        scope.isOn = !scope.isOn;
      };

    }
  };
}]);
