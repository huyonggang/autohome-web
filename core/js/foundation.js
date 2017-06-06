/**
 * Created by dd on 12/26/15.
 */
(function () {
    angular
        .module('app.core')
        .factory('Foundation', ['$rootScope', '$window', '$state', 'Util', 'Data', 'Message', Foundation]);

    function Foundation($rootScope, $window, $state, Util, Data, Message) {
        var locks = [];
        return {
            init: init,
            on: on,
            publish: publish,
            go: go,
            login: login,
            goHome: goHome
        };


        function init() {
            Core.Message.installMessageListener();
            Core.Message.postMessageActionRequestAuthData(function (data) {
                Core.Log.d('postMessageActionRequestAuthData callback');
                Core.Log.d(data);
                Core.Log.d(Data.isGuest());
                if (data && data.token && data.user) {
                    Data.clearAuthData();
                    Data.setToken(data.token);
                    Data.setUser(data.user);
                }
                else {
                    if (Data.isGuest() && $state.current && $state.current.name && !Util.canGuestVisit()) {
                        login();
                    }
                }
            });
        }

        function on(eventName, callback) {
            return $rootScope.$on(eventName, callback);
        }

        function publish(eventName, data) {
            return $rootScope.$broadcast(eventName, data);
        }

        function go(state,data) {
            var param = {
                data: data? data:''
            };

            $state.go(state, {data: data});
        }

        function login() {
            Data.clearAuthData();

            if (isInFrame()) {
                Message.postMessageActionRequestLogout();
            }
            else {
                $state.go('home.login');
            }
        }

        function goHome() {
            $state.go('entrance.welcome');
        }

        function isInFrame() {
            return $window.location !== $window.parent.location;
        }
    }
})();