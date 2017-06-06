angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("core/navigation/company-list.html","<div class=\"navigation-company-list\">\n    <div class=\"company-holder\">\n        <div class=\"title m-default\">团队切换</div>\n        <div class=\"company-list-holder\">\n            <img class=\"forward\"  ng-src=\"{{context.imgSrcPrefix}}/icon-creat-company-left.png\" ng-click=\"context.swipeLeft()\"/>\n            <div class=\"scroll\">\n                <div class=\"company-item-holder task-holder\" style=\"width: {{context.scrollWidth}};\">\n                    <div class=\"item\"  ng-repeat=\"item in context.items\" ng-click=\"context.onCheckedOrg(item)\">\n                        <img ondragstart=\'false\' class=\"company-avatar\"  ng-src=\"{{item.orgRootLogo}}\"/>\n                        <label class=\"company-name\" ng-class=\"{\'select\':item.selected,\'normal\':!item.selected}\">{{item.name}}\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <img class=\"backward\"  ng-src=\"{{context.imgSrcPrefix}}/icon-creat-company-right.png\" ng-click=\"context.swipeRight()\"/>\n        </div>\n        <div class=\"set-company-holder m-link\" ng-click=\"context.onCompanyChoose({item:context.orgRootItem})\">确定</div>\n    </div>\n    <div class=\'mask\' ng-click=\"context.onClickMask()\"></div>\n    <toast type=\"context.toast.type\" show=\"context.toast.show\" path=\"context.toast.path\" duration=\"context.toast.duration\" content=\"context.toast.content\"></toast>\n</div>");
$templateCache.put("core/navigation/create-company.html","<div class=\"navigation-company-create\">\n    <div class=\"company-holder\">\n        <div class=\"title\">新建团队</div>\n            <div class=\"company-name-title\">团队名称</div>\n            <input class=\"company-name\" placeholder=\"请输入团队名称\" ng-model=\"companyName\">\n        <div class=\"set-company-holder\" ng-click=\"context.onCompanyCreate({companyName:companyName})\">确定</div>\n    </div>\n    <div class=\'mask\' ng-click=\"context.onClickMask()\"></div>\n</div>");
$templateCache.put("core/navigation/invite.html","<div class=\"invite\">\n    <div class=\"company-holder\">\n        <div class=\"title\">邀请他人加入团队</div>\n        <div class=\"company-name-title\">扫码二维码加入团队</div>\n        <div class=\"img-holder\">\n            <img style=\"height: 180px;width: 180px;\" ng-src=\"{{context.barcodeSrc}}\">\n        </div>\n    </div>\n    <div class=\'mask\' ng-click=\"context.onClickMask()\"></div>\n    <toast type=\"context.toast.type\" show=\"context.toast.show\" path=\"context.toast.path\" duration=\"context.toast.duration\" content=\"context.toast.content\"></toast>\n</div>");
$templateCache.put("core/navigation/navigation.html","<div class=\"nav\" ng-if=\"!navigation\">\n\n    <create-company ng-if=\"selectCreateCompany\"\n                    on-click-mask=\"onClickMask()\"\n                    on-company-create=\"onClickCompanyCreate(companyName)\">\n    </create-company>\n\n    <invite ng-if=\"invite\" on-click-mask=\"onClickMask()\"></invite>\n\n    <div ng-if=\"false\"\n         ng-if=\"status==\'show\'\"\n         class=\"holder\"\n         ng-click=\"onClickMenu()\">\n    </div>\n\n    <div ng-if=\"rightFun == \'show\'\" class=\"holder\" ng-click=\"onClickRightMenu()\"></div>\n\n    <div class=\"top-nav\">\n        <div class=\"top-nav-img\">\n\n            <img class=\"right-btn-icon m-link\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-src=\"{{ imgSrcPrefix }}/icon-navigation-right.png\">\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.user\')\">用户管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.user-detail\')\">用户详情</div>\n\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.merchant\')\">商户管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.merchant-detail\')\">商户管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.recharge\')\">充值管理</div>\n            <!--<div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.withdraw\')\">提现管理</div>-->\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.discount\')\">折扣管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.advertising\')\">广告管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.oil-manager\')\">油价管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.invoice\')\">发票管理</div>\n\n\n        </div>\n    </div>\n\n\n\n\n</div>");}]);
(function () {
    angular
        .module('app.core.component')
        .component('companyList', {
            templateUrl: 'core/navigation/company-list.html',
            controller: CompanyListController,
            controllerAs: 'context',
            bindings: {
                onCompanyChoose: '&',
                onClickMask: '&',
                list: '='
            }
        });

    CompanyListController.$inject = ['$scope', 'Core', '$state'];

    function CompanyListController($scope, Core, $state) {
        var context = this;
        context.imgSrcPrefix = 'asset/core/component/navigation/img';
        context.swipeLeft = swipeLeft;
        context.swipeRight = swipeRight;
        context.onCheckedOrg = onCheckedOrg;

        var orgRootId;
        var toast = {
            show: false,
            content: '',
            type:'',//success,error,alert
            path:'',
            duration:'',

            display: function (content,type) {
                toast.show = true;
                toast.content = content;
                toast.type = type;
            },

            hide: function () {
                toast.show = false;
                toast.content = '';
                toast.type = '';
            }
        };
        context.toast = toast;

        init();

        function init() {
            
            
        }

        function onCheckedOrg(item) {
            selectOrg(item.id);
            context.orgRootItem = item;
        }

        function selectOrg(orgId) {
            for (var i = 0; i < context.items.length; i++) {
                var item = context.items[i];
                if (item.logo != "") {
                    item.orgRootLogo = Core.Util.getImgUrl(item.logo);
                } else {
                    item.orgRootLogo = Core.Const.DATA.KEY_DEFAULT_ORG_LOGO;
                }
                item.selected = item.id == orgId;
            }
        }

        function swipeLeft() {
            Core.Log.d('left');
        }

        function swipeRight() {
            Core.Log.d('right');
        }
    }
})();
(function () {
    angular
        .module('app.core.component')
        .component('createCompany', {
            templateUrl: 'core/navigation/create-company.html',
            controller: CreateCompanyController,
            controllerAs: 'context',
            bindings: {
                onCompanyCreate: '&',
                onClickMask: '&'
            }
        });

    CreateCompanyController.$inject = ['$scope','Core'];

    function CreateCompanyController($scope,Core) {
        var context = this;
        init();

        function init() {
            
        }
    }
})();
(function () {
    angular
        .module('app.core.component')
        .component('invite', {
            templateUrl: 'core/navigation/invite.html',
            controller: InviteController,
            controllerAs: 'context',
            bindings: {
                onClickMask: '&'
            }
        });

    InviteController.$inject = ['$scope', 'Core'];

    function InviteController($scope, Core) {
        var context = this;
        Core.Log.d('companyList');
        var toast = {
            show: false,
            content: '',
            type:'',//success,error,alert
            path:'',
            duration:'',

            display: function (content,type) {
                toast.show = true;
                toast.content = content;
                toast.type = type;
            },

            hide: function () {
                toast.show = false;
                toast.content = '';
                toast.type = '';
            }
        };
        context.toast = toast;

        context.barcodeSrc = Core.Const.DATA.KEY_DEFAULT_BARCODE;
        context.inviteCode = "......";

        Core.Api.ORG.getDefaultOrgRoot().then(function (response) {

            if (!response.id) {
                toast.display("获取默认公司失败", 'error');
                return;
            }

            context.orgRootId = response.id;
            context.type = '1';
            context.validTime = 24 * 60 * 60;
            createInvitation();
        });

        function createInvitation() {
            Core.Api.ORG.createInvitation(context.orgRootId, context.type, context.validTime).then(function (response) {

                Core.Log.d(response);

                if (response.code == 0) {
                    context.inviteCode = response.data.invitation.token;
                    Core.Log.d(response.data.invitation.token);
                    var barcodeUrl = Core.Const.NET.INVITE_URL_HEAD + response.data.invitation.token + Core.Const.NET.INVITE_URL_TAIL;
                    Core.Log.d(barcodeUrl);
                    Core.Log.d(context.barcodeSrc);
                    context.barcodeSrc = Core.Const.NET.CREATE_BARCODE + encodeURIComponent(barcodeUrl);
                    Core.Log.d(context.barcodeSrc);
                }
            });
        }

    }
})();
/**
 * Created by dd on 2/24/16.
 */
