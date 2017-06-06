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
                    Core.Log.d(response);
                    context.itemList = response.data;
                }
            });
        }

        function onSelect(userId) {
            Core.Log.d("select user" + userId);
            Core.go('admin.user-detail', userId);
        }

        context.next = function () {
            Core.Log.d("next" + page);
            Core.Log.d("next" + context.itemList.length);
            if (context.itemList.length == 10) {
                page++;
                Core.Api.queryAllUser(0, page, number).then(function (response) {
                    if (response.status == 0) {
                        Core.Log.d(response);
                        context.itemList = response.data;
                    }
                });
            }

        }

        context.last = function () {
            Core.Log.d("next" + page);
            if (page > 1) {
                page--;
                Core.Api.queryAllUser(0, page, number).then(function (response) {
                    if (response.status == 0) {
                        Core.Log.d(response);
                        context.itemList = response.data;
                    }

                });
            }

        }

        function onSearch() {
            Core.Api.queryUser(0, context.search).then(function (response) {
                Core.Log.d(response);
                if (response.status == 0) {
                    if (response.data) {

                        context.itemList = [];
                        context.itemList.push(response.data);
                    }else{
                        Core.Notify.info("未找到用户");
                    }

                }

            });
        }


    }
})();