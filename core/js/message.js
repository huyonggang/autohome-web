/**
 * Created by dd on 4/7/16.
 */

(function(){
    angular
        .module('app.core')
        .factory('Message', ['$window', Message]);

    function Message($window) {

        const EVENT_ACTION_REQUEST_GO_HOME = 1;

        const EVENT_ACTION_REQUEST_AUTH_DATA = 2;
        const EVENT_ACTION_RESPONSE_AUTH_DATA = 10002;

        const EVENT_ACTION_REQUEST_LOGOUT = 3;

        var messageCount = 0;
        var callbackMap = {};

        return {
            installMessageListener: installMessageListener,

            postMessageActionRequestGoHome: postMessageActionRequestGoHome,
            postMessageActionRequestAuthData: postMessageActionRequestAuthData,
            postMessageActionRequestLogout: postMessageActionRequestLogout,

        };

        function installMessageListener() {
            $window.addEventListener("message", function (event) {
                var data = event.data;
                if (data.hasOwnProperty('action'))
                {
                    var action = data.action;
                    switch (action)
                    {
                        // client side
                        case EVENT_ACTION_RESPONSE_AUTH_DATA:
                            processActionResponseAuthData(event);
                            break;
                    }


                }
            }, false);
        }



        // client side post
        
        function postMessage(message, callback) {
            messageCount++;
            var messageId = messageCount;
            message.id = messageId;
            if ($window.location !== $window.parent.location)
            {
                $window.parent.postMessage(message, '*');

                if (callback instanceof Function)
                {
                    callbackMap[messageId] = callback;
                }
            }
            else
            {
                callback();
            }
        }
        
        function postMessageActionRequestGoHome() {
            postMessage({
                action: EVENT_ACTION_REQUEST_GO_HOME
            });
        }
        
        function postMessageActionRequestAuthData(callback) {
            postMessage({
                action: EVENT_ACTION_REQUEST_AUTH_DATA
            }, callback);
        }

        function postMessageActionRequestLogout() {
            postMessage({
                action: EVENT_ACTION_REQUEST_LOGOUT
            });
        }


        // client side process
        function processActionResponseAuthData(event) {
            var messageId = event.data.id;
            if (callbackMap.hasOwnProperty(messageId) && callbackMap[messageId] instanceof Function)
            {
                callbackMap[messageId](event.data.data);
            }
        }
    }
})();