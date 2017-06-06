(function () {
    angular
        .module('app.core.component')
        .component('invite', {
            templateUrl: 'core/navigation/invite.html',
            controller: InviteController,
            controllerAs: 'context',
            bindings: {
                onClickMask: '&'
            }
        });

    InviteController.$inject = ['$scope', 'Core'];

    function InviteController($scope, Core) {
        var context = this;
        Core.Log.d('companyList');
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

        context.barcodeSrc = Core.Const.DATA.KEY_DEFAULT_BARCODE;
        context.inviteCode = "......";

        Core.Api.ORG.getDefaultOrgRoot().then(function (response) {

            if (!response.id) {
                toast.display("获取默认公司失败", 'error');
                return;
            }

            context.orgRootId = response.id;
            context.type = '1';
            context.validTime = 24 * 60 * 60;
            createInvitation();
        });

        function createInvitation() {
            Core.Api.ORG.createInvitation(context.orgRootId, context.type, context.validTime).then(function (response) {

                Core.Log.d(response);

                if (response.code == 0) {
                    context.inviteCode = response.data.invitation.token;
                    Core.Log.d(response.data.invitation.token);
                    var barcodeUrl = Core.Const.NET.INVITE_URL_HEAD + response.data.invitation.token + Core.Const.NET.INVITE_URL_TAIL;
                    Core.Log.d(barcodeUrl);
                    Core.Log.d(context.barcodeSrc);
                    context.barcodeSrc = Core.Const.NET.CREATE_BARCODE + encodeURIComponent(barcodeUrl);
                    Core.Log.d(context.barcodeSrc);
                }
            });
        }

    }
})();