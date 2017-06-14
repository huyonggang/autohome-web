angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("core/test.html","");
$templateCache.put("core/aside/aside.html","<div class=\"aside\" ng-class=\"{\'all-aside\':context.isShowAll}\">\n    <div class=\"logo-holder m-link\" ng-click=\"onClickLogo()\">\n        <img ng-show=\"!context.isShowAll\" class=\"logo\" ng-src=\"asset/core/component/aside/img/icon_trademark_icon.jpg\">\n        <img ng-show=\"context.isShowAll\" class=\"logo-content\" ng-src=\"asset/core/component/aside/img/icon_trademark.jpg\">\n    </div>\n    <div class=\"item-holder m-link\" ng-repeat=\"item in itemList\"\n         ng-class=\"{\'active\':$state.includes(item.stateUiSref)||$state.includes(item.stateUiSref1)||$state.includes(item.stateUiSref2)}\"\n         ng-click=\"onClickItem(item.state)\">\n        <img ng-show=\"!($state.includes(item.stateUiSref)||$state.includes(item.stateUiSref1)||$state.includes(item.stateUiSref2))\" class=\"item-img\" ng-src=\"{{item.img}}\">\n        <img ng-show=\"$state.includes(item.stateUiSref)||$state.includes(item.stateUiSref1)||$state.includes(item.stateUiSref2)\" class=\"item-img\" ng-src=\"{{item.heightLight}}\">\n        <div ng-show=\"context.isShowAll\" class=\"item-title\">{{item.title}}</div>\n    </div>\n</div>\n");
$templateCache.put("core/drop-down/drop-down.html","<div class=\"dropdown\" uib-dropdown>\n    <a href class=\"m-link\"\n       uib-dropdown-toggle>\n        <span>{{clickItem.name}}</span>\n    </a>\n</div>\n");
$templateCache.put("core/form-error-tip/tip.html","<div class=\"core-component form-error-tip\">\n    <div ng-show=\"context.show\" class=\"ui-toptips ui-warn js-tooltips\">{{context.content}} </div>\n</div>");
$templateCache.put("core/image-show/image-show.html","<div class=\"image-show-holder \" ng-click=\"onClickImg()\">\n    <img class=\"image animated fadeInDown\" ng-src=\"{{context.imageUrl}}\" >\n</div>");
$templateCache.put("core/loading/failure.html","<div class=\"failure core-component\">\n    <div class=\"ui-mask-transparent\"></div>\n    <div class=\"ui-toast\">\n        <i class=\"ui-icon-toast-failure\"></i>\n        <p class=\"ui-toast-content\">操作失败 {{messageFail}}</p>\n    </div>\n</div>");
$templateCache.put("core/loading/loading.html","<div class=\"ui-loading-toast loading core-component\">\n    <div class=\"ui-mask-transparent\"></div>\n    <div class=\"ui-toast\">\n        <div class=\"ui-loading\">\n            <div class=\"ui-loading-leaf ui-loading-leaf-0\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-1\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-2\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-3\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-4\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-5\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-6\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-7\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-8\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-9\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-10\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-11\"></div>\n        </div>\n        <p class=\"ui-toast-content\">数据加载中</p>\n    </div>\n</div>");
$templateCache.put("core/loading/success.html","<div class=\"success core-component\">\n    <div class=\"ui-mask-transparent\"></div>\n    <div class=\"ui-toast\">\n        <i class=\"ui-icon-toast\"></i>\n        <p class=\"ui-toast-content\">操作成功</p>\n    </div>\n</div>");
$templateCache.put("core/menu/menu.html","<div ng-if=\"context.menuShow\" class=\"menu\">\n\n    <div ng-if=\"context.show\" class=\"home-menu-bg\" ng-click=\"context.onClickMenu()\"></div>\n\n    <div class=\"home-menu\">\n        <div class=\"menu-button\" ng-click=\"context.onClickMenu()\">\n            <img class=\"menu-icon-{{context.show}}\" src=\"core/menu/img/home-menu-icon.png\">\n        </div>\n\n        <div ng-if=\"context.show\" class=\"menu-home\" ng-click=\"context.onClickHome()\">\n            <span class=\"menu-text\">首页</span>\n            <img class=\"menu-sub-icon\" src=\"core/menu/img/menu-home-icon.png\">\n        </div>\n\n        <div ng-if=\"context.show\" class=\"menu-message\" ng-click=\"context.onClickMessage()\">\n            <span class=\"menu-text\">消息</span>\n            <img class=\"menu-sub-icon\" src=\"core/menu/img/menu-message-icon.png\">\n        </div>\n\n    </div>\n\n</div>");
$templateCache.put("core/navigation/company-list.html","<div class=\"navigation-company-list\">\n    <div class=\"company-holder\">\n        <div class=\"title m-default\">团队切换</div>\n        <div class=\"company-list-holder\">\n            <img class=\"forward\"  ng-src=\"{{context.imgSrcPrefix}}/icon-creat-company-left.png\" ng-click=\"context.swipeLeft()\"/>\n            <div class=\"scroll\">\n                <div class=\"company-item-holder task-holder\" style=\"width: {{context.scrollWidth}};\">\n                    <div class=\"item\"  ng-repeat=\"item in context.items\" ng-click=\"context.onCheckedOrg(item)\">\n                        <img ondragstart=\'false\' class=\"company-avatar\"  ng-src=\"{{item.orgRootLogo}}\"/>\n                        <label class=\"company-name\" ng-class=\"{\'select\':item.selected,\'normal\':!item.selected}\">{{item.name}}\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <img class=\"backward\"  ng-src=\"{{context.imgSrcPrefix}}/icon-creat-company-right.png\" ng-click=\"context.swipeRight()\"/>\n        </div>\n        <div class=\"set-company-holder m-link\" ng-click=\"context.onCompanyChoose({item:context.orgRootItem})\">确定</div>\n    </div>\n    <div class=\'mask\' ng-click=\"context.onClickMask()\"></div>\n    <toast type=\"context.toast.type\" show=\"context.toast.show\" path=\"context.toast.path\" duration=\"context.toast.duration\" content=\"context.toast.content\"></toast>\n</div>");
$templateCache.put("core/navigation/create-company.html","<div class=\"navigation-company-create\">\n    <div class=\"company-holder\">\n        <div class=\"title\">新建团队</div>\n            <div class=\"company-name-title\">团队名称</div>\n            <input class=\"company-name\" placeholder=\"请输入团队名称\" ng-model=\"companyName\">\n        <div class=\"set-company-holder\" ng-click=\"context.onCompanyCreate({companyName:companyName})\">确定</div>\n    </div>\n    <div class=\'mask\' ng-click=\"context.onClickMask()\"></div>\n</div>");
$templateCache.put("core/navigation/invite.html","<div class=\"invite\">\n    <div class=\"company-holder\">\n        <div class=\"title\">邀请他人加入团队</div>\n        <div class=\"company-name-title\">扫码二维码加入团队</div>\n        <div class=\"img-holder\">\n            <img style=\"height: 180px;width: 180px;\" ng-src=\"{{context.barcodeSrc}}\">\n        </div>\n    </div>\n    <div class=\'mask\' ng-click=\"context.onClickMask()\"></div>\n    <toast type=\"context.toast.type\" show=\"context.toast.show\" path=\"context.toast.path\" duration=\"context.toast.duration\" content=\"context.toast.content\"></toast>\n</div>");
$templateCache.put("core/navigation/navigation.html","<div class=\"nav\" ng-if=\"!navigation\">\n\n    <create-company ng-if=\"selectCreateCompany\"\n                    on-click-mask=\"onClickMask()\"\n                    on-company-create=\"onClickCompanyCreate(companyName)\">\n    </create-company>\n\n    <invite ng-if=\"invite\" on-click-mask=\"onClickMask()\"></invite>\n\n    <div ng-if=\"false\"\n         ng-if=\"status==\'show\'\"\n         class=\"holder\"\n         ng-click=\"onClickMenu()\">\n    </div>\n\n    <div ng-if=\"rightFun == \'show\'\" class=\"holder\" ng-click=\"onClickRightMenu()\"></div>\n\n    <div class=\"top-nav\">\n        <div class=\"top-nav-img\">\n\n            <img class=\"right-btn-icon m-link\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-src=\"{{ imgSrcPrefix }}/icon-navigation-right.png\">\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.user\')\">用户管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.user-detail\')\">用户详情</div>\n\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.merchant\')\">商户管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.merchant-detail\')\">商户管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.recharge\')\">充值管理</div>\n            <!--<div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.withdraw\')\">提现管理</div>-->\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.discount\')\">折扣管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.advertising\')\">广告管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.oil-manager\')\">油价管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.invoice\')\">发票管理</div>\n\n        </div>\n    </div>\n\n\n\n\n</div>");
$templateCache.put("core/navigation-bar/navigation-bar.html","<div class=\"navigation-bar task-holder\" ng-if=\"$state.includes(\'item.*\')||$state.includes(\'finance.*\')||$state.includes(\'module.index\')\">\n\n    <div class=\"home-bar m-link\" ng-click=\"isShowAdmin = !isShowAdmin\" ng-init=\"isShowAdmin = false\">\n        行政审批\n        <img class=\"icon-bottom\" src=\"asset/core/component/setting-bar/img/icon-bottom.png\">\n    </div>\n    <div ng-show=\"isShowAdmin || $state.includes(\'administration.*\')\">\n        <div class=\"bar\" ng-repeat=\"item in itemsAdmin\" ui-sref=\"{{ item.stateUiSref }}\" href=\"javascript:;\"\n             ng-class=\"{ \'active\': $state.includes(item.stateUiSref) || ($first && $state.includes(item.state)) }\">\n            <div class=\"apv-menu-holder m-link\">\n                <img class=\"menu-icon\" ng-src=\"{{item.icon}}\"/>\n                <span class=\"menu-title\">{{item.title}}</span>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"home-bar m-link\" ng-click=\"isShowFin = !isShowFin\" ng-init=\"isShowFin = false\">\n        财务审批\n        <img class=\"icon-bottom\" src=\"asset/core/component/setting-bar/img/icon-bottom.png\">\n    </div>\n    <div ng-show=\"isShowFin || $state.includes(\'finance.*\')\">\n        <div class=\"bar\" ng-repeat=\"item in itemsFin\" ui-sref=\"{{ item.stateUiSref }}\" href=\"javascript:;\"\n             ng-class=\"{ \'active\': $state.includes(item.stateUiSref) || ($first && $state.includes(item.state)) }\">\n            <div class=\"apv-menu-holder m-link\">\n                <img class=\"menu-icon\" ng-src=\"{{item.icon}}\"/>\n                <span class=\"menu-title\">{{item.title}}</span>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"home-bar m-link\" ng-click=\"isShowMudule = !isShowMudule\" ng-init=\"isShowMudule = false\">\n        自定义审批\n        <img ng-if=\"moduleList.length>1\" class=\"icon-bottom\" src=\"asset/core/component/setting-bar/img/icon-bottom.png\">\n    </div>\n    <div ng-show=\"isShowMudule || $state.includes(\'module.index\')\" ui-sref=\"module.index({index:$index})\" ng-repeat=\"item in moduleList\" class=\"bar m-link\"\n         ng-class=\"{ \'active\': $stateParams.index==$index || ($first && $state.includes(item.state)) }\">\n        <div class=\"apv-menu-holder\">\n            <img class=\"menu-icon\" ng-src=\"{{item.icon}}\"/>\n            <span class=\"menu-title\">{{item.name}}</span>\n        </div>\n    </div>\n</div>");
$templateCache.put("core/page/page.html","<div class=\"page-holder\" ng-show=\"context.pageCount.length>1\">\n    <span class=\"prev m-link\" ng-if=\"context.pageNumber != 1\" ng-click=\"context.onClickPrev()\">&lt;</span>\n    <div style=\"display: inline\" class=\"m-default\" ng-repeat=\"page in context.pageCount track by $index\" ng-show=\"($index+1>context.pageCount.length-5&&context.pageNumber>context.pageCount.length-3)||($index<5&&context.pageNumber<4)||($index+1>context.pageNumber-3 && $index+1<context.pageNumber+3)\">\n                <span class=\"page m-link\" ng-class=\"{\'green\':page == context.pageNumber}\"\n                      ng-click=\"context.onClickPageNumber(page)\">{{page}}</span>\n    </div>\n    <span class=\"next m-link\" ng-if=\"context.pageNumber != context.pageCount.length\" ng-click=\"context.onClickNext()\">&gt;</span>\n    <span class=\"total-page m-default\">共 {{context.pageCount.length}} 页</span>\n    </span>\n</div>");
$templateCache.put("core/right-click/right-click.html","<div  class=\"core-directive core-directive-context-menu\">\n    <div class=\"contextmenu-node\" style=\"left: {{left}}px; top: {{top}}px;\"\n         ng-show=\"visible\"\n          style=\"width:200px;height: 300px;\">\n        <div class=\"clickItem\" ng-repeat=\"item in options\" ng-class=\"{mouseEnter:\'mouseEnter\'}[mouseEvent2]\"\n             ng-mouseenter=\"mouseEvent2=\'mouseEnter\'\" ng-mouseleave=\"mouseEvent2=\'mouseLeave\'\" ng-click=\"onChooseItem(item.type)\">\n            {{item.name}}\n        </div>\n    </div>\n    <div class=\"body\">\n        <ng-transclude></ng-transclude>\n    </div>\n</div>");
$templateCache.put("core/search-bar/search-bar.html","<div class=\"component-search-bar\">\n    <div class=\"status-search\" ng-show=\"isShowSearchBar\">\n        <div class=\"title m-default\">状态筛选</div>\n        <div class=\"status-line m-default\"></div>\n        <div class=\"status m-link\" ng-click=\"isShow=!isShow\">{{status}}</div>\n        <img class=\"triangle m-link\" ng-click=\"isShow=!isShow\" src=\"asset/core/component/search-bar/img/icon-triangle.png\">\n    </div>\n    <datepicker ng-show=\"isShowSearchBar\" class=\"data-picker\" style=\"margin-left: 5px\" date-format=\"yyyy-MM-dd\" >\n        <input class=\"data-picker-input\" ng-model=\"dateBegin\" placeholder=\"点击选择时间\" type=\"text\"/> -\n    </datepicker>\n    <datepicker ng-show=\"isShowSearchBar\" class=\"data-picker\" style=\"margin-left: 117px\" date-format=\"yyyy-MM-dd\">\n        <input class=\"data-picker-input\" ng-model=\"dateEnd\" placeholder=\"点击选择时间\" date-min-limit=\"dateBegin\" type=\"text\"/>\n    </datepicker>\n    <input ng-show=\"isShowSearchBar\" class=\"name-input\" ng-model=\"name\" placeholder=\"申请人姓名\" type=\"text\"/>\n    <div ng-show=\"isShowSearchBar\" class=\"search-btn m-link\" ng-click=\"onClickSearch()\">搜索</div>\n    <div class=\"exit m-link\" ng-class=\"{true:\'exitShow\',false:\'exitHide\'}[isShow]\" ng-mouseleave=\"isShow=false\" ng-init=\"isShow=false\">\n        <div ng-if=\"isShow\" class=\"status\" ng-click=\"changeStatus(\'全部\')\">全部</div>\n        <div ng-if=\"isShow\" class=\"status\" ng-click=\"changeStatus(\'待审批\')\">待审批</div>\n        <div ng-if=\"isShow\" class=\"status\" ng-click=\"changeStatus(\'已审批\')\">已完成</div>\n        <div ng-if=\"isShow\" class=\"status\" ng-click=\"changeStatus(\'审批未通过\')\">审批未通过</div>\n    </div>\n    <a ng-show=\"isShowExport\" href=\"{{context.exportUrl}}\" target=\"_blank\" class=\"export m-link\" ng-click=\"onClickExport();\">导出数据</a>\n    <div class=\"statistics m-link\" ng-click=\"context.onClickData()\">统计</div>\n    <div class=\"line\"></div>\n    <div class=\"table-btn m-link\" ng-click=\"context.onClickTable()\">列表</div>\n    <div class=\"goods-line\" ng-show=\"$state.includes(\'administration.goods\')\"></div>\n    <div class=\"goods m-link\" ng-show=\"$state.includes(\'administration.goods\')\" ng-click=\"context.onClickGoods()\">库存管理</div>\n</div>");
$templateCache.put("core/setting-bar/setting-bar.html","<div class=\"component-process-menu task-holder\">\n\n    <div class=\"menu-sub-title m-link\" href=\"javascript:;\" ng-click=\"onClickProcessMenu()\">\n        <div class=\"process-menu-other-holder\">\n            <span class=\"defaule-title\" style=\"font-weight: 500\">流程设置</span>\n            <img class=\"icon-right\" src=\"asset/core/component/setting-bar/img/icon-bottom.png\">\n        </div>\n    </div>\n\n    <div class=\"menu-sub-title-holder\" ng-show=\"context.showIndex||$state.includes(\'setting.index\')\">\n        <div ng-repeat=\"item in defaultItems\" class=\"menu-sub-other-title m-link\"\n             ng-class=\"{\'checked-true\':item.isChecked&&$state.includes(\'setting.index\')}\"\n             ng-click=\"onClickMenu(item,0)\">\n            <div class=\"apv-menu-holder\">\n                <!--<img class=\"menu-icon\" ng-src=\"{{item.icon}}\"/>-->\n                <span class=\"menu-title\">{{item.title}}审批流程</span>\n            </div>\n        </div>\n        <div class=\"menu-sub-other-title m-link\" ng-click=\"onClickSystemAPv()\">\n            <div class=\"apv-menu-other-holder\">\n                <!--<img class=\"menu-icon\" ng-src=\"process-setting/img/icon-system.png\"/>-->\n                <span class=\"menu-title\">系统审批</span>\n                <img class=\"icon-bottom\" src=\"asset/core/component/setting-bar/img/icon-bottom.png\">\n            </div>\n        </div>\n        <div ng-show=\"context.showNormal\" ng-repeat=\"item in menuItems\" class=\"menu-sub-title m-link \"\n             ng-class=\"{\'checked-true\':item.isChecked&&$state.includes(\'setting.index\')}\"\n             ng-click=\"onClickMenu(item,1)\">\n            <div class=\"apv-menu-holder\">\n                <img class=\"menu-icon\" ng-src=\"{{item.icon}}\"/>\n                <span class=\"menu-title\">{{item.title}}</span>\n            </div>\n        </div>\n        <div class=\"menu-sub-other-title m-link\" ng-click=\"onClickCustomApv()\" ng-if=\"moduleList.length > 0\">\n            <div class=\"apv-menu-other-holder\">\n                <!--<img class=\"menu-icon\" ng-src=\"process-setting/img/icon-module.png\"/>-->\n                <span class=\"menu-title\">自定义审批</span>\n                <img class=\"icon-bottom\" src=\"asset/core/component/setting-bar/img/icon-bottom.png\">\n            </div>\n        </div>\n        <div ng-show=\"context.showModule\" ng-repeat=\"item in moduleList\" class=\"menu-sub-title m-link checked-{{item.isChecked}}\" ng-click=\"onClickMenu(item,2)\">\n            <div class=\"apv-menu-holder\">\n                <img class=\"menu-icon\" ng-src=\"{{item.img}}\"/>\n                <span class=\"menu-title\">{{item.title}}</span>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"menu-sub-title menu-default m-link\" href=\"javascript:;\"\n         ng-class=\"{\'checked-true\':$state.includes(\'setting.auth\')}\" ng-click=\"onClickAuth()\">\n        <div class=\"process-menu-holder\">\n            <span class=\"defaule-title\" style=\"font-weight: 500\">权限设置</span>\n        </div>\n    </div>\n    <div class=\"menu-sub-title menu-default m-link\" href=\"javascript:;\"\n         ng-click=\"onClickModule()\">\n        <div class=\"process-menu-other-holder\">\n            <span class=\"defaule-title\" style=\"font-weight: 500\">板块设置</span>\n            <img class=\"icon-right\" src=\"asset/core/component/setting-bar/img/icon-bottom.png\">\n        </div>\n    </div>\n\n    <div ng-show=\"context.showSpecial||$state.includes(\'setting.trip-reimb\')||$state.includes(\'setting.card\')||$state.includes(\'setting.module\')\" class=\"menu-sub-title-holder\" ng-click=\"onClickModule()\">\n        <div class=\"menu-sub-other-title m-link menu-default\">\n            <div class=\"apv-menu-other-holder\">\n                <!--<img class=\"menu-icon\" ng-src=\"process-setting/img/icon-system.png\"/>-->\n                <span class=\"menu-title\">系统审批</span>\n                <img class=\"icon-bottom\" src=\"asset/core/component/setting-bar/img/icon-bottom.png\">\n            </div>\n        </div>\n        <div class=\"menu-sub-title m-link menu-default\" ng-class=\"{\'checked-true\':context.isContractChecked&&$state.includes(\'setting.module\')}\" ng-click=\"onClickContract()\">\n            <div class=\"apv-menu-holder\">\n                <img class=\"menu-icon\" ng-src=\"process-setting/img/icon-process-contract.png\"/>\n                <span class=\"menu-title\">合同</span>\n            </div>\n        </div>\n        <div class=\"menu-sub-title m-link menu-default\" ng-class=\"{\'checked-true\':context.isTrainChecked&&$state.includes(\'setting.module\')}\"\n             ng-click=\"onClickTrain()\">\n            <div class=\"apv-menu-holder\">\n                <img class=\"menu-icon\" ng-src=\"process-setting/img/icon-process-train.png\"/>\n                <span class=\"menu-title\">培训</span>\n            </div>\n        </div>\n        <div class=\"menu-sub-title m-link menu-default\" ui-sref=\"setting.card\" ng-class=\"{\'checked-true\':context.isCardChekced&&$state.includes(\'setting.card\')}\"\n             ng-click=\"onClickCard()\">\n            <div class=\"apv-menu-holder\">\n                <img class=\"menu-icon\" ng-src=\"process-setting/img/icon-process-card.png\"/>\n                <span class=\"menu-title\">名片</span>\n            </div>\n        </div>\n        <div class=\"menu-sub-title m-link menu-default\" ui-sref=\"setting.trip-reimb\" ng-class=\"{\'checked-true\':$state.includes(\'setting.trip-reimb\')}\">\n            <div class=\"apv-menu-holder\">\n                <img class=\"menu-icon\" ng-src=\"process-setting/img/icon-process-trip-reimb.png\"/>\n                <span class=\"menu-title\">差旅费</span>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"menu-sub-title menu-default m-link\" ui-sref=\"setting.moduleList\" href=\"javascript:;\"\n         ng-class=\"{\'checked-true\':$state.includes(\'setting.moduleList\')}\"\n         ng-click=\"onClickModuleList()\">\n        <div class=\"process-menu-holder\">\n            <span class=\"defaule-title\" style=\"font-weight: 500\">自定义审批设置</span>\n        </div>\n    </div>\n</div>");
$templateCache.put("core/toast/toast.html","<div class=\"core-component toast\" ng-class=\"{success:\'success\',error:\'error\',alert:\'alert\'}[context.toast.class]\" ng-if=\"context.show\">\n    <div class=\"ui-mask-transparent\"></div>\n    <div class=\"ui-toast\">\n        <img class=\"ui-icon-toast\" ng-src=\"{{context.toast.img}}\">\n        <div class=\"ui-toast-content\">{{context.content}}</div>\n    </div>\n</div>");
$templateCache.put("core/top-bar/top-bar.html","<div class=\"component-top-bar\">\n    <a href=\"javascript:;\" ng-if=\"false\" class=\"item attendance\" ng-click=\"onClickAttendBtn()\">考勤</a>\n    <a href=\"javascript:;\" class=\"item m-link\" ng-class=\"{ \'active\': $state.includes(\'administration.leave\') }\" ui-sref=\"administration.leave\" >请假 </a>\n    <a href=\"javascript:;\" class=\"item m-link\" ng-class=\"{ \'active\': $state.includes(\'administration.stamp\') }\" ui-sref=\"administration.stamp\" >用印</a>\n    <a href=\"javascript:;\" class=\"item m-link\" ng-class=\"{ \'active\': $state.includes(\'administration.car\') }\" ui-sref=\"administration.car\">用车</a>\n    <a href=\"javascript:;\" class=\"item m-link\" ng-class=\"{ \'active\': $state.includes(\'administration.goods\') }\" ui-sref=\"administration.goods\">物品申领</a>\n    <a href=\"javascript:;\" class=\"item m-link\" ng-class=\"{ \'active\': $state.includes(\'administration.businessCard\') }\" ui-sref=\"administration.businessCard\">名片制作</a>\n</div>");}]);
angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("admin-home/advertising.html","\n<head>\n\n\n\n</head>\n\n<div>\n\n    <div class=\"bs-example\">\n        <button style=\"margin-top:30px;margin-left: 10px;margin-bottom: 10px\" data-toggle=\"modal\" ng-click=\"showAddDialog()\" data-target=\"#add\" type=\"submit\" class=\"btn btn-sm btn-primary\">\n            添加\n        </button>\n        <table class=\"table table-hover\">\n            <thead>\n            <tr>\n                <th>#</th>\n                <th>城市</th>\n                <th>标题</th>\n                <th>地址</th>\n\n            </tr>\n            </thead>\n            <tbody>\n            <tr ng-repeat=\"item in itemList\">\n                <td>{{$index+1}}</td>\n                <td><span >{{item.city}}</span></td>\n                <td><span >{{item.context}}</span></td>\n                <td><span >{{item.url}}</span></td>\n                <td>\n                    <button ng-click=\"onSelect(item)\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#update\" type=\"submit\">修改</button>\n                    <button ng-click=\"onDelete(item)\" class=\"btn btn-danger\" type=\"submit\">删除</button>\n                </td>\n\n            </tr>\n\n            </tbody>\n        </table>\n\n\n\n        <div class=\"modal inmodal fade\" id=\"update\" tabindex=\"-1\" role=\"dialog\"  aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-sm\" style=\"width: 700px\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n                        <h4 class=\"modal-title\">广告修改</h4>\n                    </div>\n\n                    <div class=\"modal-body\">\n                        <div class=\"form-group\">\n                            <label for=\"city\">城市</label>\n                            <input ng-model=\"city\" class=\"form-control\" id=\"city\" placeholder=\"请输入城市\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"title\">标题</label>\n                            <input  ng-model=\"title\" class=\"form-control\" id=\"title\" placeholder=\"请输入标题\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"url\">地址</label>\n                            <input  ng-model=\"url\" class=\"form-control\" id=\"url\" placeholder=\"请输入地址(http://开头)\">\n                        </div>\n\n                        <div>\n                            <img ng-src={{src}} style=\"width: 640px;height: 200px\" >\n                        </div>\n\n                        <button style=\"margin-top: 10px\" ngf-select=\"upload($file)\" accept=\"image/jpg,image/jpeg,image/png,image/gif\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" ng-model=\"data.file\">图片上传(规格为640*200)</button>\n\n\n                    </div>\n\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-white\" data-dismiss=\"modal\">关闭</button>\n                        <button type=\"button\" ng-click=\"onUpdate()\"  data-dismiss=\"modal\" class=\"btn btn-primary\">更新</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"modal inmodal fade\"  id=\"add\" tabindex=\"-1\" role=\"dialog\"  aria-hidden=\"true\" >\n            <div class=\"modal-dialog modal-sm\" style=\"width: 700px\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n                        <h4 class=\"modal-title\">广告添加</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                        <div class=\"form-group\">\n                            <label for=\"city\">城市</label>\n                            <input ng-model=\"city\" class=\"form-control\" id=\"city\" placeholder=\"请输入城市\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"title\">标题</label>\n                            <input  ng-model=\"title\" class=\"form-control\" id=\"title\" placeholder=\"请输入标题\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"url\">地址</label>\n                            <input  ng-model=\"url\" class=\"form-control\" id=\"url\" placeholder=\"请输入地址(http://开头)\">\n                        </div>\n                        <div>\n                            <img ng-src={{src}} style=\"width: 640px;height: 200px\" >\n                        </div>\n\n                        <button style=\"margin-top: 10px\" ngf-select=\"upload($file)\" accept=\"image/jpg,image/jpeg,image/png,image/gif\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" ng-model=\"data.file\">图片上传(规格为640*200)</button>\n\n\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-white\" data-dismiss=\"modal\">关闭</button>\n                        <button type=\"button\" ng-click=\"onAdd()\" data-dismiss=\"modal\" class=\"btn btn-primary\">保存</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
$templateCache.put("admin-home/company-detail.html","<div>\n\n\n    <div class=\"ibox\">\n        <div class=\"ibox-title\">\n            <h5>基本信息</h5>\n        </div>\n        <div class=\"ibox-content\">\n            <form class=\"form-horizontal\">\n                <div class=\"form-group\">\n                    <label class=\"col-sm-1 control-label\">姓名</label>\n                    <div class=\"col-sm-10\">\n                        <p class=\"form-control-static\">{{name}}</p>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-sm-1 control-label\">联系方式</label>\n                    <div class=\"col-sm-10\">\n                        <p class=\"form-control-static\">{{phone}}</p>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"col-sm-1 control-label\">车牌号</label>\n                    <div class=\"col-sm-10\">\n                        <p class=\"form-control-static\">{{plate}}</p>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n\n    <div class=\"ibox\">\n        <div class=\"ibox-title\">\n            <h5>油卡信息</h5>\n        </div>\n        <div class=\"ibox-content\">\n            <table class=\"table table-hover\">\n                <thead>\n                <tr>\n                    <th>#</th>\n                    <th>卡号类型</th>\n                    <th>卡号</th>\n                    <th>车牌号</th>\n                    <th>创建时间</th>\n\n                </tr>\n                </thead>\n                <tbody>\n                <tr ng-repeat=\"item in oilCards\">\n                    <td>{{$index+1}}</td>\n                    <td><span>{{item.oilcardname}}</span>\n                    </td>\n                    <td>{{item.oilcardid}}</td>\n                    <td>{{item.platenumber}}</td>\n                    <td>{{item.createtime}}</td>\n                </tr>\n\n                </tbody>\n            </table>\n        </div>\n    </div>\n\n\n</div>");
$templateCache.put("admin-home/company.html","<div>\n    <div class=\"ibox\">\n        <div class=\"ibox-title\">\n            <h5>公司管理</h5>\n        </div>\n        <div class=\"ibox-content\">\n            <div style=\"margin-right: 40px;margin-bottom: 30px\" class=\"pull-right mail-search\">\n                <div class=\"input-group\">\n                    <input ng-model=\"search\" type=\"text\" class=\"form-control input-sm\" name=\"search\"\n                           placeholder=\"输入手机号搜索\">\n                    <div class=\"input-group-btn\">\n                        <button ng-click=\"onSearch()\" type=\"submit\" class=\"btn btn-sm btn-primary\">\n                            搜索\n                        </button>\n                    </div>\n                </div>\n            </div>\n\n            <table class=\"table table-hover\">\n                <thead>\n                <tr>\n                    <th>#</th>\n                    <th>用户名</th>\n                    <th>联系方式</th>\n                    <th>创建时间</th>\n                    <th>操作</th>\n\n                </tr>\n                </thead>\n                <tbody>\n                <tr ng-repeat=\"item in itemList\">\n                    <th>{{$index+1}}</th>\n                    <td>{{item.companyname}}\n                    </td>\n                    <td>{{item.uphone}}</td>\n                    <td>{{item.createtime}}</td>\n                    <td>\n                        <button ng-click=\"onSelect(item.uid)\" class=\"btn btn-default\" type=\"submit\">详情</button>\n                    </td>\n\n                </tr>\n\n                </tbody>\n            </table>\n        </div>\n        <div id=\"callBackPager\" style=\"text-align: center\"></div>\n\n    </div>\n</div>");
$templateCache.put("admin-home/discount.html","\n<head>\n\n\n\n</head>\n\n<div>\n\n    <div class=\"bs-example\">\n        <button style=\"margin-top:30px;margin-left: 10px;margin-bottom: 10px\" data-toggle=\"modal\" ng-click=\"showAddDialog()\" data-target=\"#add\" type=\"submit\" class=\"btn btn-sm btn-primary\">\n            添加\n        </button>\n        <table class=\"table table-hover\">\n            <thead>\n            <tr>\n                <th>#</th>\n                <th>公司名称</th>\n                <th>折扣</th>\n                <th>操作</th>\n\n            </tr>\n            </thead>\n            <tbody>\n            <tr ng-repeat=\"item in itemList\">\n                <td>{{$index+1}}</td>\n                <td><span >{{item.oilcardname}}</span></td>\n                <td><span >{{item.discount}}</span></td>\n                <td>\n                    <button ng-click=\"onSelect(item)\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#update\" type=\"submit\">修改</button>\n                    <button ng-click=\"onDelete(item)\" class=\"btn btn-danger\" type=\"submit\">删除</button>\n                </td>\n\n            </tr>\n\n            </tbody>\n        </table>\n\n\n\n        <div class=\"modal inmodal fade\" id=\"update\" tabindex=\"-1\" role=\"dialog\"  aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-sm\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n                        <h4 class=\"modal-title\">{{title}}</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                        <div class=\"form-group\">\n                            <label for=\"discount\">折扣</label>\n                            <input  ng-model=\"discount\" class=\"form-control\" id=\"discount\" placeholder=\"请输入折扣\">\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-white\" data-dismiss=\"modal\">关闭</button>\n                        <button type=\"button\" ng-click=\"onUpdate()\"  data-dismiss=\"modal\" class=\"btn btn-primary\">更新</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"modal inmodal fade\" id=\"add\" tabindex=\"-1\" role=\"dialog\"  aria-hidden=\"true\" >\n            <div class=\"modal-dialog modal-sm\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n                        <h4 class=\"modal-title\">折扣添加</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                        <div class=\"form-group\">\n                            <label for=\"exampleInputEmail1\">公司名称</label>\n                            <input ng-model=\"company\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"请输入公司名称\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"exampleInputPassword1\">折扣</label>\n                            <input  ng-model=\"discount\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"请输入折扣\">\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-white\" data-dismiss=\"modal\">关闭</button>\n                        <button type=\"button\" ng-click=\"onAdd()\" data-dismiss=\"modal\" class=\"btn btn-primary\">保存</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
$templateCache.put("admin-home/home.html","<div class=\"admin-home task-holder\">\n    <div class=\"admin-holder task-holder\">\n        <div class=\"message-holder holder\">\n            <div class=\"message-user-holder\">\n                <div class=\"user-title m-default\">个人信息</div>\n                <div class=\"user-holder\">\n                    <img class=\"user-img m-default\" ng-src=\"{{user.avatar}}\">\n                    <div class=\"name m-default\">{{user.name}}</div>\n                </div>\n                <span class=\"org-holder m-default\">\n                    所在部门: {{user.orgName}}\n                </span>\n                <span ng-if=\"false\" class=\"email-holder m-default\">\n                    邮箱：{{user.email}}\n                </span>\n                <div class=\"phone m-default\">手机: {{user.phone}}</div>\n            </div>\n            <div class=\"message-company-holder\">\n                <div class=\"company-title m-default\">公司信息</div>\n                <div class=\"company-name m-default\">{{company.name}}</div>\n                <div class=\"company-desc m-default\">{{company.desc}}</div>\n                <div class=\"company-email m-default\">创始人:{{company.user.name}}</div>\n                <div class=\"company-web m-default\">网址:{{company.url}}</div>\n            </div>\n        </div>\n\n\n        <div class=\"data-holder holder\">\n            <div class=\"data-title m-default\">数据统计</div>\n            <div class=\"data-num-holder\">\n                <div class=\"leave-data-holder data m-link\" ng-click=\"onClickLeave()\">\n                    <div class=\"title\">本月请假数据分析(同比上月)</div>\n                    <div class=\"number\">\n                        <span class=\"data-span\">{{leaveStat.num}}天</span>\n                        <div ng-if=\"leaveStat.showLeaveStatContrast\" class=\"contrast-holder\">\n                            <img ng-if=\"leaveStat.down\" class=\"contrast-icon\" src=\"admin-home/img/icon-data-down.png\">\n                            <img ng-if=\"leaveStat.up\" class=\"contrast-icon\" src=\"admin-home/img/icon-data-up.png\">\n                            <div class=\"contrast\">{{leaveStat.leaveStatContrast}}%</div>\n                        </div>\n\n                    </div>\n\n                </div>\n                <div class=\"reimb-data-holder data m-link\" ng-click=\"onClickReimb()\">\n                    <div class=\"title\">本月报销数据分析(同比上月)</div>\n                    <div class=\"number\">\n                        <span class=\"data-span\">{{reimbStat.num}}元</span>\n                        <div ng-if=\"reimbStat.showReimbStatContrast\" class=\"contrast-holder\">\n                            <img ng-if=\"reimbStat.down\" class=\"contrast-icon\" src=\"admin-home/img/icon-data-down.png\">\n                            <img ng-if=\"reimbStat.up\" class=\"contrast-icon\" src=\"admin-home/img/icon-data-up.png\">\n                            <div class=\"contrast\">{{reimbStat.reimbStatContrast}}%</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"trip-data-holder data m-link\" ng-click=\"onClickTrip()\">\n                    <div class=\"title\">本月外勤数据分析(同比上月)</div>\n                    <div class=\"number\">\n                        <span class=\"data-span\">{{tripStat.num}}天</span>\n                        <div ng-if=\"tripStat.showTripStatContrast\" class=\"contrast-holder\">\n                            <img ng-if=\"tripStat.down\" class=\"contrast-icon\" src=\"admin-home/img/icon-data-down.png\">\n                            <img ng-if=\"tripStat.up\" class=\"contrast-icon\" src=\"admin-home/img/icon-data-up.png\">\n                            <div class=\"contrast\">{{tripStat.tripStatContrast}}%</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <chart class=\"chart-holder\"></chart>\n        </div>\n\n        <div class=\"apv-holder holder\" ng-if=\"apvList.length>0\">\n            <div class=\"apv-title m-default\">最近待审批</div>\n            <div class=\"table-holder m-default\">\n                <table cellspacing=\"0\" align=\"left\" width=\"100%\">\n                    <tr class=\"table-title\">\n                        <th class=\"table-item\" style=\"width: 50px\"></th>\n                        <th class=\"table-item table-name\">审批类型</th>\n                        <th class=\"table-item table-name\">审核人</th>\n                        <th class=\"table-item table-name\">审批状态</th>\n                        <th class=\"table-item table-time\">提交时间</th>\n                        <th class=\"table-item table-time\">操作</th>\n                    </tr>\n                    <tr class=\"table-item-holder  m-link\" ng-repeat=\"item in apvList\"\n                        ng-click=\"onClickCell($index)\">\n                        <td class=\"table-checkbox\" style=\"width: 50px\"></td>\n                        <td class=\"table-item table-name\">{{item.name}}</td>\n                        <td class=\"table-item table-name\">{{item.userName}}</td>\n                        <td class=\"table-item table-name\">{{item.status}}</td>\n                        <td class=\"table-item table-time\">{{item.creatTime}}</td>\n                        <td class=\"table-item table-time\">\n                            <div class=\"permit-btn\"\n                                 ng-click=\"onClickPermit(item.orgId, item.id, true,item.type ,$event)\">同意\n                            </div>\n                            <div class=\"reject-btn\"\n                                 ng-click=\"onClickReject(item.orgId, item.id, true,item.type ,$event )\">拒绝\n                            </div>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n\n        <div class=\"notify-holder holder\" ng-show=\"isShowNotify\">\n            <div class=\"notify\">\n                <div class=\"notify-title\">消息列表</div>\n                <div class=\"notify-list\">\n                    <notify-list is-show-notify=\"isShowNotify\" on-click-detail=\"onClickDetail(item)\"></notify-list>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"detail\" ng-if=\"showDetail\">\n        <div class=\"ui-mask\" ng-click=\"onClickBackground()\">\n            <div class=\"detail-scroll-holder\">\n                <div class=\"detail-holder animated\" ng-click=\"onClickDetail($event)\" ng-class=\"{\'fadeInDown\': showDetail}\">\n                    <leave ng-if=\"clickItem.apv_type == 1\" class=\"leave\" leave=\"clickItem\" on-click-btn=\"onClickBtn(status, orgId, itemId, \'1\')\"></leave>\n                    <pay ng-if=\"clickItem.apv_type == 2\" class=\"leave\" pay=\"clickItem\" on-click-btn=\"onClickBtn(status, orgId, itemId, \'2\')\"></pay>\n                    <reimb ng-if=\"clickItem.apv_type == 3\" class=\"leave\" reimb=\"clickItem\" on-click-btn=\"onClickBtn(status, orgId, itemId, \'3\')\"></reimb>\n                    <business ng-if=\"clickItem.apv_type == 5\" class=\"leave\" business=\"clickItem\" on-click-btn=\"onClickBtn(status, orgId, itemId, \'5\')\"></business>\n                    <imprest ng-if=\"clickItem.apv_type == 6\" class=\"leave\" imprest=\"clickItem\" on-click-btn=\"onClickBtn(status, orgId, itemId, \'6\')\"></imprest>\n                    <goods ng-if=\"clickItem.apv_type == 8\" class=\"leave\" goods=\"clickItem\" on-click-btn=\"onClickBtn(status, orgId, itemId, \'8\')\"></goods>\n                    <stamp ng-if=\"clickItem.apv_type == 9\" class=\"leave\" stamp=\"clickItem\" on-click-btn=\"onClickBtn(status, orgId, itemId, \'9\')\"></stamp>\n                    <car ng-if=\"clickItem.apv_type == 10\" class=\"leave\" car=\"clickItem\" on-click-btn=\"onClickBtn(status, orgId, itemId, \'10\')\"></car>\n                    <card ng-if=\"clickItem.apv_type == 11\" class=\"leave\" card=\"clickItem\" on-click-btn=\"onClickBtn(status, orgId, itemId, \'11\')\"></card>\n                    <contract ng-if=\"clickItem.apv_type == 12\" class=\"leave\" contract=\"clickItem\" on-click-btn=\"onClickBtn(status, orgId, itemId, \'12\')\"></contract>\n                    <train ng-if=\"clickItem.apv_type == 13\" class=\"leave\" train=\"clickItem\" on-click-btn=\"onClickBtn(status, orgId, itemId, \'13\')\"></train>\n                    <report ng-if=\"clickItem.apv_type == 14\" class=\"leave\" report=\"clickItem\" on-click-btn=\"onClickBtn(status, orgId, itemId, \'14\')\"></report>\n                    <trip-reimb ng-if=\"clickItem.apv_type == 15\" class=\"leave\" reimb=\"clickItem\" on-click-btn=\"onClickBtn(status, orgId, itemId, \'15\')\"></trip-reimb>\n                    <module-detail ng-if=\"clickItem.apv_type == 999\" class=\"leave\" module-detail=\"clickItem\" on-click-btn=\"onClickBtn(status, orgId, itemId, \'999\')\"></module-detail>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("admin-home/invoice.html","<div>\n\n    <div class=\"ibox\">\n        <div class=\"ibox-title\">\n            <h5>发票管理</h5>\n        </div>\n        <div class=\"ibox-content\">\n            <div  class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                <button ng-click=\"check0()\" type=\"button\" class=\"btn btn-default\">未开</button>\n                <button ng-click=\"check1()\"type=\"button\" class=\"btn btn-default\">已开</button>\n                <button ng-click=\"check2()\"type=\"button\" class=\"btn btn-default\">拒开</button>\n            </div>\n            <table class=\"table table-hover\">\n                <thead>\n                <tr>\n                    <th>#</th>\n                    <th>公司抬头</th>\n                    <th>发票金额</th>\n                    <th>收件人</th>\n                    <th>联系电话</th>\n                    <th>详细地址</th>\n                    <th>状态</th>\n\n                </tr>\n                </thead>\n                <tbody>\n                <tr ng-repeat=\"item in itemList\">\n                    <td>{{$index+1}}</td>\n                    <td>{{item.invoiceheader}}</td>\n                    <td>{{item.invoicevalue}}</td>\n                    <td>{{item.name}}</td>\n                    <td>{{item.phone}}</td>\n                    <td>{{item.address}}</td>\n                    <td>{{item.status}}</td>\n                    <td class=\"text-navy\"><i class=\"fa fa-level-up\"></i></td>\n                    <td ng-show=\"group\">\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"\n                                    aria-haspopup=\"true\" aria-expanded=\"false\">\n                                操作 <span class=\"caret\"></span>\n                            </button>\n                            <ul class=\"dropdown-menu\">\n                                <li><a ng-click=\"rechargeSuccess(item)\">已开</a></li>\n                                <li><a ng-click=\"rechargeError(item)\">拒开</a></li>\n                            </ul>\n                        </div>\n                    </td>\n                </tr>\n\n                </tbody>\n            </table>\n        </div>\n\n        <div id=\"callBackPager\" style=\"text-align: center\"></div>\n\n    </div>\n</div>");
$templateCache.put("admin-home/merchant-detail.html","<div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"ibox\">\n        <div class=\"ibox-title\">\n            <h5>基本信息</h5>\n        </div>\n        <div class=\"ibox-content\">\n            <form class=\"form-horizontal\">\n                <div class=\"form-group\">\n                    <label class=\"col-md-1 control-label\">商户名称:</label>\n                    <div class=\"col-sm-10\">\n                        <p class=\"form-control-static\">{{name}}</p>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"col-md-1 control-label\">联系方式:</label>\n                    <div class=\"col-md-10\">\n                        <p class=\"form-control-static\">{{tel}}</p>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"col-md-1 control-label\">商户地址:</label>\n                    <div class=\"col-md-10\">\n                        <p class=\"form-control-static\">{{address}}</p>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-1 control-label\">logo信息:</label>\n                    <div class=\"col-md-10\">\n                        <img src=\"logo\">\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"col-md-1 control-label\">营业执照:</label>\n                    <div class=\"col-md-10\">\n                        <img src=\"license\">\n                    </div>\n                </div>\n\n            </form>\n\n        </div>\n    </div>\n\n\n    <div class=\"ibox\">\n        <div class=\"ibox-title\">\n            <h5>商品信息</h5>\n        </div>\n        <div class=\"ibox-content\">\n            <table class=\"ibox table table-hover\">\n                <thead>\n                <tr>\n                    <th>#</th>\n                    <th>油号名称</th>\n                    <th>挂牌价</th>\n                    <th>优惠价</th>\n                    <th>其他优惠信息</th>\n\n                </tr>\n                </thead>\n                <tbody>\n                <tr ng-repeat=\"item in goods\">\n                    <td>{{$index+1}}</td>\n                    <td>{{item.gname}}</td>\n                    <td>{{item.typeprice}}</td>\n                    <td>{{item.gdiscount}}</td>\n                    <td>{{item.gremark}}</td>\n                </tr>\n\n                </tbody>\n            </table>\n        </div>\n    </div>\n\n</div>");
$templateCache.put("admin-home/merchant.html","<div>\n    <div class=\"ibox\">\n        <div class=\"ibox-title\">\n            <h5>商户管理</h5>\n        </div>\n        <div class=\"ibox-content\">\n            <div style=\"margin-right: 40px;margin-bottom: 30px\" class=\"pull-right mail-search\">\n                <div class=\"input-group\">\n                    <input ng-model=\"name\" type=\"text\" class=\"form-control input-sm\" name=\"search\"\n                           placeholder=\"输入商户名\">\n                    <div class=\"input-group-btn\">\n                        <button ng-click=\"onSearch()\" type=\"submit\" class=\"btn btn-sm btn-primary\">\n                            搜索\n                        </button>\n                    </div>\n                </div>\n            </div>\n\n            <table class=\"table table-hover\">\n                <thead>\n                <tr>\n                    <th>#</th>\n                    <th>商户名称</th>\n                    <th>登录名</th>\n                    <th>商户地址</th>\n                    <th>联系方式</th>\n                    <th>操作</th>\n\n                </tr>\n                </thead>\n                <tbody>\n                <tr ng-repeat=\"item in itemList\">\n                    <td>{{$index+1}}</td>\n                    <td>{{item.mname}}</td>\n                    <td>{{item.account}}</td>\n                    <td>{{item.cityname}}{{item.adname}}{{item.maddress}}</td>\n\n                    <td>{{item.tel}}</td>\n                    <td>\n                        <button ng-click=\"onSelect(item.mid)\" class=\"btn btn-default\" type=\"submit\">详情</button>\n                    </td>\n\n                </tr>\n\n                </tbody>\n            </table>\n        </div>\n\n        <div id=\"callBackPager\" style=\"text-align: center\"></div>\n\n    </div>\n</div>");
$templateCache.put("admin-home/oil-manager.html","\n<head>\n\n\n\n</head>\n\n<div>\n\n    <div class=\"bs-example\">\n        <button style=\"margin-top:30px;margin-left: 10px;margin-bottom: 10px\" data-toggle=\"modal\" ng-click=\"showAddDialog()\" data-target=\"#add\" type=\"submit\" class=\"btn btn-sm btn-primary\">\n            添加\n        </button>\n        <table class=\"table table-hover\">\n            <thead>\n            <tr>\n                <th>#</th>\n                <th>油号</th>\n                <th>挂牌价</th>\n                <th>涨降情况</th>\n                <th>活动说明</th>\n                <th>操作</th>\n\n            </tr>\n            </thead>\n            <tbody>\n            <tr ng-repeat=\"item in itemList\">\n                <td>{{$index+1}}</td>\n                <td><span >{{item.typename}}</span></td>\n                <td><span >{{item.typeprice}}</span></td>\n                <td><span >{{item.isrise}}</span></td>\n                <td><span >{{item.notice}}</span></td>\n                <td>\n                    <button ng-click=\"onSelect(item)\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#update\" type=\"submit\">修改</button>\n                    <button ng-click=\"onDelete(item)\" class=\"btn btn-danger\" type=\"submit\">删除</button>\n                </td>\n\n            </tr>\n\n            </tbody>\n        </table>\n\n\n\n        <div class=\"modal inmodal fade\" id=\"update\" tabindex=\"-1\" role=\"dialog\"  aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-sm\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n                        <h4 class=\"modal-title\">{{title}}</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                        <div class=\"form-group\">\n                            <label for=\"discount\">油价</label>\n                            <input  ng-model=\"price\" class=\"form-control\" id=\"discount\" placeholder=\"请输入油价\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"notice\">活动说明</label>\n                            <input  ng-model=\"notice\" class=\"form-control\" id=\"notice\" placeholder=\"请输入通知\">\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-white\" data-dismiss=\"modal\">关闭</button>\n                        <button type=\"button\" ng-click=\"onUpdate()\"  data-dismiss=\"modal\" class=\"btn btn-primary\">更新</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"modal inmodal fade\" id=\"add\" tabindex=\"-1\" role=\"dialog\"  aria-hidden=\"true\" >\n            <div class=\"modal-dialog modal-sm\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n                        <h4 class=\"modal-title\">折扣添加</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                        <div class=\"form-group\">\n                            <label for=\"exampleInputEmail1\">油号</label>\n                            <input ng-model=\"name\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"请输入油号\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"exampleInputPassword1\">价格</label>\n                            <input  ng-model=\"price\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"请输入价格\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"notice_add\">活动说明</label>\n                            <input  ng-model=\"notice\" class=\"form-control\" id=\"notice_add\" placeholder=\"请输入通知\">\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-white\" data-dismiss=\"modal\">关闭</button>\n                        <button type=\"button\" ng-click=\"onAdd()\" data-dismiss=\"modal\" class=\"btn btn-primary\">保存</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
$templateCache.put("admin-home/recharge-manage.html","<div>\n\n    <div class=\"ibox\">\n        <div class=\"ibox-title\">\n            <h5>充值管理</h5>\n        </div>\n        <div class=\"ibox-content\">\n            <div style=\"margin-right: 40px;margin-bottom: 30px\" class=\"btn-group\">\n                <button ng-click=\"check1()\" data-toggle=\"button\" class=\"btn btn-primary btn-outline active\"\n                        type=\"button\" aria-pressed=\"true\">未充值\n                </button>\n                <button ng-click=\"check2()\" data-toggle=\"button\" class=\"btn btn-primary\" type=\"button\"\n                        aria-pressed=\"false\">充值成功\n                </button>\n            </div>\n            <table class=\"table table-hover\">\n                <thead>\n                <tr>\n                    <th>#</th>\n                    <th>卡号</th>\n                    <th>公司类型</th>\n                    <th>充值金额</th>\n                    <th>用户名</th>\n                    <th>充值方式</th>\n                    <th>充值状态</th>\n                    <th>备注</th>\n\n                </tr>\n                </thead>\n                <tbody>\n                <tr ng-repeat=\"item in itemList\">\n                    <td>{{$index+1}}</td>\n                    <td>{{item.oilcardid}}</td>\n                    <td>{{item.oilcardname}}</td>\n                    <td>{{item.amount}}</td>\n                    <td>{{item.uname}}</td>\n                    <td>{{item.payorg}}</td>\n                    <td>{{item.status}}</td>\n                    <td>{{item.remarks}}</td>\n                    <td class=\"text-navy\"><i class=\"fa fa-level-up\"></i></td>\n                    <td>\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"\n                                    aria-haspopup=\"true\" aria-expanded=\"false\">\n                                操作 <span class=\"caret\"></span>\n                            </button>\n                            <ul ng-show=\"!isRecharge\" class=\"dropdown-menu\">\n                                <li><a ng-click=\"rechargeSuccess(item)\">充值成功</a></li>\n                            </ul>\n                            <ul ng-show=\"isRecharge\" class=\"dropdown-menu\">\n                                <li><a ng-click=\"selectItem(item)\" data-toggle=\"modal\" data-target=\"#add\">备注</a></li>\n                            </ul>\n                        </div>\n                    </td>\n                </tr>\n\n                </tbody>\n            </table>\n        </div>\n\n        <div id=\"callBackPager\" style=\"text-align: center\"></div>\n\n        <div class=\"modal inmodal fade\" id=\"add\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-sm\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span\n                                class=\"sr-only\">Close</span></button>\n                        <h4 class=\"modal-title\">备注添加</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                        <div class=\"form-group\">\n                            <label for=\"exampleInputEmail1\">备注</label>\n                            <input ng-model=\"remark\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"请输入备注\">\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-white\" data-dismiss=\"modal\">关闭</button>\n                        <button type=\"button\" ng-click=\"onRemark()\" data-dismiss=\"modal\" class=\"btn btn-primary\">保存\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("admin-home/user-detail.html","<div>\n\n\n    <div class=\"ibox\">\n        <div class=\"ibox-title\">\n            <h5>基本信息</h5>\n        </div>\n        <div class=\"ibox-content\">\n            <form class=\"form-horizontal\">\n                <div class=\"form-group\">\n                    <label class=\"col-sm-1 control-label\">姓名</label>\n                    <div class=\"col-sm-10\">\n                        <p class=\"form-control-static\">{{name}}</p>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-sm-1 control-label\">联系方式</label>\n                    <div class=\"col-sm-10\">\n                        <p class=\"form-control-static\">{{phone}}</p>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"col-sm-1 control-label\">车牌号</label>\n                    <div class=\"col-sm-10\">\n                        <p class=\"form-control-static\">{{plate}}</p>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n\n    <div class=\"ibox\">\n        <div class=\"ibox-title\">\n            <h5>油卡信息</h5>\n        </div>\n        <div class=\"ibox-content\">\n            <table class=\"table table-hover\">\n                <thead>\n                <tr>\n                    <th>#</th>\n                    <th>卡号类型</th>\n                    <th>卡号</th>\n                    <th>车牌号</th>\n                    <th>创建时间</th>\n\n                </tr>\n                </thead>\n                <tbody>\n                <tr ng-repeat=\"item in oilCards\">\n                    <td>{{$index+1}}</td>\n                    <td><span>{{item.oilcardname}}</span>\n                    </td>\n                    <td>{{item.oilcardid}}</td>\n                    <td>{{item.platenumber}}</td>\n                    <td>{{item.createtime}}</td>\n                </tr>\n\n                </tbody>\n            </table>\n        </div>\n    </div>\n\n\n</div>");
$templateCache.put("admin-home/user.html","<div>\n    <div class=\"ibox\">\n        <div class=\"ibox-title\">\n            <h5>用户管理</h5>\n        </div>\n        <div class=\"ibox-content\">\n            <div style=\"margin-right: 40px;margin-bottom: 30px\" class=\"pull-right mail-search\">\n                <div class=\"input-group\">\n                    <input ng-model=\"search\" type=\"text\" class=\"form-control input-sm\" name=\"search\"\n                           placeholder=\"输入手机号搜索\">\n                    <div class=\"input-group-btn\">\n                        <button ng-click=\"onSearch()\" type=\"submit\" class=\"btn btn-sm btn-primary\">\n                            搜索\n                        </button>\n                    </div>\n                </div>\n            </div>\n\n            <table class=\"table table-hover\">\n                <thead>\n                <tr>\n                    <th>#</th>\n                    <th>姓名</th>\n                    <th>联系方式</th>\n                    <th>创建时间</th>\n                    <th>操作</th>\n\n                </tr>\n                </thead>\n                <tbody>\n                <tr ng-repeat=\"item in itemList\">\n                    <th>{{$index+1}}</th>\n                    <td>{{item.uname}}\n                    </td>\n                    <td>{{item.uphone}}</td>\n                    <td>{{item.createtime}}</td>\n                    <td>\n                        <button ng-click=\"onSelect(item.uid)\" class=\"btn btn-default\" type=\"submit\">详情</button>\n                    </td>\n\n                </tr>\n\n                </tbody>\n            </table>\n        </div>\n        <div id=\"callBackPager\" style=\"text-align: center\"></div>\n\n    </div>\n</div>");
$templateCache.put("admin-home/version.html","\n<div>\n\n    <div class=\"bs-example\">\n        <button style=\"margin-top:30px;margin-left: 10px;margin-bottom: 10px\" data-toggle=\"modal\" ng-click=\"showAddDialog()\" data-target=\"#add\" type=\"submit\" class=\"btn btn-sm btn-primary\">\n            添加\n        </button>\n        <table class=\"table table-hover\">\n            <thead>\n            <tr>\n                <th>#</th>\n                <th>城市</th>\n                <th>标题</th>\n                <th>地址</th>\n\n            </tr>\n            </thead>\n            <tbody>\n            <tr ng-repeat=\"item in itemList\">\n                <td>{{$index+1}}</td>\n                <td><span >{{item.city}}</span></td>\n                <td><span >{{item.context}}</span></td>\n                <td><span >{{item.url}}</span></td>\n                <td>\n                    <button ng-click=\"onSelect(item)\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#update\" type=\"submit\">修改</button>\n                    <button ng-click=\"onDelete(item)\" class=\"btn btn-danger\" type=\"submit\">删除</button>\n                </td>\n\n            </tr>\n\n            </tbody>\n        </table>\n\n\n\n        <div class=\"modal inmodal fade\" id=\"update\" tabindex=\"-1\" role=\"dialog\"  aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-sm\" style=\"width: 700px\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n                        <h4 class=\"modal-title\">广告修改</h4>\n                    </div>\n\n                    <div class=\"modal-body\">\n                        <div class=\"form-group\">\n                            <label for=\"city\">城市</label>\n                            <input ng-model=\"city\" class=\"form-control\" id=\"city\" placeholder=\"请输入城市\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"title\">标题</label>\n                            <input  ng-model=\"title\" class=\"form-control\" id=\"title\" placeholder=\"请输入标题\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"url\">地址</label>\n                            <input  ng-model=\"url\" class=\"form-control\" id=\"url\" placeholder=\"请输入地址(http://开头)\">\n                        </div>\n\n                        <div>\n                            <img ng-src={{src}} style=\"width: 640px;height: 200px\" >\n                        </div>\n\n                        <button style=\"margin-top: 10px\" ngf-select=\"upload($file)\" accept=\"image/jpg,image/jpeg,image/png,image/gif\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" ng-model=\"data.file\">图片上传(规格为640*200)</button>\n\n\n                    </div>\n\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-white\" data-dismiss=\"modal\">关闭</button>\n                        <button type=\"button\" ng-click=\"onUpdate()\"  data-dismiss=\"modal\" class=\"btn btn-primary\">更新</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"modal inmodal fade\"  id=\"add\" tabindex=\"-1\" role=\"dialog\"  aria-hidden=\"true\" >\n            <div class=\"modal-dialog modal-sm\" style=\"width: 700px\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n                        <h4 class=\"modal-title\">广告添加</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                        <div class=\"form-group\">\n                            <label for=\"city\">城市</label>\n                            <input ng-model=\"city\" class=\"form-control\" id=\"city\" placeholder=\"请输入城市\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"title\">标题</label>\n                            <input  ng-model=\"title\" class=\"form-control\" id=\"title\" placeholder=\"请输入标题\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"url\">地址</label>\n                            <input  ng-model=\"url\" class=\"form-control\" id=\"url\" placeholder=\"请输入地址(http://开头)\">\n                        </div>\n                        <div>\n                            <img ng-src={{src}} style=\"width: 640px;height: 200px\" >\n                        </div>\n\n                        <button style=\"margin-top: 10px\" ngf-select=\"upload($file)\" accept=\"image/jpg,image/jpeg,image/png,image/gif\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" ng-model=\"data.file\">图片上传(规格为640*200)</button>\n\n\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-white\" data-dismiss=\"modal\">关闭</button>\n                        <button type=\"button\" ng-click=\"onAdd()\" data-dismiss=\"modal\" class=\"btn btn-primary\">保存</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
$templateCache.put("admin-home/withdraw.html","<div>\n\n    <div>\n        <table class=\"table table-hover\">\n            <thead>\n            <tr>\n                <th>#</th>\n                <th>提现卡号</th>\n                <th>提现银行</th>\n                <th>持卡人姓名</th>\n                <th>提现金额</th>\n                <th>提现状态</th>\n\n            </tr>\n            </thead>\n            <tbody>\n            <tr ng-repeat=\"item in itemList\">\n                <td>{{$index+1}}</td>\n                <td><span class=\"line\">{{item.bankcard}}</span></td>\n                <td><span class=\"line\">{{item.bankname}}</span></td>\n                <td><span class=\"line\">{{item.name}}</span></td>\n                <td><span class=\"line\">{{item.money}}</span></td>\n                <td><span class=\"line\">{{item.status}}</span></td>\n                <td>\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                            操作 <span class=\"caret\"></span>\n                        </button>\n                        <ul class=\"dropdown-menu\">\n                            <li><a ng-click=\"rechargeSuccess()\">提现成功</a></li>\n                            <li><a ng-click=\"rechargeError()\">提现失败</a></li>\n                        </ul>\n                    </div>\n                </td>\n\n            </tr>\n\n            </tbody>\n        </table>\n    </div>\n\n    <div>\n\n        <nav aria-label=\"...\">\n            <ul class=\"pager\">\n                <li><a href=\"\">上一页</a></li>\n                <li><a href=\"\">下一页</a></li>\n            </ul>\n        </nav>\n\n    </div>\n\n</div>");}]);
/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('advertising.ManageController', ['$scope', 'Core','Upload', ManageController]);

    function ManageController($scope, Core,Upload) {
        var context = $scope;
        var selectItem;
        context.onDelete = onDelete;
        context.onAdd = onAdd;
        context.showAddDialog = showAddDialog;
        context.onUpdate = onUpdate;
        context.onSelect = onSelect;
        var filename;
        init();

        function init() {
            Core.Log.d("init");
            Core.Log.d(Core.Data.get("aid"));

            Core.Api.getAllAdminAdvertising().then(function (response) {
                Core.Log.d(response);
                context.itemList = response.data;
            });
        }

        function onUpdate(id) {

        }

        function onDelete(item) {
            swal({
                title: "您确定要删除这条信息吗",
                text: "删除后将无法恢复，请谨慎操作！",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "删除",
                closeOnConfirm: false
            }, function () {
                Core.Api.deleteAdminAdvertising(Core.Data.get("aid"), item.id).then(function (response) {
                    if (response.status == 0) {
                        for (var i = 0; i < context.itemList.length; i++) {
                            if (context.itemList[i].id == item.id) {
                                context.itemList.splice(i, 1);
                            }
                        }
                        swal("删除成功！", "您已经永久删除了这条信息。", "success");
                    } else {
                        Core.Notify.info("删除失败");
                    }
                })

            });
        }

        function onAdd() {
            Core.Api.addAdminAdvertising(Core.Data.get("aid"), context.title, filename,context.city,context.url).then(function (response) {
                if (response.status == 0) {
                    init();
                } else {
                    Core.Notify.info("添加失败");
                }
            })
        }


        function showAddDialog() {

            context.company = "";
            context.discount = "";
        }

        function onUpdate() {
            Core.Api.updateAdminAdvertising(Core.Data.get("aid"), selectItem.id, context.title, filename,context.city,context.url).then(function (response) {
                if (response.status == 0) {
                    init();
                } else {
                    Core.Notify.info("更新失败");
                }
            })
        }


        function onSelect(item) {
            selectItem = item;
            context.city=item.city;
            context.title=item.context;
            context.url=item.url;
            context.src=Core.Const.NET.IMG_RUL+item.picture;

        }

        $scope.uploadImg = '';

        context.upload = function (file) {

            Upload.upload({
                url: Core.Const.NET.IMG_UPLOAD,
                data: {file: file}

            }).then(function (resp) {
                var response = resp.data;
                filename=response.data.fileName
                context.src=Core.Const.NET.IMG_RUL+filename;
                Core.Log.d(response);

            }, function (resp) {
                Core.Log.d('error');
                Core.Log.d(resp);
            }, function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ');
                Core.Log.d(evt);
            });
        };
    }
})();
/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('company.DetailController', ['$scope', 'Core', '$stateParams', DetailController]);

    function DetailController($scope, Core, $stateParams) {
        Core.Log.d("init");
        Core.Log.d($stateParams.data);
        var userId = $stateParams.data;
        var context = $scope;
        init();
        function init() {
            console.log("getUserDetail");
            Core.Api.getUserOilcardByUid(userId).then(function (response) {
                Core.Log.d(response);
                if (response.data) {
                    context.oilCards = response.data.oilcard;
                    var user = response.data.user;
                    if (user) {
                        context.name = user.uname;
                        context.phone = user.uphone;
                        context.plate = user.uemail;
                    }
                }

            });
        }


    }
})();
/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('company.ManageController', ['$scope', 'Core', ManageController]);

    function ManageController($scope, Core) {
        var context = $scope;
        var page = 1;
        var number = 10;
        context.onSelect = onSelect;
        context.onSearch = onSearch;
        context.itemList = [];
        init();

        function init() {
            Core.Log.d("init");
            Core.Api.queryAllUser(1, page, number).then(function (response) {
                if (response.status == 0) {
                    var total=response.data.count;
                    showPage(total);
                    Core.Log.d(response);
                    context.itemList = response.data.data;
                }else{
                    Core.Notify.info("获取用户失败");
                }
            });
        }

        function onSelect(userId) {
            Core.Log.d("select company" + userId);
            Core.go('admin.company-detail', userId);
        }

        function onSearch() {
            Core.Api.queryUser(1, context.search).then(function (response) {
                Core.Log.d(response);
                if (response.status == 0) {
                    if (response.data) {
                        context.itemList = [];
                        context.itemList.push(response.data.data);
                    }else{
                        Core.Notify.info("未找到用户");
                    }

                }

            });
        }
        function showPage(total) {
            $('#callBackPager').extendPagination({

                totalCount: total,

                showCount: 10,

                limit: 10,

                callback: function (curr, limit, totalCount) {
                    Core.Log.d("totalCount " + totalCount);
                    Core.Api.queryAllUser(1, curr, limit).then(function (response) {
                        if (response.status == 0) {
                            Core.Log.d(response);
                            context.itemList = response.data.data;
                        }

                    });

                }

            });
        }




    }
})();
/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('discount.ManageController', ['$scope', 'Core', ManageController]);

    function ManageController($scope, Core) {
        var context = $scope;
        var selectItem;
        context.onDelete = onDelete;
        context.onAdd = onAdd;
        context.showAddDialog = showAddDialog;
        context.onUpdate = onUpdate;
        context.onSelect=onSelect;
        init();

        function init() {
            Core.Log.d("init");
            Core.Log.d(Core.Data.get("aid"));

            Core.Api.getAllAdminOilcardtype().then(function (response) {
                Core.Log.d(response);
                context.itemList = response.data;
            });
        }

        function onUpdate(id) {

        }

        function onDelete(item) {
            swal({
                title: "您确定要删除这条信息吗",
                text: "删除后将无法恢复，请谨慎操作！",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "删除",
                closeOnConfirm: false
            }, function () {
                Core.Api.deleteAdminOilcardtypeById(Core.Data.get("aid"), item.id).then(function (response) {
                    if (response.status == 0) {
                        for (var i = 0; i < context.itemList.length; i++) {
                            if (context.itemList[i].id == item.id) {
                                context.itemList.splice(i, 1);
                            }
                        }
                        swal("删除成功！", "您已经永久删除了这条信息。", "success");
                    }else{
                        Core.Notify.info("删除失败");
                    }
                })

            });
        }

        function onAdd() {
            Core.Api.saveAdminOilcardtype(Core.Data.get("aid"), context.company, context.discount).then(function (response) {
                if (response.status == 0) {
                    init();
                } else {
                    Core.Notify.info("添加失败");
                }
            })
        }


        function showAddDialog() {

            context.company = "";
            context.discount = "";
        }

        function onUpdate() {
            Core.Api.updateAdminOilcardtype(Core.Data.get("aid"), selectItem.id,context.title, context.discount).then(function (response) {
                if (response.status == 0) {
                    init();
                } else {
                    Core.Notify.info("更新失败");
                }
            })
        }


        function onSelect(item) {
            context.updateDialog=true;
            selectItem = item;
            context.title=selectItem.oilcardname;
        }


    }
})();
(function () {
    angular
        .module('app')
        .controller('adminHome', ['$q', '$scope', 'Core', AdminHomeController]);

    function AdminHomeController($q, $scope, Core) {
        var context = $scope;



        context.user = Core.Data.getUser();
        context.user.avatar = Core.Data.getAvatar(context.user.avatar);
        context.onClickCell = onClickCell;
        context.onClickBackground = onClickBackground;

        context.onClickBtn = onClickBtn;
        context.onClickPermit = onClickPermit;
        context.onClickReject = onClickReject;
        context.onClickLeave = onClickLeave;
        context.onClickTrip = onClickTrip;
        context.onClickReimb = onClickReimb;
        context.isShowNotify = false;

        var reimbStat;
        var leaveStat;
        var tripStat;

        context.onClickDetail = onClickDetail;
        Core.on(Core.Const.EVENT.EVENT_ORG_CHANGE, function (event, data) {
            init();
        });
        var orgRootId;
        var orgId;


        init();

        function onClickBackground() {
            context.showDetail = false;
        }

        function init() {
            
            context.leaveStat = {};
            context.reimbStat = {};
            context.tripStat = {};

            context.leaveData = [];
            context.tripData = [];
            context.reimbData = [];
            context.reimbDataY = [];
            context.leaveDataY = [];
            context.tripDataY = [];

            
            context.showDetail = false;
        }

        function getStat() {

            var time = new Date();
            var month = time.getMonth() + 1;
            Core.Log.d(month);

            var week = theWeek();
            Core.Log.d(week);

            Core.Api.STATISTICS.getApvAdmnLeaveStat(orgRootId).then(function (response) {
                Core.Log.d('请假');
                Core.Log.d(response);
                if (response.code == 0) {
                    leaveStat = response.data;
                    context.leaveStat.num = (leaveStat.month_stat[month]/100).toFixed(1);
                    if(month < 2 || leaveStat.month_stat[month-1] == 0 || leaveStat.month_stat[month] == 0) {
                        context.leaveStat.showLeaveStatContrast = false;
                    }
                    else {
                        context.leaveStat.showLeaveStatContrast = true;
                        if(leaveStat.month_stat[month]>leaveStat.month_stat[month-1]) {
                            context.leaveStat.leaveStatContrast =   ((leaveStat.month_stat[month]-leaveStat.month_stat[month-1])/leaveStat.month_stat[month-1]*100).toFixed(2);
                            context.leaveStat.up = true;
                            context.leaveStat.down = false;
                        }
                        else if(leaveStat.month_stat[month]<leaveStat.month_stat[month-1]) {
                            context.leaveStat.leaveStatContrast =   ((leaveStat.month_stat[month-1]-leaveStat.month_stat[month])/leaveStat.month_stat[month-1]*100).toFixed(2);
                            context.leaveStat.up = false;
                            context.leaveStat.down = true;
                        }
                        else {
                            context.leaveStat.leaveStatContrast = 0;
                            context.leaveStat.up = false;
                            context.leaveStat.down = flse;
                        }
                        if(context.leaveStatContrast == 0) {
                            context.leaveStat.up = false;
                            context.leaveStat.down = true;
                        }
                    }
                    var weekData = week;
                    
                    for (var i = 6; i > 0 ; i--) {
                        if(weekData < 1) {
                            break;
                        }
                        context.leaveData.push((leaveStat.week_stat[weekData]/100).toFixed(1));
                        context.leaveDataY.push('第' + weekData + '周');
                        weekData--;
                    }

                    context.leaveData.reverse();
                    context.leaveDataY.reverse();
                    
                    Core.publish('init-chart',{x:context.leaveData,y:context.leaveDataY,type: 1});
                }
            }, function (error) {
                Core.Log.d(error);
            });

            Core.Api.STATISTICS.getReimbStat(orgRootId).then(function (response) {
                Core.Log.d('报销');
                Core.Log.d(response);
                if (response.code == 0) {
                    reimbStat = response.data;
                    context.reimbStat.num = (reimbStat.month_stat[month]/100).toFixed(2);
                    if(month < 2 || reimbStat.month_stat[month-1] == 0 || reimbStat.month_stat[month] == 0) {
                        context.reimbStat.showReimbStatContrast = false;
                    }
                    else {
                        context.reimbStat.showReimbStatContrast = true;
                        if(reimbStat.month_stat[month]>reimbStat.month_stat[month-1]) {
                            context.reimbStat.reimbStatContrast =   (((reimbStat.month_stat[month]-reimbStat.month_stat[month-1])/reimbStat.month_stat[month-1])*100).toFixed(2);
                            context.reimbStat.up = true;
                            context.reimbStat.down = false;
                        }
                        else if(reimbStat.month_stat[month]<reimbStat.month_stat[month-1]) {
                            context.reimbStat.reimbStatContrast =   (((reimbStat.month_stat[month-1]-reimbStat.month_stat[month])/reimbStat.month_stat[month-1])*100).toFixed(2);
                            context.reimbStat.up = false ;
                            context.reimbStat.down = true ;
                        }
                        else {
                            context.reimbStat.reimbStatContrast = 0;
                            context.reimbStat.up = false ;
                            context.reimbStat.down = false ;
                        }
                        
                        if(context.reimbStat.reimbStatContrast == 0) {
                            context.reimbStat.up = false ;
                            context.reimbStat.down = false ;
                        }
                    }
                    var weekData = week;

                    for (var i = 6; i > 0 ; i--) {
                        if(weekData < 1) {
                            break;
                        }
                        context.reimbData.push(((reimbStat.week_stat[weekData])/100).toFixed(2));
                        context.reimbDataY.push('第' + weekData + '周');
                        weekData--;
                    }
                    context.reimbData.reverse();
                    context.reimbDataY.reverse();
                }
            }, function (error) {
                Core.Log.d(error);
            });

            Core.Api.STATISTICS.getTripStat(orgRootId).then(function (response) {
                Core.Log.d('外勤');
                Core.Log.d(response);
                if (response.code == 0) {
                    tripStat = response.data;
                    context.tripStat.num = tripStat.month_stat[month];
                    
                    if(month < 2 || tripStat.month_stat[month] == 0 || tripStat.month_stat[month-1] == 0) {
                        context.tripStat.showTripStatContrast = false;
                    }
                    else {
                        context.tripStat.showTripStatContrast = true;
                        
                        if(tripStat.month_stat[month] > tripStat.month_stat[month-1]) {
                            context.tripStat.tripStatContrast = ((tripStat.month_stat[month]-tripStat.month_stat[month-1])/tripStat.month_stat[month-1]*100).toFixed(1);
                            context.tripStat.up = true;
                            context.tripStat.down = false;
                        }
                        else if(tripStat.month_stat[month] < tripStat.month_stat[month-1]) {
                            context.tripStat.tripStatContrast = ((tripStat.month_stat[month-1]) - tripStat.month_stat[month]/tripStat.month_stat[month-1]*100).toFixed(1);
                            context.tripStat.up = false;
                            context.tripStat.down = true;
                        }
                        else {
                            context.tripStat.tripStatContrast = 0;
                            context.tripStat.up = false;
                            context.tripStat.down = false;                       
                        }
                        
                        if(context.tripStat.tripStatContrast == 0) {
                            context.tripStat.up = false;
                            context.tripStat.down = false;
                        }
                        
                    }
                    var weekData = week;
                    context.tripDataY = [];
                    for (var i = 6; i > 0 ; i--) {
                        if(weekData < 1) {
                            break;
                        }
                        context.tripData.push(tripStat.week_stat[weekData]);
                        context.tripDataY.push('第' + weekData + '周');
                        weekData--;
                    }
                    context.tripData.reverse();
                    context.tripDataY.reverse();
                }
            }, function (error) {
                Core.Log.d(error);
            });
        }

        function onClickLeave() {
            Core.publish('init-chart',{x:context.leaveData,y:context.leaveDataY,type:Core.Const.APP.TYPE.TYPE_ADMIN_LEAVE});
        }

        function onClickReimb() {
            Core.publish('init-chart',{x:context.reimbData,y:context.reimbDataY,type:Core.Const.APP.TYPE.TYPE_FIN_REIMB});
        }

        function onClickTrip() {
            Core.publish('init-chart',{x:context.tripData,y:context.tripDataY,type:Core.Const.APP.TYPE.TYPE_WORK_BUSINESS});
        }

        function onClickBtn(status, orgId, itemId, type) {
            switch (status) {
                case -1:
                    onClickBackground();
                    onClickReject(orgId, itemId, false, type);
                    break;
                case 0:
                    onClickBackground();
                    break;
                case 1:
                    onClickBackground();
                    onClickPermit(orgId, itemId, false, type);
                    break;
                default :
                    break;
            }
        }

        function onClickCell(index) {
            context.clickItem = context.apvList[index].data;
            context.showDetail = true;
        }

        function getApvList() {
            Core.Api.APV_MANAGE.getApvManageApprovePendingList(context.company.id, '', 1).then(function (response) {
                if (response.code == 0) {
                    var apvList = response.data.approve_pending_list;
                    context.apvList = getApvData(apvList);
                }
            }, function (error) {
            })
        }

        function getApvData(data) {
            var apvList = [];
            for (var i in data) {
                var item = {};
                item.userName = context.user.name;
                item.status = ' 待审批';
                item.creatTime = Core.Util.timeFormat(data[i].create_time);
                item.data = data[i];
                item.id = data[i].id;
                switch (data[i].apv_type) {
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_TEMPLATE:
                        item.name = data[i].template.name;
                        item.type = 999;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_ADMIN_LEAVE:
                        item.name = '请假';
                        item.type = 1;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_FIN_PAY:
                        item.name = '支付';
                        item.type = 2;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_FIN_REIMB:
                        item.name = '报销';
                        item.type = 3;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_HR_RECRUITMENT:
                        item.name = '招募';
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_WORK_BUSINESS:
                        item.name = '外勤';
                        item.type = 5;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_FIN_FUND:
                        item.name = '备用金申请';
                        item.type = 6;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_ADMIN_RES:
                        item.name = '';
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_ADMIN_RES_GOODS:
                        item.name = '物品申领';
                        item.type = 8;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_ADMIN_RES_STAMP:
                        item.name = '用印申请';
                        item.type = 9;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_ADMIN_RES_CAR:
                        item.name = '用车申请';
                        item.type = 10;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_CARD:
                        item.name = '名片申请';
                        item.type = 11;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_CONTRACT:
                        item.name = '合同';
                        item.type = 12;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_TRAIN:
                        item.name = '培训';
                        item.type = 13;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_REPORT:
                        item.name = '报告';
                        item.type = 14;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_FIN_TRIP_REIMB:
                        item.name = '差旅费';
                        item.type = 15;
                        break;

                }
                apvList.push(item);
                if (i >= 4) {
                    break;
                }
            }
            return apvList;
        }

        function onClickDetail(item) {
            context.showDetail = true;
            if (item.itemType == 10999 || item.itemType == 999) {
                
                context.clickItem = item.apvItem;
                context.clickItem.apv_type = 999;
            }
            else {
                var itemDetail = {};
                itemDetail.isHome = true;

                if (item.apvItem.apv) {
                    itemDetail.org_id = item.apvItem.apv.org_id;
                    itemDetail.id = item.apvItem.apv.id;
                    itemDetail.org_root_id = item.apvItem.apv.org_root_id;
                    context.clickItem = itemDetail;
                    context.clickItem.apv_type = item.apvItem.apv.apv_type;
                }
                else {
                    itemDetail.org_id = item.apvItem.org_id;
                    itemDetail.id = item.apvItem.id;
                    itemDetail.org_root_id = item.apvItem.org_root_id;
                    context.clickItem = itemDetail;
                    context.clickItem.apv_type = item.apvItem.apv_type;
                }

            }
        }



        function onClickPermit(orgId, itemId, isStop, type, $event) {
            if (isStop) {
                $event.stopPropagation();
            }
            Core.Api.APV_MANAGE.permitApv(orgId, orgRootId, itemId, type, '同意').then(function (response) {
                if (response.code == 0) {
                    context.onItem = false;
                    context.onApprove = false;
                    getApvList();
                    // setList();
                    Core.Notify.success('操作成功');
                }
            }, function (reason) {
                Core.Notify.error('操作失败');
            });
        }

        function onClickReject(orgId, itemId, isStop, type, $event) {
            if (isStop) {
                $event.stopPropagation();
            }
            Core.Api.APV_MANAGE.rejectApv(orgId, orgRootId, itemId, type, '不同意').then(function (response) {
                if (response.code == 0) {
                    context.onItem = false;
                    context.onApprove = false;
                    getApvList();
                    // setList();
                    Core.Notify.success('操作成功');
                }
            }, function (reason) {
                Core.Notify.error('操作失败');
            });
        }

        function theWeek() {
            var totalDays = 0;
            var now = new Date();
            var years = now.getYear()
            if (years < 1000) {
                years += 1900;
            }
            var days = new Array(12);
            days[0] = 31;
            days[2] = 31;
            days[3] = 30;
            days[4] = 31;
            days[5] = 30;
            days[6] = 31;
            days[7] = 31;
            days[8] = 30;
            days[9] = 31;
            days[10] = 30;
            days[11] = 31;
            if (Math.round(now.getYear() / 4) == now.getYear() / 4) {
                days[1] = 29
            } else {
                days[1] = 28
            }
            if (now.getMonth() == 0) {
                totalDays = totalDays + now.getDate();
            } else {
                var curMonth = now.getMonth();
                for (var count = 1; count <= curMonth; count++) {
                    totalDays = totalDays + days[count - 1];
                }
                totalDays = totalDays + now.getDate();
            }
            var week = Math.round(totalDays / 7);
            return week;
        }
    }
})();
/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('invoice.ManageController', ['$scope', 'Core', ManageController]);

    function ManageController($scope, Core) {
        var context = $scope;
        var page = 1;
        var number = 8;
        var status = 0;
        context.group=true;
        context.itemList = [];
        init();
        function init() {
            Core.Log.d("init");
            Core.Api.getUserInvoiceList(status,page, number).then(function (response) {
                Core.Log.d(response);
                if (response.status == 0) {
                    Core.Log.d(response);
                    if (response.data.data) {
                        changeList(response.data.data)
                    }
                    var total = response.data.count;
                    showPage(total);
                } else {
                    Core.Notify.info("获取失败");
                }
            });
        }

        context.rechargeSuccess = function (item) {
            Core.Log.d("Success");
            Core.Api.updateUserInvoiceStatus(Core.Data.get("aid"),item.id,1).then(function (response) {
                if (response.status == 0) {
                    Core.Notify.info("操作成功");
                    init();
                } else {
                    Core.Notify.info("操作失败");
                }
            });
        }

        context.rechargeError = function (item) {
            Core.Log.d("Success");
            Core.Api.updateUserInvoiceStatus(Core.Data.get("aid"),item.id,2).then(function (response) {
                if (response.status == 0) {
                    Core.Notify.info("操作成功");
                    init();
                } else {
                    Core.Notify.info("操作失败");
                }
            });
        }




        function changeList(itemList) {
            for (var i = 0; i < itemList.length; i++) {
                if (itemList[i].status == 0) {
                    itemList[i].status = "未开";
                } else if (itemList[i].status == 1) {
                    itemList[i].status = "已开";
                } else if (itemList[i].status == 2) {
                    itemList[i].status = "拒开";
                }
            }
            context.itemList = itemList;
        }

        context.check0 = function () {
            status=0;
            context.group=true;
            init();
        }
        context.check1 = function () {
            status=1;
            context.group=false;
            init();
        }
        context.check2 = function () {
            status=2;
            context.group=false;
            init();
        }

        function showPage(total) {
            $('#callBackPager').extendPagination({

                totalCount: total,

                showCount: 10,

                limit: 10,

                callback: function (curr, limit, totalCount) {
                    Core.Log.d("totalCount " + totalCount);
                    Core.Api.getUserInvoiceList(status,curr, limit).then(function (response) {
                        Core.Log.d(response);
                        if (response.status == 0) {
                            Core.Log.d(response);
                            if (response.data.data) {
                                changeList(response.data.data)
                            }
                        } else {
                            Core.Notify.info("获取失败");
                        }
                    });

                }

            });
        }
    }
})();
/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('merchant.DetailController', ['$scope', 'Core','$stateParams', DetailController]);

    function DetailController($scope, Core,$stateParams) {
        var context = $scope;
        Core.Log.d("init");
        Core.Log.d($stateParams.data);
        var merId = $stateParams.data;
        init();
        function init() {
            console.log("getUserDetail");
            Core.Api.getMerchantBankCard(merId).then(function (response) {
                Core.Log.d(response);
                if (response.data) {
                    context.bankCards = response.data.merchantbankcard;
                    context.goods = response.data.merchantgoods;
                    var merchant = response.data.merchant;
                    if (merchant) {
                        context.name = merchant.mname;
                        context.tel = merchant.tel;
                        context.address = merchant.maddress;
                        context.logo=Core.Const.NET.IMG_RUL+merchant.mavitor;
                        context.license=Core.Const.NET.IMG_RUL+merchant.businesslicense;
                    }
                }

            });
        }


    }
})();
/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('merchant.ManageController', ['$scope', 'Core', ManageController]);

    function ManageController($scope, Core) {
        var context = $scope;
        var page = 1;
        var number = 10;
        context.onSelect = onSelect;
        init();
        function init() {
            Core.Log.d("init");
            Core.Api.queryAllMerchant(page, number).then(function (response) {
                Core.Log.d(response);
                if (response.status==0){
                    if(response.data.data){
                        for(var i=0;i<response.data.data.length;i++){
                            if(response.data.data[i].tel=="[]"){
                                response.data.data[i].tel="无";
                            }
                        }
                        context.itemList = response.data.data;
                    }
                    var total = response.data.count;
                    showPage(total);
                }
                else{
                    Core.Notify.info("获取商户失败");
                }

            });
        }

        function onSelect(merId) {
            Core.Log.d("select mer"+merId);
            Core.go('admin.merchant-detail',merId);
        }

        context.onSearch=function (){
            Core.Api.queryMerchantByName(context.name,1, 1).then(function (response) {
                Core.Log.d(response);
                if (response.status==0){
                    if(response.data.data){
                        for(var i=0;i<response.data.data.length;i++){
                            if(response.data.data[i].tel=="[]"){
                                response.data.data[i].tel="无";
                            }
                        }
                        context.itemList = response.data.data;
                    }
                    var total = response.data.count;
                    showPage(total);
                }
                else{
                    Core.Notify.info("获取商户失败");
                }

            });
        }

        function showPage(total) {
            $('#callBackPager').extendPagination({

                totalCount: total,

                showCount: 10,

                limit: 10,

                callback: function (curr, limit, totalCount) {
                    Core.Log.d("totalCount " + totalCount);
                    Core.Api.queryAllMerchant(curr, limit).then(function (response) {
                        Core.Log.d(response);
                        if (response.status==0){
                            if(response.data.data){
                                for(var i=0;i<response.data.data.length;i++){
                                    if(response.data.data[i].tel=="[]"){
                                        response.data.data[i].tel="无";
                                    }
                                }
                                context.itemList = response.data.data;
                            }
                        }
                        else{
                            Core.Notify.info("获取商户失败");
                        }

                    });

                }

            });
        }
    }
})();
/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('oil-manager.ManageController', ['$scope', 'Core', ManageController]);

    function ManageController($scope, Core) {
        var context = $scope;
        var selectItem;
        context.onDelete = onDelete;
        context.onAdd = onAdd;
        context.showAddDialog = showAddDialog;
        context.onUpdate = onUpdate;
        context.onSelect=onSelect;
        init();

        function init() {
            Core.Log.d("init");
            Core.Log.d(Core.Data.get("aid"));

            Core.Api.getAllAdminGoods().then(function (response) {
                Core.Log.d(response);

                if (response.status == 0) {
                    if (response.data){
                        changeList(response.data)
                    }

                } else {
                    Core.Notify.info("更新失败");
                }
            });
        }

        function onUpdate(id) {

        }

        function onDelete(item) {
            swal({
                title: "您确定要删除这条信息吗",
                text: "删除后将无法恢复，请谨慎操作！",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "删除",
                closeOnConfirm: false
            }, function () {
                Core.Api.deleteAdminGoods(Core.Data.get("aid"), item.typeid).then(function (response) {
                    if (response.status == 0) {
                        for (var i = 0; i < context.itemList.length; i++) {
                            if (context.itemList[i].typeid == item.typeid) {
                                context.itemList.splice(i, 1);
                            }
                        }
                        swal("删除成功！", "您已经永久删除了这条信息。", "success");
                    }
                })

            });
        }

        function onAdd() {
            Core.Api.addAdminGoods(Core.Data.get("aid"), context.name, context.price,context.notice).then(function (response) {
                if (response.status == 0) {
                    init();
                } else {
                    Core.Notify.info("添加失败");
                }
            })
        }


        function showAddDialog() {
            context.name = "";
            context.price = "";
            context.notice = "";
        }

        function onUpdate() {
            Core.Api.updateAdminGoods(Core.Data.get("aid"), selectItem.typeid,context.title, context.price,context.notice).then(function (response) {
                if (response.status == 0) {
                    init();
                } else {
                    Core.Notify.info("更新失败");
                }
            })
        }


        function onSelect(item) {
            context.updateDialog=true;
            selectItem = item;
            context.title=selectItem.typename;
            context.price = selectItem.typeprice;
            context.notice = selectItem.notice;
        }


        function changeList(itemList) {
            for(var i=0;i<itemList.length;i++){
                if(itemList[i].isrise==0){
                    itemList[i].isrise="持平";
                }else if(itemList[i].isrise==1){
                    itemList[i].isrise="上涨";
                }else if(itemList[i].isrise==-1){
                    itemList[i].isrise="下调";
                }
            }
            context.itemList = itemList;
        }



    }
})();
/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('recharge.ManageController', ['$scope', 'Core', ManageController]);

    function ManageController($scope, Core) {
        var context = $scope;
        var page = 1;
        var number = 10;
        var status = 1;
        var selectItem;
        context.itemList = [];
        init();
        function init() {
            Core.Log.d("init");
            Core.Api.getUserOilcardSerialList(status, page, number).then(function (response) {
                Core.Log.d(response);
                if (response.status == 0) {
                    Core.Log.d(response);
                    if(response.data.data){
                        changeList(response.data.data)
                    }
                    var total=response.data.count;
                    showPage(total);
                }else{
                    Core.Notify.info("获取失败");
                }
            });
        }

        context.rechargeSuccess = function (item) {
            Core.Log.d("Success");
            Core.Api.updateUserOilcardSerialById(item.id,Core.Data.get("aid")).then(function (response) {
                if (response.status == 0) {
                    Core.Notify.info("操作成功");
                    init();
                }else{
                    Core.Notify.info("操作失败");
                }
            });
        }
        
        context.rechargeError = function (item) {
            
        }




        context.check2 = function () {
            status = 2;
            context.isRecharge=true;
            init();
        }

        context.check1 = function () {
            status = 1;
            context.isRecharge=false;
            init();
        }

        context.selectItem = function (item) {
            selectItem=item;
        }
        
        context.onRemark = function () {
            Core.Log.d("Success");
            Core.Api.updateUserOilcardSerialRemarkById(selectItem.id,Core.Data.get("aid"),context.remark).then(function (response) {
                if (response.status == 0) {
                    Core.Notify.info("操作成功");
                    init();
                }else{
                    Core.Notify.info("操作失败");
                }
            });
            
        }

        function changeList(itemList) {
            for(var i=0;i<itemList.length;i++){
                if(itemList[i].status==1){
                    itemList[i].status="未充值";
                }else if(itemList[i].status==2){
                    itemList[i].status="充值成功";
                }
            }
            context.itemList = itemList;
        }

        function showPage(total) {
            $('#callBackPager').extendPagination({

                totalCount: total,

                showCount: 10,

                limit: 10,

                callback: function (curr, limit, totalCount) {
                    Core.Api.getUserOilcardSerialList(status, curr, limit).then(function (response) {
                        Core.Log.d(response);
                        if (response.status == 0) {
                            Core.Log.d(response);
                            if(response.data.data){
                                changeList(response.data.data)
                            }
                        }else{
                            Core.Notify.info("获取失败");
                        }
                    });

                }

            });
        }

    }
})();
/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('user.DetailController', ['$scope', 'Core', '$stateParams', DetailController]);

    function DetailController($scope, Core, $stateParams) {
        Core.Log.d("init");
        Core.Log.d($stateParams.data);
        var userId = $stateParams.data;
        var context = $scope;
        init();
        function init() {
            console.log("getUserDetail");
            Core.Api.getUserOilcardByUid(userId).then(function (response) {
                Core.Log.d(response);
                if (response.data) {
                    context.oilCards = response.data.oilcard;
                    var user = response.data.user;
                    if (user) {
                        context.name = user.uname;
                        context.phone = user.uphone;
                        context.plate = user.uemail;
                    }
                }

            });
        }


    }
})();
/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('user.ManageController', ['$scope', 'Core', ManageController]);

    function ManageController($scope, Core) {
        var context = $scope;
        var page = 1;
        var number = 10;
        context.onSelect = onSelect;
        context.onSearch = onSearch;
        context.itemList = [];
        init();

        function init() {
            Core.Log.d("init");
            Core.Api.queryAllUser(0, page, number).then(function (response) {
                if (response.status == 0) {
                    var total=response.data.count;
                    showPage(total);
                    Core.Log.d(response);
                    context.itemList = response.data.data;
                }else{
                    Core.Notify.info("获取用户失败");
                }
            });
        }

        function onSelect(userId) {
            Core.Log.d("select user" + userId);
            Core.go('admin.user-detail', userId);
        }

        function onSearch() {
            Core.Api.queryUser(0, context.search).then(function (response) {
                Core.Log.d(response);
                if (response.status == 0) {
                    if (response.data) {
                        context.itemList = [];
                        context.itemList.push(response.data.data);
                    }else{
                        Core.Notify.info("未找到用户");
                    }

                }

            });
        }
        function showPage(total) {
            $('#callBackPager').extendPagination({

                totalCount: total,

                showCount: 10,

                limit: 10,

                callback: function (curr, limit, totalCount) {
                    Core.Log.d("totalCount " + totalCount);
                    Core.Api.queryAllUser(0, curr, limit).then(function (response) {
                        if (response.status == 0) {
                            Core.Log.d(response);
                            context.itemList = response.data.data;
                        }

                    });

                }

            });
        }




    }
})();
/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('version.ManageController', ['$scope', 'Core','Upload', ManageController]);

    function ManageController($scope, Core,Upload) {
        var context = $scope;
        var selectItem;
        context.onDelete = onDelete;
        context.onAdd = onAdd;
        context.showAddDialog = showAddDialog;
        context.onUpdate = onUpdate;
        context.onSelect = onSelect;
        var filename;
        init();

        function init() {
            Core.Log.d("init");
            Core.Log.d(Core.Data.get("aid"));

            Core.Api.getAllAdminAdvertising().then(function (response) {
                Core.Log.d(response);
                context.itemList = response.data;
            });
        }

        function onUpdate(id) {

        }

        function onDelete(item) {
            swal({
                title: "您确定要删除这条信息吗",
                text: "删除后将无法恢复，请谨慎操作！",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "删除",
                closeOnConfirm: false
            }, function () {
                Core.Api.deleteAdminAdvertising(Core.Data.get("aid"), item.id).then(function (response) {
                    if (response.status == 0) {
                        for (var i = 0; i < context.itemList.length; i++) {
                            if (context.itemList[i].id == item.id) {
                                context.itemList.splice(i, 1);
                            }
                        }
                        swal("删除成功！", "您已经永久删除了这条信息。", "success");
                    } else {
                        Core.Notify.info("删除失败");
                    }
                })

            });
        }

        function onAdd() {
            Core.Api.addAdminAdvertising(Core.Data.get("aid"), context.title, filename,context.city,context.url).then(function (response) {
                if (response.status == 0) {
                    init();
                } else {
                    Core.Notify.info("添加失败");
                }
            })
        }


        function showAddDialog() {

            context.company = "";
            context.discount = "";
        }

        function onUpdate() {
            Core.Api.updateAdminAdvertising(Core.Data.get("aid"), selectItem.id, context.title, filename,context.city,context.url).then(function (response) {
                if (response.status == 0) {
                    init();
                } else {
                    Core.Notify.info("更新失败");
                }
            })
        }


        function onSelect(item) {
            selectItem = item;
            context.city=item.city;
            context.title=item.context;
            context.url=item.url;
            context.src=Core.Const.NET.IMG_RUL+item.picture;

        }

        $scope.uploadImg = '';

        context.upload = function (file) {

            Upload.upload({
                url: Core.Const.NET.IMG_UPLOAD,
                data: {file: file}

            }).then(function (resp) {
                var response = resp.data;
                filename=response.data.fileName
                context.src=Core.Const.NET.IMG_RUL+filename;
                Core.Log.d(response);

            }, function (resp) {
                Core.Log.d('error');
                Core.Log.d(resp);
            }, function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ');
                Core.Log.d(evt);
            });
        };
    }
})();
/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('withdraw.ManageController', ['$scope', 'Core', ManageController]);

    function ManageController($scope, Core) {
        var context = $scope;
        Core.publish(Core.Const.DATA.KEY_DEFAULT_NAVIGATION,'withdraw');
        context.itemList=[
            {
                id:'',
                bankcard:'6228480402564890018 ',
                bankname:'中国银行',
                name:'张三',
                money:'300.00',
                status:'提现成功'
            },
            {
                id:'',
                bankcard:'6228480402564890018 ',
                bankname:'中国银行',
                name:'张三',
                money:'300.00',
                status:'提现成功'
            },
            {
                id:'',
                bankcard:'6228480402564890018 ',
                bankname:'中国银行',
                name:'张三',
                money:'300.00',
                status:'提现成功'
            },
            {
                id:'',
                bankcard:'6228480402564890018 ',
                bankname:'中国银行',
                name:'张三',
                money:'300.00',
                status:'提现成功'
            },
            {
                id:'',
                bankcard:'6228480402564890018 ',
                bankname:'中国银行',
                name:'张三',
                money:'300.00',
                status:'提现成功'
            },
            {
                id:'',
                bankcard:'6228480402564890018 ',
                bankname:'中国银行',
                name:'张三',
                money:'300.00',
                status:'提现成功'
            },{
                id:'',
                bankcard:'6228480402564890018 ',
                bankname:'中国银行',
                name:'张三',
                money:'300.00',
                status:'提现成功'
            },{
                id:'',
                bankcard:'6228480402564890018 ',
                bankname:'中国银行',
                name:'张三',
                money:'300.00',
                status:'提现成功'
            }




        ];



    }
})();