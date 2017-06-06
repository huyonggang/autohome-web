/**
 * Created by dd on 4/13/16.
 */
(function () {
    angular
        .module('app.core')
        .factory('UserApi', ['$http', '$q', 'Data', 'Const', 'Util', 'Config', 'Foundation', Api]);

    function Api($http, $q, Data, Const, Util, Config, Foundation) {
        var apiList = {
            User: {
                login: ['user/login', 'phone', 'password'],
                logout: ['user/logout'],
                updatePassword: ['user/update-password', 'old_password', 'password']
            },
            ORG: {
                getOrgList: ['org/org-root-list']
            },
            Auth: {
                hasAuthOAOfAnyOrgRoot: ['auth/auth-oa-check']
            }
        };

        var api = {};
        for (var moduleKey in apiList)
        {
            var moduleApiList = apiList[moduleKey];
            api[moduleKey] = {};
            for (var functionName in moduleApiList)
            {
                var config = moduleApiList[functionName];
                api[moduleKey][functionName] = (function (config) {
                    return function () {
                        var action = config[0];
                        var data = {};
                        if (config.length > 1)
                        {
                            for (var i = 1; i < config.length; i++)
                            {
                                var key = config[i];
                                var value = arguments[i - 1];
                                if (value === undefined)
                                {
                                    continue;
                                }
                                data[key] = value;
                            }
                        }
                        return post(action, data);
                    };
                })(config);
            }
        }

        return api;


        function transformObjectToUrlencodedData(obj) {
            var p = [];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    p.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
                }
            }
            return p.join('&');
        }

        function post(api, data) {
            var token = Data.getToken();
            var url = Const.NET.END_POINT_USER + '/' + api + '?token=' + token + '&client=' + Const.NET.CLIENT + '&version=' + Const.NET.VERSION + '&';
            Log.d(url + transformObjectToUrlencodedData(data));
            return $http({
                method: 'POST',
                url: url,
                data: transformObjectToUrlencodedData(data),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
            }).then(function (response) {
                if (response.data.hasOwnProperty('code') && response.data.code == Const.ERROR.ERROR_TOKEN_INVALID) {
                    Data.clearAuthData();
                    Foundation.login();
                }

                if (response.data.code == 0)
                {
                    return response.data.data;
                }

                if (response.data.hasOwnProperty('code'))
                {
                    return $q.reject({
                        code: response.data.code,
                        message: response.data.message
                    })
                }

                return $q.reject({
                    code: Const.ERROR.ERROR_NETWORK,
                    response: response
                });
            }, function (reason) {
                return {
                    code: Const.ERROR.ERROR_NETWORK,
                    response: reason
                }
            });
        }
    }

})();    