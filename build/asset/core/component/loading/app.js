angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("core/navigation/failure.html","<div class=\"failure core-component\">\n    <div class=\"ui-mask-transparent\"></div>\n    <div class=\"ui-toast\">\n        <i class=\"ui-icon-toast-failure\"></i>\n        <p class=\"ui-toast-content\">操作失败 {{messageFail}}</p>\n    </div>\n</div>");
$templateCache.put("core/navigation/loading.html","<div class=\"ui-loading-toast loading core-component\">\n    <div class=\"ui-mask-transparent\"></div>\n    <div class=\"ui-toast\">\n        <div class=\"ui-loading\">\n            <div class=\"ui-loading-leaf ui-loading-leaf-0\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-1\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-2\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-3\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-4\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-5\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-6\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-7\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-8\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-9\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-10\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-11\"></div>\n        </div>\n        <p class=\"ui-toast-content\">数据加载中</p>\n    </div>\n</div>");
$templateCache.put("core/navigation/success.html","<div class=\"success core-component\">\n    <div class=\"ui-mask-transparent\"></div>\n    <div class=\"ui-toast\">\n        <i class=\"ui-icon-toast\"></i>\n        <p class=\"ui-toast-content\">操作成功</p>\n    </div>\n</div>");}]);

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