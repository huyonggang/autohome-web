angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("core/navigation/image-show.html","<div class=\"image-show-holder \" ng-click=\"onClickImg()\">\n    <img class=\"image animated fadeInDown\" ng-src=\"{{context.imageUrl}}\" >\n</div>");}]);
(function () {
    angular
        .module('app.core.component')
        .component('imageShow', {
            templateUrl: 'core/image-show/image-show.html',
            controller: ImageShowController,
            controllerAs: 'context',
            bindings: {
                onClickImg :'&',
                imageUrl : '='
            }
        });

    ImageShowController.$inject = ['$scope', '$rootScope', '$location', 'Core'];

    function ImageShowController($scope, $rootScope, $location, Core) {
        var context = this;
        
        $scope.onClickImg = function () {
            context.onClickImg();
        }
    }

})();