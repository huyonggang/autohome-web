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
                    if (response.data) {
                        changeList(response.data)
                    }
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


        context.next = function () {
            Core.Log.d("next" + page);
            Core.Log.d("next" + context.itemList.length);
            if (context.itemList.length == 8) {
                page++;
                Core.Api.getUserInvoiceList(status,page, number).then(function (response) {
                    if (response.status == 0) {
                        Core.Log.d(response);
                        if (response.data) {
                            changeList(response.data)
                        }
                    } else {
                        Core.Notify.info("获取失败");
                    }
                });
            }

        }

        context.last = function () {
            Core.Log.d("next" + page);
            if (page > 1) {
                page--;
                Core.Api.getUserInvoiceList(status,page, number).then(function (response) {
                    if (response.status == 0) {
                        Core.Log.d(response);
                        if (response.data) {
                            changeList(response.data)
                        }

                    } else {
                        Core.Notify.info("获取失败");
                    }

                });
            }

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
    }
})();