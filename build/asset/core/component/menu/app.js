angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("core/navigation/menu.html","<div ng-if=\"context.menuShow\" class=\"menu\">\n\n    <div ng-if=\"context.show\" class=\"home-menu-bg\" ng-click=\"context.onClickMenu()\"></div>\n\n    <div class=\"home-menu\">\n        <div class=\"menu-button\" ng-click=\"context.onClickMenu()\">\n            <img class=\"menu-icon-{{context.show}}\" src=\"core/menu/img/home-menu-icon.png\">\n        </div>\n\n        <div ng-if=\"context.show\" class=\"menu-home\" ng-click=\"context.onClickHome()\">\n            <span class=\"menu-text\">首页</span>\n            <img class=\"menu-sub-icon\" src=\"core/menu/img/menu-home-icon.png\">\n        </div>\n\n        <div ng-if=\"context.show\" class=\"menu-message\" ng-click=\"context.onClickMessage()\">\n            <span class=\"menu-text\">消息</span>\n            <img class=\"menu-sub-icon\" src=\"core/menu/img/menu-message-icon.png\">\n        </div>\n\n    </div>\n\n</div>");}]);
/**
 * Created by dd on 2/24/16.
 */
(function () {
    angular
        .module('app.core.component')
        .component('menu', {
            templateUrl: 'core/menu/menu.html',
            controller: MenuController,
            controllerAs: 'context',
            bindings: {}
        });

    MenuController.$inject = ['$scope', '$rootScope', '$location', 'Core'];

    function MenuController($scope, $rootScope, $location, Core) {
        var context = this;
        context.onClickMenu = onClickMenu;
        context.onClickHome = onClickHome;
        context.onClickMessage = onClickMessage;

        //processShow();

        $rootScope.$on("$locationChangeSuccess", function (event, newUrl, oldUrl, newState, oldState) {
            processShow();
        });

        function processShow() {

            context.menuShow = false;
            context.show = false;

            var route = Core.Util.getCurrentRoute();

            if (!route) {
                Core.Log.d('-------------------route--------------------------');
            }

            if (Core.Util.inArray(route,Core.Config.ROUTE_LIST_SHOW_MENU)) {
                context.menuShow = true;
            }
        }

        function onClickMenu() {
            context.show = !context.show;
        }

        function onClickHome() {
            Core.Util.go('home.html');
        }

        function onClickMessage() {
            Core.Log.d("点击了消息");
        }

    }

})();