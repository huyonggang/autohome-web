(function () {
    angular
        .module('app.core.component')
        .component('createCompany', {
            templateUrl: 'core/navigation/create-company.html',
            controller: CreateCompanyController,
            controllerAs: 'context',
            bindings: {
                onCompanyCreate: '&',
                onClickMask: '&'
            }
        });

    CreateCompanyController.$inject = ['$scope','Core'];

    function CreateCompanyController($scope,Core) {
        var context = this;
        init();

        function init() {
            
        }
    }
})();