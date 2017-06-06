(function () {
    angular
        .module('app.core.component')
        .component('success', {
            transclude: true,
            templateUrl: 'core/loading/success.html',
            controller: SuccessController,
            controllerAs: 'context',
            bindings: {
                onStateChanged: '&',
            }
        });

    SuccessController.$inject = [];

    function SuccessController($timeout)
    {
        var context = this;
        init();

        function init()
        {
            $timeout(function () {
                context.onStateChanged();
            }, 500);
        }
    }

})();