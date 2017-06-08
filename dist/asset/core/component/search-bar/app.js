angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("core/navigation/search-bar.html","<div class=\"component-search-bar\">\n    <div class=\"status-search\" ng-show=\"isShowSearchBar\">\n        <div class=\"title m-default\">状态筛选</div>\n        <div class=\"status-line m-default\"></div>\n        <div class=\"status m-link\" ng-click=\"isShow=!isShow\">{{status}}</div>\n        <img class=\"triangle m-link\" ng-click=\"isShow=!isShow\" src=\"asset/core/component/search-bar/img/icon-triangle.png\">\n    </div>\n    <datepicker ng-show=\"isShowSearchBar\" class=\"data-picker\" style=\"margin-left: 5px\" date-format=\"yyyy-MM-dd\" >\n        <input class=\"data-picker-input\" ng-model=\"dateBegin\" placeholder=\"点击选择时间\" type=\"text\"/> -\n    </datepicker>\n    <datepicker ng-show=\"isShowSearchBar\" class=\"data-picker\" style=\"margin-left: 117px\" date-format=\"yyyy-MM-dd\">\n        <input class=\"data-picker-input\" ng-model=\"dateEnd\" placeholder=\"点击选择时间\" date-min-limit=\"dateBegin\" type=\"text\"/>\n    </datepicker>\n    <input ng-show=\"isShowSearchBar\" class=\"name-input\" ng-model=\"name\" placeholder=\"申请人姓名\" type=\"text\"/>\n    <div ng-show=\"isShowSearchBar\" class=\"search-btn m-link\" ng-click=\"onClickSearch()\">搜索</div>\n    <div class=\"exit m-link\" ng-class=\"{true:\'exitShow\',false:\'exitHide\'}[isShow]\" ng-mouseleave=\"isShow=false\" ng-init=\"isShow=false\">\n        <div ng-if=\"isShow\" class=\"status\" ng-click=\"changeStatus(\'全部\')\">全部</div>\n        <div ng-if=\"isShow\" class=\"status\" ng-click=\"changeStatus(\'待审批\')\">待审批</div>\n        <div ng-if=\"isShow\" class=\"status\" ng-click=\"changeStatus(\'已审批\')\">已完成</div>\n        <div ng-if=\"isShow\" class=\"status\" ng-click=\"changeStatus(\'审批未通过\')\">审批未通过</div>\n    </div>\n    <a ng-show=\"isShowExport\" href=\"{{context.exportUrl}}\" target=\"_blank\" class=\"export m-link\" ng-click=\"onClickExport();\">导出数据</a>\n    <div class=\"statistics m-link\" ng-click=\"context.onClickData()\">统计</div>\n    <div class=\"line\"></div>\n    <div class=\"table-btn m-link\" ng-click=\"context.onClickTable()\">列表</div>\n    <div class=\"goods-line\" ng-show=\"$state.includes(\'administration.goods\')\"></div>\n    <div class=\"goods m-link\" ng-show=\"$state.includes(\'administration.goods\')\" ng-click=\"context.onClickGoods()\">库存管理</div>\n</div>");}]);
(function () {
    angular
        .module('app.core.component')
        .component('searchBar', {
            templateUrl: 'core/search-bar/search-bar.html',
            controller: searchBarController,
            controllerAs: 'context',
            bindings: {
                onClickSearch: '&',
                onClickExport: '&',
                onClickData: '&',
                onClickTable: '&',
                type: '=',
                page: '=',
                templateId: '=',
                onClickGoods: '&'
            }
        });

    searchBarController.$inject = ['$scope', 'Core', '$state'];

    function searchBarController($scope, Core, $state) {
        var context = this;
        $scope.status='请选择状态';
        $scope.isShowSearchBar = true;
        $scope.isShowExport = true;
        $scope.$state = Core.$state;

        $scope.changeStatus = function (status) {
            $scope.status = status;
            $scope.isShow = false;
        };
        var searchMessage = {};
        var orgRootId;
        var userId;

        init();

        function init() {
            if ($state.includes('work.journal') || $state.includes('work.index')) {
                $scope.isShowSearchBar = false;
                $scope.isShowExport = false;
            }
        }

        Core.on(Core.Const.EVENT.KEY_CLEAR_SEARCH_DATA, function (event) {
            $scope.status = '请选择状态';
            $scope.dateBegin = '';
            $scope.dateEnd = '';
            $scope.name = '';
        });

        Core.Api.ORG.getDefaultOrgRoot().then(function (data) {
            orgRootId = data.id;
        });

        Core.Api.LOCAL.getLocalUser().then(function (data) {
            userId = data.id;
        });
        
        $scope.onClickSearch = function onClickSearch() {
            
            var status;
            var beginTime;
            var endTime;
            var name;

            if($scope.status == '请选择状态') {
                status = '';
            }
            else {
                status = $scope.status;
            }

            if(!$scope.dateBegin&&$scope.dateEnd){
                Core.Notify.info('请选择开始时间');
                return;
            }
            else if(!$scope.dateEnd&&$scope.dateBegin){
                Core.Notify.info('请选择结束时间');
                return;
            }
            else if(!$scope.dateBegin&&!$scope.dateEnd){
                beginTime = 0;
                endTime = 0;
            }
            else if($scope.dateBegin<=$scope.dateEnd) {
                beginTime = Core.Util.getTimestamp(parseDate($scope.dateBegin));
                endTime = Core.Util.getTimestamp(parseDate($scope.dateEnd));
            }
            else {
                Core.Notify.info('开始时间不能小于结束时间');
                return;
            }

            

            if($scope.name) {
                name = $scope.name;
            }
            else {
                name = '';
            }

            if(!status&&!beginTime&&!endTime&&!name) {
                Core.Notify.info('请选择条件');
                return;
            }
            else {
                var message = {
                    name : name,
                    beginTime: beginTime,
                    endTime: endTime,
                    status: status,
                };
                searchMessage = message;
                context.onClickSearch({message:message});
            }
        };

        $scope.onClickExport = function onClickExport() {
            Core.Log.d(context.type);
            Core.Log.d(context.page);
            Core.Log.d(context.templateId);

            switch ($scope.status) {
                case '请选择状态':
                    context.status = '';
                    break;
                case '全部':
                    context.status = '';
                    break;
                case '待审批':
                    context.status = 1;
                    break;
                case '已审批':
                    context.status = 2;
                    break;
                case '审批未通过':
                    context.status = -1;
                    break;
                default:
                    context.status = '';
                    break;
            }
            
            if(!searchMessage.beginTime) {
                searchMessage.beginTime = '';
            }
            if(!searchMessage.endTime) {
                searchMessage.endTime = '';
            }
            if(!searchMessage.name) {
                searchMessage.name = '';
            }
            var data = {
                org_root_id: orgRootId,
                user_id: userId,
                type: context.type,
                status: context.status,
                page: context.page,
                template_id : context.templateId,
                begin_time : searchMessage.beginTime,
                end_time : searchMessage.endTime,
                name : searchMessage.name
            };
            Core.Log.d(Core.Data.getExportUrl(data));
            context.exportUrl = Core.Data.getExportUrl(data);
        };

        function parseDate(input) {
            var parts = input.match(/(\d+)/g);
            // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
            return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
        }
    }
})();