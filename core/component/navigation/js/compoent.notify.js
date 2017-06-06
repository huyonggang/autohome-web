(function () {
    angular
        .module('app.core.component')
        .component('notify', {
            templateUrl: 'core/navigation/notify.html',
            controller: InviteController,
            controllerAs: 'context',
            bindings: {
                onClickMask: '&'
            }
        });

    InviteController.$inject = ['$scope','Core'];

    function InviteController($scope,Core) {
        var context = this;
        context.onClickApvNotify = onClickApvNotify;

        Core.Log.d('companyList');
        init();

        function init() {
        }

        function onClickApvNotify(){
            Core.Util.go('message.html');
        }

    }
})();