/**
 * Created by dd on 2/24/16.
 */
(function () {
    angular
        .module('app.core.component')
        .component('aside', {
            templateUrl: 'core/aside/aside.html',
            controller: AsideController,
            controllerAs: 'context',
            bindings: {
                isShowAll: "="
            }
        });

    AsideController.$inject = ['$scope', '$rootScope', '$location', 'Core'];

    function AsideController($scope, $rootScope, $location, Core) {
        var context = this;
        $scope.$state = Core.$state;

        $scope.onClickLogo = function () {
            Core.$window.parent.postMessage({action: 1}, "*");
        };

        $scope.onClickItem = function (go) {
            console.log(go);
            Core.go(go);
        };

        $scope.itemList = [
            {
                img: 'asset/core/component/aside/img/icon-home.png',
                heightLight: 'asset/core/component/aside/img/icon-home-heighlight.png',
                stateUiSref: 'admin.user',
                state: 'admin.user',
                title: '用户管理'
            },

            {
                img: 'asset/core/component/aside/img/icon-apv.png',
                heightLight: 'asset/core/component/aside/img/icon-apv-heighlight.png',
                stateUiSref: 'admin.merchant',
                state: 'admin.merchant',
                title: '商户管理'
            },

            {
                img: 'asset/core/component/aside/img/icon-module-apv.png',
                heightLight: 'asset/core/component/aside/img/icon-module-apv-heightlight.png',
                stateUiSref: 'admin.recharge',
                state: 'admin.recharge',
                title: '充值管理'
            },
            // {
            //     img: 'asset/core/component/aside/img/icon-work.png',
            //     heightLight: 'asset/core/component/aside/img/icon-work-heighlight.png',
            //     stateUiSref: 'admin.withdraw',
            //     state: 'admin.withdraw',
            //     title: '提现管理'
            // },
            {
                img: 'asset/core/component/aside/img/icon-setting.png',
                heightLight: 'asset/core/component/aside/img/icon-setting-heighlight.png',
                stateUiSref: 'admin.discount',
                state: 'admin.discount',
                title: '折扣管理'
            },
            {
                img: 'asset/core/component/aside/img/icon-work.png',
                heightLight: 'asset/core/component/aside/img/icon-work-heighlight.png',
                stateUiSref: 'admin.advertising',
                state: 'admin.advertising',
                title: '广告管理'
            },
            {
                img: 'asset/core/component/aside/img/icon-setting.png',
                heightLight: 'asset/core/component/aside/img/icon-setting-heighlight.png',
                stateUiSref: 'admin.oil-manager',
                state: 'admin.oil-manager',
                title: '油价管理'
            },
            {
                img: 'asset/core/component/aside/img/icon-setting.png',
                heightLight: 'asset/core/component/aside/img/icon-setting-heighlight.png',
                stateUiSref: 'admin.invoice',
                state: 'admin.invoice',
                title: '发票管理'
            }

        ];
    }

})();