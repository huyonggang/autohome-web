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
                if(response.data){
                    for(var i=0;i<response.data.length;i++){
                        if(response.data[i].tel=="[]"){
                            response.data[i].tel="无";
                        }
                    }
                    context.itemList = response.data;
                }
            });
        }

        function onSelect(merId) {
            Core.Log.d("select mer"+merId);
            Core.go('admin.merchant-detail',merId);
        }


        context.next = function () {
            Core.Log.d("next"+page);
            Core.Log.d("next"+context.itemList.length);
            if(context.itemList.length==10){
                page++;
                Core.Api.queryAllMerchant(page, number).then(function (response) {
                    Core.Log.d(response);
                    context.itemList = response.data;
                });
            }

        }

        context.last=function () {
            Core.Log.d("next"+page);
            if (page>1){
                page--;
                Core.Api.queryAllMerchant(page, number).then(function (response) {
                    Core.Log.d(response);
                    context.itemList = response.data;
                });
            }

        }
    }
})();