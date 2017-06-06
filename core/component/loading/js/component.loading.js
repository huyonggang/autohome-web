(function () {
    angular
        .module('app.core.component')
        .component('loading', {
            transclude: true,
            templateUrl: 'core/loading/loading.html',
            controller: LoadingController,
            controllerAs: 'context',
            bindings: {

            }
        });

    LoadingController.$inject = [];

    function LoadingController()
    {
        var context = this;
    }
    
})();