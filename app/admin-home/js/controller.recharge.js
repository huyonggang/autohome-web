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