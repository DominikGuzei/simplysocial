SimplySocial.directive('toggle', [function() {

  return {
    restrict: 'E',
    templateUrl: 'templates/directives/toggle.html',
    scope: {
      isOn: '@',
      name: '@',
      label: '@',
      type: '@'
    },
    link: function(scope, element, attrs) {

      scope.type = attrs.type || 'checkbox';
      if(attrs.isOn == 'true') {
        scope.isOn = true;
      }
      else {
        scope.isOn = false;
      }

      scope.toggle = function() {
        scope.isOn = !scope.isOn;
      };

    }
  };
}]);
