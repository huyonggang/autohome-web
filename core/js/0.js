/**
 * Created by dd on 12/25/15.
 */

(function () {
    angular.module("templates", []);
})();

(function () {
    angular
        .module('app.core', ['LocalStorageModule', 'ui-notification']);

    angular
        .module('app.core')
        .config(['NotificationProvider', configNotification]);

    function configNotification(NotificationProvider) {
        NotificationProvider.setOptions({
            delay: 3000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'center',
            positionY: 'top'
        });
    }

    angular
        .module('app.core')
        .factory('Core', ['$rootScope', '$window', '$document', '$timeout', '$interval', '$q', '$state', 'Notification', 'Foundation', 'Config', 'Const', 'Log', 'Util', 'Data', 'Api', 'UserApi', 'Message', 'ngDialog', Core]);

    function Core($rootScope, $window, $document, $timeout, $interval, $q, $state, Notification, Foundation, Config, Const, Log, Util, Data, Api, UserApi, Message,EventBus, ngDialog) {
        var Core = {
            init: Foundation.init,
            on: Foundation.on,
            publish: Foundation.publish,
            go: Foundation.go,
            goHome: Foundation.goHome,
            login: Foundation.login,

            $rootScope: $rootScope,
            $window: $window,
            $document: $document,
            $timeout: $timeout,
            $interval: $interval,
            $q: $q,
            $state: $state,

            Notify: Notification,
            NgDialog: ngDialog,

            Foundation: Foundation,
            Config: Config,
            Const: Const,
            Log: Log,
            Util: Util,
            Data: Data,
            Api: Api,
            UserApi: UserApi,
            Message: Message
        };

        $window.Core = Core;
        return Core;
    }


})();

(function () {
    angular
        .module('app.core.component', []);
})();



