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