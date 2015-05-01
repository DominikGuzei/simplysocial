(function() {
  function TopMenuController ($scope, ngDialog) {
    this.openNewMessageModal = function () {
      ngDialog.open({
        template: 'templates/new_message_modal.html',
        className: 'new-message-modal'
      });
    };
  }
  TopMenuController.$inject = ['$scope', 'ngDialog'];
  SimplySocial.controller('TopMenuController', TopMenuController);
}());
