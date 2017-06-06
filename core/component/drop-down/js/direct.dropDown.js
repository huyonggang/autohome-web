(function () {
    angular
        .module('app.core.component')
        .component('dropDown', {
            transclude: true,
            templateUrl: 'core/drop-down/drop-down.html',
            controller: DropDownController,
            controllerAs: 'context',
            bindings: {
                list: "=",
                onClickItem: "&",
                defaultContent: "="
            }
        });

    DropDownController.$inject = ['$scope','Core'];

    function DropDownController ($scope,Core) {
        var context = this;
        var component = $scope;

        init();
        
        function init() {
            getCompanyList();
        }
        
        function getCompanyList() {

            Core.Api.ORG.getAdminOrgList().then(function (response) {
                Core.Log.d('companyList');
                Core.Log.d(response);
                if (response.code == 0) {
                    component.items = response.data.org_root_list;
                    Core.Log.d(component.items);
                }
            });
        }
        
        component.clickItem = context.defaultContent ? {name:context.defaultContent} : {name:'点击选择'};

        component.onClickItem = function (item) {
            component.clickItem = item;
            context.onClickItem({item:item});
        }
    }
})();
