angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("core/navigation/top-bar.html","<div class=\"component-top-bar\">\n    <a href=\"javascript:;\" ng-if=\"false\" class=\"item attendance\" ng-click=\"onClickAttendBtn()\">考勤</a>\n    <a href=\"javascript:;\" class=\"item m-link\" ng-class=\"{ \'active\': $state.includes(\'administration.leave\') }\" ui-sref=\"administration.leave\" >请假 </a>\n    <a href=\"javascript:;\" class=\"item m-link\" ng-class=\"{ \'active\': $state.includes(\'administration.stamp\') }\" ui-sref=\"administration.stamp\" >用印</a>\n    <a href=\"javascript:;\" class=\"item m-link\" ng-class=\"{ \'active\': $state.includes(\'administration.car\') }\" ui-sref=\"administration.car\">用车</a>\n    <a href=\"javascript:;\" class=\"item m-link\" ng-class=\"{ \'active\': $state.includes(\'administration.goods\') }\" ui-sref=\"administration.goods\">物品申领</a>\n    <a href=\"javascript:;\" class=\"item m-link\" ng-class=\"{ \'active\': $state.includes(\'administration.businessCard\') }\" ui-sref=\"administration.businessCard\">名片制作</a>\n</div>");}]);
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