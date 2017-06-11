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