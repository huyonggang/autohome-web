/**
 * Created by dd on 4/6/16.
 */
(function () {
    angular.module('app', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'app.core',
        'templates',
        'ngFileUpload',
        'ngDialog',
        '720kb.datepicker',
        'angular-sortable-view',
        'ui.bootstrap'
    ])
})();
/**
 * Created by dd on 4/6/16.
 */
(function () {
    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', configRoute])
        .config(['$sceDelegateProvider', configSce])
        .run(['Core', '$rootScope', '$state', '$ocLazyLoad', runCore])
        .config(['$locationProvider', configPro]);

    function configPro($locationProvider) {
        $locationProvider.hashPrefix('');
    }

    function configRoute($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
        //$urlRouterProvider.otherwise('entrance/welcome');
        $urlRouterProvider.otherwise('/login/login');
        $ocLazyLoadProvider.config({
            // Set to true if you want to see what and when is dynamically loaded
            debug: false
        });

        $ocLazyLoadProvider.config({
            modules: [
                {
                    name: 'component.navigation',
                    serie: true,
                    files: [
                        'asset/core/component/navigation/app.min.js',
                        'asset/core/component/navigation/style.min.css'
                    ]
                },
                {
                    name: 'entrance',
                    serie: true,
                    files: ['entrance/js/bundle.min.js', 'entrance/css/style.min.css']
                },
                {
                    name: 'home',
                    serie: true,
                    files: ['home/js/bundle.min.js', 'home/css/style.min.css']
                },
                {
                    name: 'login',
                    serie: true,
                    files: ['login/js/bundle.min.js', 'login/css/style.min.css']
                },
                {
                    name: 'admin',
                    serie: true,
                    files: ['admin-home/js/bundle.min.js', 'admin-home/css/style.min.css']
                },
                {
                    name: 'item',
                    serie: true,
                    files: ['item/js/bundle.min.js', 'item/css/style.min.css']
                },
                {
                    name: 'hello',
                    serie: true,
                    files: ['hello/js/bundle.min.js', 'hello/css/style.min.css']
                }
                ,
                {
                    name: 'recharge',
                    serie: true,
                    files: ['recharge/js/bundle.min.js', 'recharge/css/style.min.css']
                }
            ]
        });


        function appFiles(app) {
            return [
                {
                    files: [app + '/js/bundle.min.js', app + '/css/style.min.css']
                }
            ]
        }

        $stateProvider
            .state('entrance', {
                abstract: true,
                url: '/entrance',
                templateUrl: 'holder/template/holder.html',
                resolve: {
                    loadApp: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('entrance');
                    }]
                }
            })
            .state('entrance.welcome', {
                url: '/welcome',
                templateUrl: 'entrance/welcome.html',
                controller: 'entrance.WelcomeController'
            })


            .state('item', {
                abstract: true,
                url: '/item',
                templateUrl: 'holder/template/holder.html',
                resolve: {
                    loadApp: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('item');
                    }]
                }
            })
            .state('item.home', {
                url: '/home',
                templateUrl: 'item/home.html',
                controller: 'item.ItemHomeController'
            })



            .state('hello', {
                abstract: true,
                url: '/hello',
                templateUrl: 'holder/template/blank.html',
                resolve: {
                    loadApp: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('hello');
                    }]
                }
            })
            .state('hello.hello', {
                url: '/hello',
                templateUrl: 'hello/hello.html',
                controller: 'hello.HelloController',
            })

            .state('edit', {
                abstract: true,
                url: '/edit',
                templateUrl: 'holder/template/blank.html',
                resolve: {
                    loadApp: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('edit');
                    }]
                }
            })
            .state('edit.process', {
                url: '/process',
                templateUrl: 'edit/edit-process.html',
                controller: 'edit.EditProcessController'
            })
            .state('edit.list', {
                url: '/list',
                templateUrl: 'edit/edit-list.html',
                controller: 'edit.EditListController'
            })
            .state('edit.test', {
                url: '/test',
                templateUrl: 'edit/test.html',
                controller: 'edit.test'
            })
            .state('recharge', {
                abstract: true,
                url: '/recharge',
                templateUrl: 'holder/template/holder.html',
                resolve: {
                    loadApp: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('recharge');
                    }]
                }
            })

            .state('recharge.manage', {
                abstract: true,
                url: '/manage',
                templateUrl: 'recharge/recharge-manage.html',
                controller: 'recharge.ManageController'
            })

            .state('login', {
                abstract: true,
                url: '/login',
                templateUrl: 'holder/template/blank.html',
                resolve: {
                    loadApp: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('login');
                    }]
                }
            })
            .state('login.login', {
                url: '/login',
                templateUrl: 'login/login.html',
                controller: 'login.LoginController'
            })


            .state('admin', {
                abstract: true,
                url: '/admin',
                templateUrl: 'holder/template/holder.html',
                resolve: {
                    loadApp: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('admin');
                    }]
                }
            })
            .state('admin.recharge', {
                url: '/recharge',
                templateUrl: 'admin-home/recharge-manage.html',
                controller: 'recharge.ManageController'
            })

            .state('admin.merchant', {
                url: '/merchant',
                templateUrl: 'admin-home/merchant.html',
                controller: 'merchant.ManageController'
            })
            .state('admin.merchant-detail', {
                url: '/merchant-detail?data',
                templateUrl: 'admin-home/merchant-detail.html',
                controller: 'merchant.DetailController'
            })
            .state('admin.user',{
                url: '/user',
                templateUrl: 'admin-home/user.html',
                controller: 'user.ManageController'
            })
            .state('admin.user-detail',{
                url: '/user-detail?data',
                templateUrl: 'admin-home/user-detail.html',
                controller: 'user.DetailController'
            })
            .state('admin.withdraw',{
                url: '/withdraw',
                templateUrl: 'admin-home/withdraw.html',
                controller: 'withdraw.ManageController'
            })
            .state('admin.discount',{
                url: '/discount',
                templateUrl: 'admin-home/discount.html',
                controller: 'discount.ManageController'
            })
            .state('admin.advertising',{
                url: '/advertising',
                templateUrl: 'admin-home/advertising.html',
                controller: 'advertising.ManageController'
            })
            .state('admin.oil-manager',{
                url: '/oil-manager',
                templateUrl: 'admin-home/oil-manager.html',
                controller: 'oil-manager.ManageController'
            })
            .state('admin.invoice',{
                url: '/invoice',
                templateUrl: 'admin-home/invoice.html',
                controller: 'invoice.ManageController'
            })




    }

    function configSce($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            'http://*.yuntick.com/**',
            'http://localhost:*/**'
        ]);

        $sceDelegateProvider.resourceUrlBlacklist([]);
    }

    function runCore(Core, $rootScope, $state, $ocLazyLoad) {
        $rootScope.$state = $state;
        Core.$state = $state;
        Core.init();
        Core.on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            // if (Core.Data.isGuest() && toState.name != 'login')
            // {
            //     Core.$timeout(function () {
            //         Core.$state.go('login');
            //     });
            // }
            $rootScope.toStateName = toState.name ? toState.name : "";
        });

        $ocLazyLoad.load('component.navigation');
    }
})();
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