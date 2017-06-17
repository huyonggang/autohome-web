/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('merchant.DetailController', ['$scope', 'Core','$stateParams', DetailController]);

    function DetailController($scope, Core,$stateParams) {
        var context = $scope;
        Core.Log.d("init");
        Core.Log.d($stateParams.data);
        var merId = $stateParams.data;
        init();
        function init() {
            console.log("getUserDetail");
            Core.Api.getMerchantBankCard(merId).then(function (response) {
                Core.Log.d(response);
                if (response.data) {
                    context.bankCards = response.data.merchantbankcard;
                    context.goods = response.data.merchantgoods;
                    var merchant = response.data.merchant;
                    if (merchant) {
                        context.name = merchant.mname;
                        context.tel = merchant.tel;
                        context.address = merchant.maddress;
                        if(merchant.mremark){
                            context.remark = merchant.mremark;
                        } else {
                            context.remark = "无优惠信息"
                        }

                        context.logo=Core.Const.NET.IMG_RUL+merchant.mavitor;

                        Core.Log.d(context.logo);
                        context.license=Core.Const.NET.IMG_RUL+merchant.businesslicense;
                    }
                }

            });
        }


    }
})();