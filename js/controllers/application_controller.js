(function() {
  function ApplicationController ($scope, $http, ngDialog) {

    $scope.posts = [];
    $http.get('fixtures/posts.json').success(function(data) {
      $scope.posts = data;
    });

    this.openNewMessageModal = function () {
      ngDialog.open({
        template: 'templates/new_message_modal.html',
        className: 'new-message-modal'
      });
    };

    this.createNewMessage = function(message) {

      $scope.$apply(function() {
        $scope.posts.unshift({
          author: "Jessica Tuan",
          portrait: "images/profile-picture.png",
          message: message,
          postedAt: Date.now()
        });
      });
    };
  }
  ApplicationController.$inject = ['$scope', '$http', 'ngDialog'];
  SimplySocial.controller('ApplicationController', ApplicationController);
}());
