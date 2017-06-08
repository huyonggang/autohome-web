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