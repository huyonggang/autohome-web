(function () {
    angular
        .module('app.core.component')
        .component('page', {
            templateUrl: 'core/page/page.html',
            controller: PageController,
            controllerAs: 'context',
            bindings: {
                pageCount:'=',
                onClickPage:'&'
            }
        });

    PageController.$inject = ['Core'];

    function PageController(Core) {
        var context = this;

        context.onClickPrev = onClickPrev;
        context.onClickNext = onClickNext;
        context.onClickPageNumber = onClickPageNumber;

        init();

        Core.on(Core.Const.EVENT.ACTION_CLEAR_PAGE_DATA, function (event) {
            context.pageNumber = 1;
        });

        function init(){
            context.pageNumber = 1;
            Core.Log.d(context.pageCount)
        }

        function onClickPageNumber(pageNumber) {
            context.onClickPage({message:pageNumber});
            context.pageNumber = pageNumber;
            context.showPrev = pageNumber > 1;
        }

        function test() {
            context.pageCount = [1,2,3,4,5,6,7,8];
        }

        function onClickPrev() {
            context.pageNumber -= 1;
            context.onClickPage({message:context.pageNumber});
            if (context.pageNumber == 1) {
                context.showPrev = false;
            }
            context.showNext = true;
        }

        function onClickNext() {

            if (context.pageNumber < context.pageCount.length) {
                context.pageNumber += 1;
            }
            context.onClickPage({message:context.pageNumber});
        }
    }
})();