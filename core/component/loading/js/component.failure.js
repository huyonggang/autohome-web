
(function () {
    angular
        .module('app.core.component')
        .component('failure', {
            transclude: true,
            templateUrl: 'core/loading/failure.html',
            controller: FailureController,
            controllerAs: 'context',
            bindings: {
                onStateChanged: '&',
            }
        });

    FailureController.$inject = ['$timeout'];

    function FailureController ($timeout)
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