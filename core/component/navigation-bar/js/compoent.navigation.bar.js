/**
 * Created by AndGod.H on 16/4/14.
 */
(function () {
    angular
        .module('app.core.component')
        .component('navigationBar', {
            templateUrl: 'core/navigation-bar/navigation-bar.html',
            controller: NavigationBarController,
            controllerAs: 'context',
            bindings: {
            }
        });

    NavigationBarController.$inject = ['$scope', '$stateParams', '$rootScope', 'Core'];

    function NavigationBarController($scope, $stateParams, $rootScope, Core) {
        var context = this;
        $scope.$state = Core.$state;
        $scope.$stateParams = $stateParams;

        console.log("navigation bar init");
        getModuleList();

        var NAVIGATION_MENU_LIST = {
            ADMINISTRATION: 'administration',
            FINANCE: 'finance',
            WORK: 'work',
            FRAMEWORK: 'framework',
            SETTING: 'setting',
            MODULE: 'module'
        };

        Core.on(Core.Const.EVENT.EVENT_ORG_CHANGE,function(event,data){
            getModuleList();
        });

        $rootScope.$watch('toStateName', function(newValue, oldValue, scope){
            console.log("----watch to state name-----");
            processNavigationBar(newValue);
        });

        function processNavigationBar(toStateName)
        {
            Core.Log.d('看看');
            Core.Log.d(NAVIGATION_MENU_LIST);
            for (var i in NAVIGATION_MENU_LIST)
            {
                var item = NAVIGATION_MENU_LIST[i];

                if (toStateName && toStateName.indexOf(item) >= 0)
                {
                    showNavigationMenuList(item);
                }
            }
        }

        function showNavigationMenuList(type)
        {
            var itemsAdmin = [];
            var itemsFin = [];
            switch (type)
            {
                case NAVIGATION_MENU_LIST.ADMINISTRATION:
                case NAVIGATION_MENU_LIST.FINANCE:
                case NAVIGATION_MENU_LIST.MODULE:
                    itemsAdmin = [
                        {title: '报告', stateUiSref: 'administration.report', state: 'administration.index', icon: "home/img/icon-report.png"},
                        {title: "请假", stateUiSref: 'administration.leave', state: 'administration.index', icon: "process-setting/img/icon-process-askforleave.png"},
                        {title: '外勤', stateUiSref: 'administration.trip', state: 'administration.index', icon: "process-setting/img/icon-process-business-trip.png"},
                        {title: '物品申领', stateUiSref: 'administration.goods', state: 'administration.index', icon: "process-setting/img/icon-process-goods.png"},
                        {title: '名片制作', stateUiSref: 'administration.businessCard', state: 'administration.index', icon: "process-setting/img/icon-process-card.png"},
                        {title: '培训申请', stateUiSref: 'administration.train', state: 'administration.index', icon: "process-setting/img/icon-process-train.png"},
                        {title: '合同申请', stateUiSref: 'administration.contract', state: 'administration.index', icon: "process-setting/img/icon-process-contract.png"},
                        {title: '用印', stateUiSref: 'administration.stamp', state: 'administration.index', icon: "process-setting/img/icon-process-borrow-stamp.png"},
                        {title: '用车', stateUiSref: 'administration.car', state: 'administration.index', icon: "process-setting/img/icon-process-borrow-car.png"}
                    ];
                    itemsFin = [
                        {title: '报销', stateUiSref: 'finance.reimb', state: 'finance.index', icon: "process-setting/img/icon-process-reimb.png"},
                        {title: '差旅费', stateUiSref: 'finance.tripReimb', state: 'finance.index', icon: "asset/core/component/message-scroll/img/icon-message-trip-reimb.png"},
                        {title: '付款', stateUiSref: 'finance.pay', state: 'finance.index', icon: "process-setting/img/icon-process-pay.png"},
                        {title: '备用金', stateUiSref: 'finance.imprest', state: 'finance.index', icon: "process-setting/img/icon-process-imprest.png"}
                    ];
                    break;
                default:
                    break;
            }

            $scope.itemsAdmin = itemsAdmin;
            $scope.itemsFin = itemsFin;
        }

        function getModuleList() {
            Core.Api.APV.getApvCustomTemplateList().then(function (response) {
                Core.Log.d('aaa');
                Core.Log.d(response);
                if(response.code == 0) {
                    $scope.moduleList = response.data.apv_custom_template_list;
                    if ($scope.moduleList.length != 0) {
                        Core.Log.d(context.moduleList);
                        for (var i = 0; i < $scope.moduleList.length; i++) {
                            parseIcon($scope.moduleList[i]);
                        }
                        $scope.moduleList[0].isChecked = true;
                    }
                }
            });
        }

        function parseIcon(template) {
            var avatar = template.avatar;
            if (avatar) {
                if (avatar.indexOf("default") == 0) {
                    template.icon = 'process-setting/img/' + Core.Const.IMG[parseInt(avatar.substring(avatar.indexOf(":") + 1, avatar.length)) - 1];
                }
            }
            template.isChecked = false;
        }
    }

})();