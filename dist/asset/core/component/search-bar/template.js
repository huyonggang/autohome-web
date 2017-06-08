angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("core/navigation/search-bar.html","<div class=\"component-search-bar\">\n    <div class=\"status-search\" ng-show=\"isShowSearchBar\">\n        <div class=\"title m-default\">状态筛选</div>\n        <div class=\"status-line m-default\"></div>\n        <div class=\"status m-link\" ng-click=\"isShow=!isShow\">{{status}}</div>\n        <img class=\"triangle m-link\" ng-click=\"isShow=!isShow\" src=\"asset/core/component/search-bar/img/icon-triangle.png\">\n    </div>\n    <datepicker ng-show=\"isShowSearchBar\" class=\"data-picker\" style=\"margin-left: 5px\" date-format=\"yyyy-MM-dd\" >\n        <input class=\"data-picker-input\" ng-model=\"dateBegin\" placeholder=\"点击选择时间\" type=\"text\"/> -\n    </datepicker>\n    <datepicker ng-show=\"isShowSearchBar\" class=\"data-picker\" style=\"margin-left: 117px\" date-format=\"yyyy-MM-dd\">\n        <input class=\"data-picker-input\" ng-model=\"dateEnd\" placeholder=\"点击选择时间\" date-min-limit=\"dateBegin\" type=\"text\"/>\n    </datepicker>\n    <input ng-show=\"isShowSearchBar\" class=\"name-input\" ng-model=\"name\" placeholder=\"申请人姓名\" type=\"text\"/>\n    <div ng-show=\"isShowSearchBar\" class=\"search-btn m-link\" ng-click=\"onClickSearch()\">搜索</div>\n    <div class=\"exit m-link\" ng-class=\"{true:\'exitShow\',false:\'exitHide\'}[isShow]\" ng-mouseleave=\"isShow=false\" ng-init=\"isShow=false\">\n        <div ng-if=\"isShow\" class=\"status\" ng-click=\"changeStatus(\'全部\')\">全部</div>\n        <div ng-if=\"isShow\" class=\"status\" ng-click=\"changeStatus(\'待审批\')\">待审批</div>\n        <div ng-if=\"isShow\" class=\"status\" ng-click=\"changeStatus(\'已审批\')\">已完成</div>\n        <div ng-if=\"isShow\" class=\"status\" ng-click=\"changeStatus(\'审批未通过\')\">审批未通过</div>\n    </div>\n    <a ng-show=\"isShowExport\" href=\"{{context.exportUrl}}\" target=\"_blank\" class=\"export m-link\" ng-click=\"onClickExport();\">导出数据</a>\n    <div class=\"statistics m-link\" ng-click=\"context.onClickData()\">统计</div>\n    <div class=\"line\"></div>\n    <div class=\"table-btn m-link\" ng-click=\"context.onClickTable()\">列表</div>\n    <div class=\"goods-line\" ng-show=\"$state.includes(\'administration.goods\')\"></div>\n    <div class=\"goods m-link\" ng-show=\"$state.includes(\'administration.goods\')\" ng-click=\"context.onClickGoods()\">库存管理</div>\n</div>");}]);