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
        context.itemList = [];
        init();
        function init() {
            Core.Log.d("init");
            Core.Api.getUserOilcardSerialList(status, page, number).then(function (response) {
                Core.Log.d(response);
                if (response.status == 0) {
                    Core.Log.d(response);
                    if(response.data){
                        changeList(response.data)
                    }
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
            init();
        }

        context.check1 = function () {
            status = 1;
            init();
        }

        context.next = function () {
            Core.Log.d("next" + page);
            Core.Log.d("next" + context.itemList.length);
            if (context.itemList.length == 10) {
                page++;
                Core.Api.getUserOilcardSerialList(status, page, number).then(function (response) {
                    if (response.status == 0) {
                        Core.Log.d(response);
                        if(response.data){
                            changeList(response.data)
                        }
                    }else{
                        Core.Notify.info("获取失败");
                    }
                });
            }

        }

        context.last = function () {
            Core.Log.d("next" + page);
            if (page > 1) {
                page--;
                Core.Api.getUserOilcardSerialList(status, page, number).then(function (response) {
                    if (response.status == 0) {
                        Core.Log.d(response);
                        if(response.data){
                            changeList(response.data)
                        }

                    }else{
                        Core.Notify.info("获取失败");
                    }

                });
            }

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

    }
})();