(function () {
    angular
        .module('app.core.component')
        .component('companyList', {
            templateUrl: 'core/navigation/company-list.html',
            controller: CompanyListController,
            controllerAs: 'context',
            bindings: {
                onCompanyChoose: '&',
                onClickMask: '&',
                list: '='
            }
        });

    CompanyListController.$inject = ['$scope', 'Core', '$state'];

    function CompanyListController($scope, Core, $state) {
        var context = this;
        context.imgSrcPrefix = 'asset/core/component/navigation/img';
        context.swipeLeft = swipeLeft;
        context.swipeRight = swipeRight;
        context.onCheckedOrg = onCheckedOrg;

        var orgRootId;
        var toast = {
            show: false,
            content: '',
            type:'',//success,error,alert
            path:'',
            duration:'',

            display: function (content,type) {
                toast.show = true;
                toast.content = content;
                toast.type = type;
            },

            hide: function () {
                toast.show = false;
                toast.content = '';
                toast.type = '';
            }
        };
        context.toast = toast;

        init();

        function init() {
            
            
        }

        function onCheckedOrg(item) {
            selectOrg(item.id);
            context.orgRootItem = item;
        }

        function selectOrg(orgId) {
            for (var i = 0; i < context.items.length; i++) {
                var item = context.items[i];
                if (item.logo != "") {
                    item.orgRootLogo = Core.Util.getImgUrl(item.logo);
                } else {
                    item.orgRootLogo = Core.Const.DATA.KEY_DEFAULT_ORG_LOGO;
                }
                item.selected = item.id == orgId;
            }
        }

        function swipeLeft() {
            Core.Log.d('left');
        }

        function swipeRight() {
            Core.Log.d('right');
        }
    }
})();