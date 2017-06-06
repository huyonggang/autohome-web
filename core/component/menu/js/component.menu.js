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