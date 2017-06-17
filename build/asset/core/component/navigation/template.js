angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("core/navigation/company-list.html","<div class=\"navigation-company-list\">\n    <div class=\"company-holder\">\n        <div class=\"title m-default\">团队切换</div>\n        <div class=\"company-list-holder\">\n            <img class=\"forward\"  ng-src=\"{{context.imgSrcPrefix}}/icon-creat-company-left.png\" ng-click=\"context.swipeLeft()\"/>\n            <div class=\"scroll\">\n                <div class=\"company-item-holder task-holder\" style=\"width: {{context.scrollWidth}};\">\n                    <div class=\"item\"  ng-repeat=\"item in context.items\" ng-click=\"context.onCheckedOrg(item)\">\n                        <img ondragstart=\'false\' class=\"company-avatar\"  ng-src=\"{{item.orgRootLogo}}\"/>\n                        <label class=\"company-name\" ng-class=\"{\'select\':item.selected,\'normal\':!item.selected}\">{{item.name}}\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <img class=\"backward\"  ng-src=\"{{context.imgSrcPrefix}}/icon-creat-company-right.png\" ng-click=\"context.swipeRight()\"/>\n        </div>\n        <div class=\"set-company-holder m-link\" ng-click=\"context.onCompanyChoose({item:context.orgRootItem})\">确定</div>\n    </div>\n    <div class=\'mask\' ng-click=\"context.onClickMask()\"></div>\n    <toast type=\"context.toast.type\" show=\"context.toast.show\" path=\"context.toast.path\" duration=\"context.toast.duration\" content=\"context.toast.content\"></toast>\n</div>");
$templateCache.put("core/navigation/create-company.html","<div class=\"navigation-company-create\">\n    <div class=\"company-holder\">\n        <div class=\"title\">新建团队</div>\n            <div class=\"company-name-title\">团队名称</div>\n            <input class=\"company-name\" placeholder=\"请输入团队名称\" ng-model=\"companyName\">\n        <div class=\"set-company-holder\" ng-click=\"context.onCompanyCreate({companyName:companyName})\">确定</div>\n    </div>\n    <div class=\'mask\' ng-click=\"context.onClickMask()\"></div>\n</div>");
$templateCache.put("core/navigation/invite.html","<div class=\"invite\">\n    <div class=\"company-holder\">\n        <div class=\"title\">邀请他人加入团队</div>\n        <div class=\"company-name-title\">扫码二维码加入团队</div>\n        <div class=\"img-holder\">\n            <img style=\"height: 180px;width: 180px;\" ng-src=\"{{context.barcodeSrc}}\">\n        </div>\n    </div>\n    <div class=\'mask\' ng-click=\"context.onClickMask()\"></div>\n    <toast type=\"context.toast.type\" show=\"context.toast.show\" path=\"context.toast.path\" duration=\"context.toast.duration\" content=\"context.toast.content\"></toast>\n</div>");
$templateCache.put("core/navigation/navigation.html","<div class=\"nav\" ng-if=\"!navigation\">\n\n    <create-company ng-if=\"selectCreateCompany\"\n                    on-click-mask=\"onClickMask()\"\n                    on-company-create=\"onClickCompanyCreate(companyName)\">\n    </create-company>\n\n    <invite ng-if=\"invite\" on-click-mask=\"onClickMask()\"></invite>\n\n    <div ng-if=\"false\"\n         ng-if=\"status==\'show\'\"\n         class=\"holder\"\n         ng-click=\"onClickMenu()\">\n    </div>\n\n    <div ng-if=\"rightFun == \'show\'\" class=\"holder\" ng-click=\"onClickRightMenu()\"></div>\n\n    <div class=\"top-nav\">\n        <div class=\"top-nav-img\">\n\n            <img class=\"right-btn-icon m-link\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-src=\"{{ imgSrcPrefix }}/icon-navigation-right.png\">\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.user\')\">用户管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.user-detail\')\">用户详情</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.company\')\">公司管理</div>\n\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.merchant\')\">商户管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.merchant-detail\')\">商户管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.recharge\')\">充值管理</div>\n            <!--<div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.withdraw\')\">提现管理</div>-->\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.discount\')\">折扣管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.advertising\')\">广告管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.oil-manager\')\">油价管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.invoice\')\">发票管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.version\')\">版本管理</div>\n\n        </div>\n    </div>\n\n\n\n\n</div>");}]);