/**
 * Created by dd on 4/6/16.
 */
(function () {
    angular
        .module('app')
        .controller('LayoutController', ['$scope', '$stateParams', 'Core', LayoutController]);


    function LayoutController($scope, $stateParams, Core) {
        var context = $scope;

        Core.$rootScope.dialogOpenStatus = false;
        
        context.app = {
            settings: {
                asideFolded: false,
                showBrowserTip: 0
            }
        };

        context.test = 'layout';
        
        getIEVersion();

        function getIEVersion()
        {
            var ieVersion = getIE();
            if (angular.isNumber(ieVersion) && ieVersion <= 8)
            {
                context.app.settings.showBrowserTip = 1;
            }
        }
        
        function getIE(){
            if (!!navigator.userAgent.match(/MSIE/i))
            {
                var v = navigator.userAgent.match(/MSIE ([^;]+)/)[1];
                return parseFloat(v.substring(0, v.indexOf(".")))
            }
            return false;
        }

        
    }

})();