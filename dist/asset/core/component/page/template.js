angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("core/navigation/page.html","<div class=\"page-holder\" ng-show=\"context.pageCount.length>1\">\n    <span class=\"prev m-link\" ng-if=\"context.pageNumber != 1\" ng-click=\"context.onClickPrev()\">&lt;</span>\n    <div style=\"display: inline\" class=\"m-default\" ng-repeat=\"page in context.pageCount track by $index\" ng-show=\"($index+1>context.pageCount.length-5&&context.pageNumber>context.pageCount.length-3)||($index<5&&context.pageNumber<4)||($index+1>context.pageNumber-3 && $index+1<context.pageNumber+3)\">\n                <span class=\"page m-link\" ng-class=\"{\'green\':page == context.pageNumber}\"\n                      ng-click=\"context.onClickPageNumber(page)\">{{page}}</span>\n    </div>\n    <span class=\"next m-link\" ng-if=\"context.pageNumber != context.pageCount.length\" ng-click=\"context.onClickNext()\">&gt;</span>\n    <span class=\"total-page m-default\">共 {{context.pageCount.length}} 页</span>\n    </span>\n</div>");}]);