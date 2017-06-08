angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("core/navigation/setting-bar.html","<div class=\"component-process-menu task-holder\">\n\n    <div class=\"menu-sub-title m-link\" href=\"javascript:;\" ng-click=\"onClickProcessMenu()\">\n        <div class=\"process-menu-other-holder\">\n            <span class=\"defaule-title\" style=\"font-weight: 500\">流程设置</span>\n            <img class=\"icon-right\" src=\"asset/core/component/setting-bar/img/icon-bottom.png\">\n        </div>\n    </div>\n\n    <div class=\"menu-sub-title-holder\" ng-show=\"context.showIndex||$state.includes(\'setting.index\')\">\n        <div ng-repeat=\"item in defaultItems\" class=\"menu-sub-other-title m-link\"\n             ng-class=\"{\'checked-true\':item.isChecked&&$state.includes(\'setting.index\')}\"\n             ng-click=\"onClickMenu(item,0)\">\n            <div class=\"apv-menu-holder\">\n                <!--<img class=\"menu-icon\" ng-src=\"{{item.icon}}\"/>-->\n                <span class=\"menu-title\">{{item.title}}审批流程</span>\n            </div>\n        </div>\n        <div class=\"menu-sub-other-title m-link\" ng-click=\"onClickSystemAPv()\">\n            <div class=\"apv-menu-other-holder\">\n                <!--<img class=\"menu-icon\" ng-src=\"process-setting/img/icon-system.png\"/>-->\n                <span class=\"menu-title\">系统审批</span>\n                <img class=\"icon-bottom\" src=\"asset/core/component/setting-bar/img/icon-bottom.png\">\n            </div>\n        </div>\n        <div ng-show=\"context.showNormal\" ng-repeat=\"item in menuItems\" class=\"menu-sub-title m-link \"\n             ng-class=\"{\'checked-true\':item.isChecked&&$state.includes(\'setting.index\')}\"\n             ng-click=\"onClickMenu(item,1)\">\n            <div class=\"apv-menu-holder\">\n                <img class=\"menu-icon\" ng-src=\"{{item.icon}}\"/>\n                <span class=\"menu-title\">{{item.title}}</span>\n            </div>\n        </div>\n        <div class=\"menu-sub-other-title m-link\" ng-click=\"onClickCustomApv()\" ng-if=\"moduleList.length > 0\">\n            <div class=\"apv-menu-other-holder\">\n                <!--<img class=\"menu-icon\" ng-src=\"process-setting/img/icon-module.png\"/>-->\n                <span class=\"menu-title\">自定义审批</span>\n                <img class=\"icon-bottom\" src=\"asset/core/component/setting-bar/img/icon-bottom.png\">\n            </div>\n        </div>\n        <div ng-show=\"context.showModule\" ng-repeat=\"item in moduleList\" class=\"menu-sub-title m-link checked-{{item.isChecked}}\" ng-click=\"onClickMenu(item,2)\">\n            <div class=\"apv-menu-holder\">\n                <img class=\"menu-icon\" ng-src=\"{{item.img}}\"/>\n                <span class=\"menu-title\">{{item.title}}</span>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"menu-sub-title menu-default m-link\" href=\"javascript:;\"\n         ng-class=\"{\'checked-true\':$state.includes(\'setting.auth\')}\" ng-click=\"onClickAuth()\">\n        <div class=\"process-menu-holder\">\n            <span class=\"defaule-title\" style=\"font-weight: 500\">权限设置</span>\n        </div>\n    </div>\n    <div class=\"menu-sub-title menu-default m-link\" href=\"javascript:;\"\n         ng-click=\"onClickModule()\">\n        <div class=\"process-menu-other-holder\">\n            <span class=\"defaule-title\" style=\"font-weight: 500\">板块设置</span>\n            <img class=\"icon-right\" src=\"asset/core/component/setting-bar/img/icon-bottom.png\">\n        </div>\n    </div>\n\n    <div ng-show=\"context.showSpecial||$state.includes(\'setting.trip-reimb\')||$state.includes(\'setting.card\')||$state.includes(\'setting.module\')\" class=\"menu-sub-title-holder\" ng-click=\"onClickModule()\">\n        <div class=\"menu-sub-other-title m-link menu-default\">\n            <div class=\"apv-menu-other-holder\">\n                <!--<img class=\"menu-icon\" ng-src=\"process-setting/img/icon-system.png\"/>-->\n                <span class=\"menu-title\">系统审批</span>\n                <img class=\"icon-bottom\" src=\"asset/core/component/setting-bar/img/icon-bottom.png\">\n            </div>\n        </div>\n        <div class=\"menu-sub-title m-link menu-default\" ng-class=\"{\'checked-true\':context.isContractChecked&&$state.includes(\'setting.module\')}\" ng-click=\"onClickContract()\">\n            <div class=\"apv-menu-holder\">\n                <img class=\"menu-icon\" ng-src=\"process-setting/img/icon-process-contract.png\"/>\n                <span class=\"menu-title\">合同</span>\n            </div>\n        </div>\n        <div class=\"menu-sub-title m-link menu-default\" ng-class=\"{\'checked-true\':context.isTrainChecked&&$state.includes(\'setting.module\')}\"\n             ng-click=\"onClickTrain()\">\n            <div class=\"apv-menu-holder\">\n                <img class=\"menu-icon\" ng-src=\"process-setting/img/icon-process-train.png\"/>\n                <span class=\"menu-title\">培训</span>\n            </div>\n        </div>\n        <div class=\"menu-sub-title m-link menu-default\" ui-sref=\"setting.card\" ng-class=\"{\'checked-true\':context.isCardChekced&&$state.includes(\'setting.card\')}\"\n             ng-click=\"onClickCard()\">\n            <div class=\"apv-menu-holder\">\n                <img class=\"menu-icon\" ng-src=\"process-setting/img/icon-process-card.png\"/>\n                <span class=\"menu-title\">名片</span>\n            </div>\n        </div>\n        <div class=\"menu-sub-title m-link menu-default\" ui-sref=\"setting.trip-reimb\" ng-class=\"{\'checked-true\':$state.includes(\'setting.trip-reimb\')}\">\n            <div class=\"apv-menu-holder\">\n                <img class=\"menu-icon\" ng-src=\"process-setting/img/icon-process-trip-reimb.png\"/>\n                <span class=\"menu-title\">差旅费</span>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"menu-sub-title menu-default m-link\" ui-sref=\"setting.moduleList\" href=\"javascript:;\"\n         ng-class=\"{\'checked-true\':$state.includes(\'setting.moduleList\')}\"\n         ng-click=\"onClickModuleList()\">\n        <div class=\"process-menu-holder\">\n            <span class=\"defaule-title\" style=\"font-weight: 500\">自定义审批设置</span>\n        </div>\n    </div>\n</div>");}]);
(function () {
    angular
        .module('app.core.component')
        .component('settingBar', {
            templateUrl: 'core/setting-bar/setting-bar.html',
            controller: searchBarController,
            controllerAs: 'context',
            bindings: {
                onClickIndex : '&',
                onClickContract : '&',
                onClickTrain : '&'
            }
        });

    searchBarController.$inject = ['$scope', 'Core'];

    function searchBarController($scope, Core) {
        var context = this;
        var imgIconList = [
            {img:'process-setting/img/icon-process-reimb.png'},
            {img:'process-setting/img/icon-process-askforleave.png'},
            {img:'process-setting/img/icon-process-business-trip.png'},
            {img:'process-setting/img/icon-process-pay.png'},
            {img:'process-setting/img/icon-process-card.png'},
            {img:'process-setting/img/icon-process-imprest.png'},
            {img:'process-setting/img/icon-process-contract.png'},
            {img:'home/img/icon-report.png'},
            {img:'process-setting/img/icon-process-goods.png'},
            {img:'process-setting/img/icon-process-borrow-stamp.png'},
            {img:'process-setting/img/icon-process-borrow-car.png'},
            {img:'process-setting/img/icon-process-train.png'}
        ];

        $scope.$state = Core.$state;

        Core.on(Core.Const.EVENT.EVENT_ORG_CHANGE, function (event, data) {
            init();
        });

        $scope.clearAllChecked = clearAllChecked;
        context.showIndex = false;
        context.showNormal = false;
        context.showModule = false;
        context.showSpecial = false;
        
        $scope.onClickProcessMenu = function () {
            context.showIndex = !context.showIndex;
            context.showNormal = false;
            context.showModule = false;
            context.showSpecial = false;
        };
        
        $scope.onClickSystemAPv = function () {
            context.showIndex = true;
            context.showNormal = !context.showNormal;
            context.showModule = false;
            context.showSpecial = false;
        };
        
        $scope.onClickCustomApv = function () {
            context.showIndex = true;
            context.showNormal = false;
            context.showModule = !context.showModule;
            context.showSpecial = false;
        };

        $scope.onClickModule = function () {
            context.showIndex = false;
            context.showNormal = false;
            context.showModule = false;
            context.showSpecial = !context.showSpecial;
        };
        
        var orgRootId;
        Core.Api.ORG.getDefaultOrgRoot().then(function (response) {
            orgRootId = response.id;
        });
        
        $scope.onClickAuth = function () {
            Core.Api.ORG.getDefaultOrgRoot().then(function (response) {
                orgRootId = response.id;
                Core.Data.set(Core.Const.DATA.KEY_SETTING_CLICK_ITEM,{go:'auth'});
                Core.Log.d(Core.Data.getUser());
                Core.Api.AUTH.getAuth(orgRootId,Core.Data.getUser().id).then(function (response) {
                    Core.Log.d('getAuth');
                    Core.Log.d(response);
                    if(response.code == 0){
                        if(response.data.auth['oa.all']) {
                            Core.go('setting.auth');
                        }
                        else {
                            Core.Notify.info('权限不足');
                        }
                    }
                }, function(reason) {
                    context.isOpen = false;
                });
            });
            
        };
        
        $scope.onClickModuleList = function () {
            Core.Data.set(Core.Const.DATA.KEY_SETTING_CLICK_ITEM,{go:'moduleList'});
        };
        
        $scope.onClickCard = function () {
            Core.Data.set(Core.Const.DATA.KEY_SETTING_CLICK_ITEM,{go:'card'});
        };
        
        
        $scope.onClickMenu = function (item,index) {
            clearAllChecked();
            Core.Data.set(Core.Const.DATA.KEY_SETTING_CLICK_ITEM,{go:'index',value:item});
            if($scope.$state.includes('setting.index')) {
                for (var i = 0; i < $scope.menuItems.length; i++) {
                    var menuItem = $scope.menuItems[i];
                    menuItem.isChecked = menuItem.type == item.type;
                }
                for (var j = 0; j < $scope.moduleList.length; j++) {
                    var moduleItem = $scope.moduleList[j];
                    moduleItem.isChecked = moduleItem.templateId == item.templateId;
                }
                for (var m = 0; m < $scope.defaultItems.length; m++) {
                    var defaultItem = $scope.defaultItems[m];
                    defaultItem.isChecked = defaultItem.type == item.type;
                }
                context.onClickIndex({item:item});
            }
            else {
                $scope.$state.go('setting.index');
            }
            $scope.showModule=false;
            $scope.showNormal=false;
        };
        
        function clearAllChecked() {
            for (var i = 0; i < $scope.menuItems.length; i++) {
                $scope.menuItems[i].isChecked = false;
            }
            if($scope.moduleList) {
                for (var j = 0; j < $scope.moduleList.length; j++) {
                    $scope.moduleList[j].isChecked = false;
                }
            }
            
            $scope.defaultItems[0].isChecked = false;
            context.isContractChecked = false;
            context.isTrainChecked = false;
        }
        
        $scope.onClickContract = function () {
            clearAllChecked();
            Core.Data.set(Core.Const.DATA.KEY_SETTING_CLICK_ITEM,{go:'contract'});
            context.isContractChecked = true;
            if($scope.$state.includes('setting.module')) {
                // $scope.showSpecial = false;
                context.onClickContract();
            }
            else {
                $scope.$state.go('setting.module');
            }
        };

        $scope.onClickTrain = function () {
            clearAllChecked();
            Core.Data.set(Core.Const.DATA.KEY_SETTING_CLICK_ITEM,{go:'train'});
            context.isTrainChecked = true;
            if($scope.$state.includes('setting.module')) {
                // $scope.showSpecial = false;
                context.onClickTrain();
            }
            else {
                $scope.$state.go('setting.module');
            }
        };
        
        $scope.menuItems = [
            {
                icon: "process-setting/img/icon-report.png",
                title: "报告",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_REPORT,
                templateId: '',
                isChecked: false
            },
            {
                icon: "process-setting/img/icon-process-reimb.png",
                title: "报销",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_FIN_REIMB,
                templateId: '',
                isChecked: false
            },
            {
                icon: "asset/core/component/message-scroll/img/icon-message-trip-reimb.png",
                title: "差旅费",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_FIN_TRIP_REIMB,
                templateId: '',
                isChecked: false
            },
            {
                icon: "process-setting/img/icon-process-pay.png",
                title: "付款",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_FIN_PAY,
                templateId: '',
                isChecked: false
            },
            {
                icon: "process-setting/img/icon-process-imprest.png",
                title: "备用金申请",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_FIN_FUND,
                templateId: '',
                isChecked: false
            },
            {
                icon: "process-setting/img/icon-process-askforleave.png",
                title: "请假",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_ADMIN_LEAVE,
                templateId: '',
                isChecked: false
            },
            {
                icon: "process-setting/img/icon-process-business-trip.png",
                title: "外勤",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_WORK_BUSINESS,
                templateId: '',
                isChecked: false
            },

            {
                icon: "process-setting/img/icon-process-goods.png",
                title: "物品申领",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_ADMIN_RES_GOODS,
                templateId: '',
                isChecked: false
            },
            {
                icon: "process-setting/img/icon-process-card.png",
                title: "名片制作",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_CARD,
                templateId: '',
                isChecked: false
            },
            {
                icon: "process-setting/img/icon-process-train.png",
                title: "培训",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_TRAIN,
                templateId: '',
                isChecked: false
            },
            {
                icon: "process-setting/img/icon-process-contract.png",
                title: "合同",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_CONTRACT,
                isChecked: false
            },
            {
                icon: "process-setting/img/icon-process-borrow-stamp.png",
                title: "用印申请",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_ADMIN_RES_STAMP,
                templateId: '',
                isChecked: false
            },
            {
                icon: "process-setting/img/icon-process-borrow-car.png",
                title: "用车审批",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_ADMIN_RES_CAR,
                templateId: '',
                isChecked: false
            }
        ];

        $scope.defaultItems = [
            {
                icon: "process-setting/img/icon-process-default.png",
                title: "默认",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_DEFAULT,
                isChecked: false
            }
        ];

        init();

        function init() {
            
            if(!Core.Data.get(Core.Const.DATA.KEY_SETTING_CLICK_ITEM)) {
                $scope.defaultItems[0].isChecked = true;
            }
            else if (Core.Data.get(Core.Const.DATA.KEY_SETTING_CLICK_ITEM).value) {
                context.showIndex = true;
                var item = Core.Data.get(Core.Const.DATA.KEY_SETTING_CLICK_ITEM).value;
                for (var i = 0; i < $scope.menuItems.length; i++) {
                    var menuItem = $scope.menuItems[i];
                    menuItem.isChecked = menuItem.type == item.type;
                    if (menuItem.isChecked) {
                        context.showNormal = true;
                    }
                }
                for (var m = 0; m < $scope.defaultItems.length; m++) {
                    var defaultItem = $scope.defaultItems[m];
                    defaultItem.isChecked = defaultItem.type == item.type;
                }

            }
            else if (Core.Data.get(Core.Const.DATA.KEY_SETTING_CLICK_ITEM).go == 'contract') {
                clearAllChecked();
                context.isContractChecked = true;
                context.showSpecial = true;
            }
            else if (Core.Data.get(Core.Const.DATA.KEY_SETTING_CLICK_ITEM).go == 'train') {
                clearAllChecked();
                context.isTrainChecked = true;
                context.showSpecial = true;
            }
            else if (Core.Data.get(Core.Const.DATA.KEY_SETTING_CLICK_ITEM).go == 'card') {
                clearAllChecked();
                context.isCardChekced = true;
                context.showSpecial = true;
            }
            else if (Core.Data.get(Core.Const.DATA.KEY_SETTING_CLICK_ITEM).go == 'auth') {
                context.showIndex = false;
            }
            else if (Core.Data.get(Core.Const.DATA.KEY_SETTING_CLICK_ITEM).go == 'moduleList') {
                context.showIndex = false;
            }
            else {
                $scope.defaultItems[0].isChecked = true;
            }
            getModuleList();
        }
        
        function getModuleList() {
            Core.Api.APV.getApvCustomTemplateList().then(function (response) {
                Core.Log.d('getModuleList');
                if(response.code == 0) {
                    var responseList = response.data.apv_custom_template_list;
                    $scope.moduleList = dataAnalysis(responseList);
                    if (Core.Data.get(Core.Const.DATA.KEY_SETTING_CLICK_ITEM) && Core.Data.get(Core.Const.DATA.KEY_SETTING_CLICK_ITEM).value) {
                        context.showIndex = true;
                        var item = Core.Data.get(Core.Const.DATA.KEY_SETTING_CLICK_ITEM).value;
                        for (var j = 0; j < $scope.moduleList.length; j++) {
                            var moduleItem = $scope.moduleList[j];
                            moduleItem.isChecked = moduleItem.templateId == item.templateId;
                            if (moduleItem.isChecked) {
                                context.showModule = true;
                            }
                        }
                        for (var m = 0; m < $scope.defaultItems.length; m++) {
                            var defaultItem = $scope.defaultItems[m];
                            defaultItem.isChecked = defaultItem.type == item.type;
                        }
                        context.onClickIndex({item:item});
                        
                    }
                    // Core.Data.clearLocalData();
                }
            });
        }

        function dataAnalysis(list) {
            var mList=[];
            for(var i in list) {
                var item = {};
                item.img = getLocalIcon(list[i].avatar);
                item.title = list[i].name;
                item.type = Core.Const.APP.PROCESS.TYPE_PROCESS_MODULE;
                item.templateId = list[i].id;
                item.isChecked = false;
                mList.push(item);
            }
            return mList;
        }

        function getLocalIcon(imgName) {
            Core.Log.d(imgName);
            if (imgName) {
                if (imgName.indexOf("default") == 0) {
                    var index = (parseInt(imgName.substring(imgName.indexOf(":") + 1, imgName.length))-1);
                    Core.Log.d(index);
                    var icon = imgIconList[index].img;
                    return icon;
                }
            }
        }
    }
})();