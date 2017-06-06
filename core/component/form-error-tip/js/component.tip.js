/**
 * Created by dd on 2/24/16.
 */
(function () {
    angular
        .module('app.core.component')
        .component('formErrorTip', {
            templateUrl: 'core/form-error-tip/tip.html',
            controller: TipController,
            controllerAs: 'context',
            // bindToController: true,
            bindings: {
                show: '=',
                content: '='
            }
        });

    TipController.$inject = ['$scope', '$timeout', 'Log'];

    function TipController($scope, $timeout, Log)
    {
        var context = this;
        $scope.$watch('context.show', function(newValue, oldValue) {
            if (newValue && !oldValue)
            {
                $timeout(function() {
                    context.show = false;
                }, 3000);
            }
        });
    }

})();