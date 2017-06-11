angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("core/navigation/toast.html","<div class=\"core-component toast\" ng-class=\"{success:\'success\',error:\'error\',alert:\'alert\'}[context.toast.class]\" ng-if=\"context.show\">\n    <div class=\"ui-mask-transparent\"></div>\n    <div class=\"ui-toast\">\n        <img class=\"ui-icon-toast\" ng-src=\"{{context.toast.img}}\">\n        <div class=\"ui-toast-content\">{{context.content}}</div>\n    </div>\n</div>");}]);
(function () {
    angular
        .module('app.core.component')
        .component('toast', {
            templateUrl: 'core/toast/toast.html',
            controller: ToastController,
            controllerAs: 'context',
            bindings: {
                show: '=',
                content: '=',
                path: '=',
                duration: '=',
                type: '='
            }
        });

    ToastController.$inject = ['$scope', '$location', '$timeout', 'Core'];

    function ToastController($scope, $location, $timeout, Core) {

        var context = this;
        var toast ={};
        context.toast = toast;

        $scope.$watch('context.show', function (newValue, oldValue) {
            if(newValue!=oldValue)
            {

                if(context.show == false)
                {
                    return;
                }

                switch(context.type){
                    case 'error':
                        toast.class = 'error';
                        toast.img = 'core/toast/img/icon-toast-error.png'
                        break;
                    case 'success':
                        toast.class = 'success';
                        toast.img = 'core/toast/img/icon-toast-success.png'
                        break;
                    case 'alert':
                        toast.class = 'alert';
                        toast.img = 'core/toast/img/icon-toast-alert.png'
                        break;
                    default :
                        toast.class = 'alert';
                        toast.img = 'core/toast/img/icon-toast-alert.png'
                        break;
                }

                $timeout(function () {
                    context.show = false;
                    context.path ? Core.Util.goToRoute(context.path) : '';
                }, 2000);
            }

        });
    }
})();