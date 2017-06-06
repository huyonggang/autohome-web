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
                        context.phone = merchant.mphone;
                        context.address = merchant.maddress;
                    }
                }

            });
        }


    }
})();