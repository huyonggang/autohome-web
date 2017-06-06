(function () {
    angular
        .module('app.core.component')
        .component('topBar', {
            templateUrl: 'core/top-bar/top-bar.html',
            controller: ToastController,
            controllerAs: 'context',
            bindings: {
            }
        });

    ToastController.$inject = ['$scope', '$location', '$timeout', 'Core'];

    function ToastController($scope, $location, $timeout, Core) {

        context.toast = toast;

        
    }
})();