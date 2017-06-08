/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('login.LoginController', ['$scope', 'Core', hLoginController]);

    function hLoginController($scope, Core) {
        var context = $scope;
        console.log("hLoginController init");
        context.login = login;

        function login() {
            console.log("login");
            Core.Api.login(context.name,context.password).then(function(response){
                Core.Log.d(response);
                console.log(response);
                if(response.status==0){
                    Core.Notify.info("登录成功");
                    Core.Data.set("aid",response.data.aid);
                    Core.Data.set();
                    Core.go('admin.user');
                }else{
                    Core.Notify.info("用户名或密码错误");
                }
            });
        }


    }
})();
