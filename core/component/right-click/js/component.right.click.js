(function () {
    angular
        .module('app.core.component')
        .directive( "contextMenu", function(){
            var TYPE_ADD=1;
            var TYPE_MODIFY=2;
            var TYPE_DEL=3;
            return {
                restrict: 'AE',
                scope: {
                    'onChoose': '&',
                    'options': '='
                },
                transclude: true,
                templateUrl: 'core/right-click/right-click.html',
                link: function( scope, elem, attr ){
                    console.log('link');
                    console.log(scope.options);
                    scope.visible = false;
                    console.log('-link');

                    scope.onChooseItem = function(type,e){
//                        e.preventDefault();
                        scope.visible = false;
                        scope.onChoose({type:type});
                    };

                    elem.on("contextmenu", function (e) {
                        e.preventDefault();
                        scope.visible = true;
                        console.log(scope.visible);
                        scope.left = event.clientX-5;
                        scope.top = event.clientY-5;

                        scope.$apply();

                    });
                    elem.on("mouseleave", function(e){
                        scope.visible = false;
                        scope.$apply();
                    });
                }
            }
        })
})();