(function () {
    angular
        .module('app.core.component')
        .component('navigation', {
            templateUrl: 'core/navigation/navigation.html',
            controller: NavigationController,
            controllerAs: 'context',
            bindings: {
                app:'='
            }
        });

    NavigationController.$inject = ['$scope', '$rootScope', 'Core', '$state'];

    function NavigationController($scope, $rootScope, Core, $state) {
        var context = this;
        var NAVIGATION_MENU_LIST = {
            INDEX: 0,
            ADMINISTRATION: 1,
            FINANCE: 2,
            WORK: 3,
            SETTING: 5,
            AUTH: 6,
            MODULE: 7
            
        };

        //定义一些常量
        $scope.imgSrcPrefix = 'asset/core/component/navigation/img';
        $scope.$state = Core.$state;
        $scope.NAVIGATION_MENU_LIST = NAVIGATION_MENU_LIST;


        Core.Log.d('第一次进来');
        //定义一些方法
        $scope.onClickBtn = onClickBtn;

        $scope.onClickMenu = onClickMenu;
        $scope.onClickRightMenu = onClickRightMenu;
        $scope.onClickChangeCompany = onClickChangeCompany;
        $scope.onClickMask = onClickMask;
        $scope.onClickNewCompany = onClickNewCompany;
        $scope.onClickCompanyCreate = onClickCompanyCreate;
        $scope.onClickInvite = onClickInvite;
        $scope.onClickSetting = onClickSetting;
        $scope.onClickCompany = onClickCompany;
        $scope.onClickUserSetting = onClickUserSetting;
        $scope.onClickLogout = onClickLogout;
        $scope.onClickNotify = onClickNotify;
        $scope.onMouseDownBtn = onMouseDownBtn;
        $scope.onMouseUpBtn = onMouseUpBtn;


        $scope.selectCompany = false;
        $scope.notify = false;
        $scope.selectCreateCompany = false;
        context.showLeftNavBtn = true;
        $scope.invite = false;
        $scope.list = [];

        $scope.onClickLogo = function () {
            Core.$window.parent.postMessage({action: 1}, "*");
        };

//        document.oncontextmenu=new Function("event.returnValue=false;");

        init();
        
        Core.on(Core.Const.EVENT.USER_INFO_UPDATE, function () {
            getUserInfo();
        });

        Core.on(Core.Const.DATA.KEY_DEFAULT_NAVIGATION, function (event, data) {

            switch (data) {
                case 'discount':
                    $scope.title = '折扣管理';
                    $scope.selectStatus = 'discount';
                    break;
                case 'merchant':
                    $scope.title = '商户管理';
                    $scope.selectStatus = 'merchant';
                    break;
                case 'merchant-detail':
                    $scope.title = '商户详情';
                    $scope.selectStatus = 'merchant-detail';
                    break;
                case 'recharge':
                    $scope.title = '充值管理';
                    $scope.selectStatus = 'recharge';
                    break;
                case 'user':
                    $scope.title = '用户管理';
                    $scope.selectStatus = 'user';
                    break;
                case 'user-detail':
                    $scope.title = '用户详情';
                    $scope.selectStatus = 'user-detail';
                    break;
                case 'withdraw':
                    $scope.title = '提现管理';
                    break;

                case 'advertising':
                    $scope.title = '广告管理';
                    break;

                default:
                    $scope.title = '用户管理';
                    $scope.selectStatus = 'user';
                    break;

            }
            Core.Log.d('core.on');
            Core.Log.d($scope.selectStatus);
        });


        function init() {
            getOrgRootInfo();
            getUserInfo();
            // Core.Data.clearLocalData();
        }

        function getOrgRootInfo() {
            
        }

        function getUserInfo() {
            
        }

        $rootScope.$on("$locationChangeSuccess", function (event, newUrl, oldUrl, newState, oldState) {
            init();
            processShow();
        });

        function processShow() {

            $scope.menuShow = false;
            $scope.show = false;

            var route = Core.Util.getCurrentRoute();

            if (!route) {
                Core.Log.d('-------------------route--------------------------');
            }

            if (Core.Util.inArray(route, Core.Config.ROUTE_LIST_SHOW_MENU)) {
                $scope.navigation = true;
            }
        }

        function onClickBtn(index) {
            onClickMenu();
            var redirectUrl = "entrance.welcome";
            var title = "首页";
            switch (index) {
                case NAVIGATION_MENU_LIST.INDEX:
                {
                    title = '首页';
                    redirectUrl = "entrance.welcome";
                }
                    break;

                case NAVIGATION_MENU_LIST.ADMINISTRATION:
                {
                    title = '行政';
                    redirectUrl = "administration.index";
                }
                    break;

                case NAVIGATION_MENU_LIST.FINANCE:
                {
                    title = '财务';
                    redirectUrl = "finance.index";
                }
                    break;

                case NAVIGATION_MENU_LIST.WORK:
                {
                    title = '工作';
                    redirectUrl = "work.index";
                }
                    break;

                case 4:
                {
                    //todo  设置公司架构url
                    title = '公司架构';
                    redirectUrl = "";
                }
                    break;

                case NAVIGATION_MENU_LIST.SETTING:
                {
                    title = '设置';
                    redirectUrl = "setting.index";
                }
                    break;

                case NAVIGATION_MENU_LIST.AUTH:
                {
                    title = "权限设置";
                    redirectUrl = "auth.index";
                }
                    break;

                case NAVIGATION_MENU_LIST.MODULE:
                {
                    title = "自定义";
                    redirectUrl = "module.index";
                }
                    break;

                default:
                    break;
            }

            $scope.title = title;
            Core.$timeout(function () {
                Core.go(redirectUrl);
            }, 50);
        }

        function onClickUserSetting() {
            $scope.title = '基本设置';
            $scope.selectStatus = 'user-setting';
            Core.go('user.index');
        }

        function onClickMenu() {
            $scope.rightStatus = $scope.rightStatus == 'show' ? 'hide' : 'hideRight';
            $scope.status = $scope.status == 'show' ? 'hide' : 'show';
        }

        function onClickRightMenu() {
            $scope.notify = false;
            $scope.rightStatus = $scope.rightStatus == 'show' ? 'hide' : 'show';
        }

        function onClickChangeCompany() {
            $scope.selectCompany = true;
        }

        function onClickCompany(item) {
            $scope.selectCompany = false;
            Core.Log.d('广播公司改变');

            if ($state.includes('home.client')||$state.includes('home.index')||$state.includes('home.journal')||$state.includes('home.address')||$state.includes('home.apv')) {
                Core.Data.set(Core.Const.DATA.KEY_CLIENT_ORG_ROOT, item);
                Core.publish(Core.Const.EVENT.EVENT_CLIENT_ORG_CHANGE);
            }
            else {
                Core.Log.d('pc端');
                Core.Data.set(Core.Const.DATA.KEY_ORG_ROOT, item);
                Core.publish(Core.Const.EVENT.EVENT_ORG_CHANGE);
            }
            
            init();
        }

        function onClickMask() {
            $scope.selectCompany = false;
            $scope.selectCreateCompany = false;
            $scope.invite = false;
        }

        function onClickNewCompany() {
            $scope.selectCreateCompany = true;
        }

        function onClickCompanyCreate(companyName) {

            if (!companyName) {
                Core.Notify.error("团队名称不能为空");
                return;
            }

            Core.Api.ORG.createRootOrg(companyName, 1).then(function (response) {
                if (response.code == 0) {
                    Core.Notify.success("团队创建成功");

                    Core.Api.ORG.getAdminOrgList().then(function (response) {
                        if (response.code == 0) {
                            $scope.selectCreateCompany = false;
                            var orgList = response.data.org_root_list;
                            if (orgList.length > 0) {
                                Core.Data.set(Core.Const.DATA.KEY_ORG_ROOT, orgList[orgList.length - 1]);
                                Core.publish(Core.Const.EVENT.ORG_SETTING_INFO_UPDATE);
                                Core.publish(Core.Const.EVENT.ORG_UPDATE);
                            } else {
                                Core.Notify.error("创建失败");
                            }
                        }
                    });
                } else if (response.code == Core.Const.ERROR.ERROR_EXIST) {
                    Core.Notify.info("团队已存在");
                } else {
                    Core.Notify.error("创建失败");
                }
            });

        }

        function onClickInvite() {
            $scope.invite = true;
        }

        function onClickSetting() {
            $scope.title = '团队设置';
            $scope.selectStatus = 'company-setting';
            // Core.Util.go('company-setting.html');
        }

        function onClickNotify() {
            $scope.title = '消息';
            $scope.selectStatus = 'message';
            Core.Log.d('通知');
            Core.go('message.index');
        }

        function onClickLogout() {
            Core.Api.USER.logout().then(function (response) {
                if (response.code == 0) {
                    Core.login();
                    logoutClearData();
                } else {
                    Core.Notify.error("已在异地登录,请重新登录");
                    Core.$timeout(function () {
                        logoutClearData();
                    }, 3000);
                }
            });
        }

        function logoutClearData() {
            Core.Notify.warning('已退出');
            Core.Data.clearAuthData();
            Core.login();
        }

        function onMouseDownBtn(btn) {
            switch (btn) {
                case 'home':
                    $scope.selectRightHome = true;
                    break;
                case 'create':
                    $scope.selectRightCreate = true;
                    break;
                case 'admin':
                    $scope.selectRightAdmin = true;
                    break;
                case 'fin':
                    $scope.selectRightFin = true;
                    break;
                default :
                    break;
            }
        }

        function onMouseUpBtn() {
            $scope.selectRightHome = false;
            $scope.selectRightCreate = false;
            $scope.selectRightAdmin = false;
            $scope.selectRightFin = false;
        }
    }
})();
(function () {
    angular
        .module('app.core.component')
        .component('notify', {
            templateUrl: 'core/navigation/notify.html',
            controller: InviteController,
            controllerAs: 'context',
            bindings: {
                onClickMask: '&'
            }
        });

    InviteController.$inject = ['$scope','Core'];

    function InviteController($scope,Core) {
        var context = this;
        context.onClickApvNotify = onClickApvNotify;

        Core.Log.d('companyList');
        init();

        function init() {
        }

        function onClickApvNotify(){
            Core.Util.go('message.html');
        }

    }
})();