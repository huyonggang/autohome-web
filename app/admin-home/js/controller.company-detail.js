/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('company.DetailController', ['$scope', 'Core', '$stateParams', DetailController]);

    function DetailController($scope, Core, $stateParams) {
        Core.Log.d("init");
        Core.Log.d($stateParams.data);
        var userId = $stateParams.data;
        var context = $scope;
        init();
        function init() {
            console.log("getUserDetail");
            Core.Api.getUserOilcardByUid(userId).then(function (response) {
                Core.Log.d(response);
                if (response.data) {
                    context.oilCards = response.data.oilcard;
                    var user = response.data.user;
                    if (user) {
                        context.name = user.uname;
                        context.phone = user.uphone;
                        context.plate = user.uemail;
                    }
                }

            });
        }


    }
})();