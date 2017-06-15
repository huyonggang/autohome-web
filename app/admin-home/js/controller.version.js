/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('version.ManageController', ['$scope', 'Core','Upload', ManageController]);

    function ManageController($scope, Core,Upload) {
        var context = $scope;
        var selectItem;
        var filename;
        context.onSelect=onSelect;
        context.onUpdate=onUpdate;
        var flag=0;
        init();

        function init() {
            Core.Log.d("init");
            Core.Log.d(Core.Data.get("aid"));

            Core.Api.getSoftVersionList().then(function (response) {
                Core.Log.d(response);
                var itemList = response.data;
                for(var i=0;i<itemList.length;i++){
                    if(itemList[i].softname=='0'){
                        itemList[i].softname="客户端";
                        itemList[i].flag=0;
                    }else{
                        itemList[i].softname="商户端";
                        itemList[i].flag=1;
                    }
                }
                context.itemList=itemList;
            });
        }

        function onUpdate() {
            Core.Api.saveSoftVersion(flag,filename,context.softversion,context.versioncode).then(function (response) {
                if (response.status == 0) {
                    init();
                } else {
                    Core.Notify.info("更新失败");
                }
            })
        }


        function onSelect(item) {
            selectItem = item;
            context.isprogress=false;
            context.isButton=true;
            context.state="点击上传";
            context.softname=item.softname;
            if(item.flag==0){
                flag=0;
            }else{
                flag=1;
            }
        }

        $scope.uploadImg = '';

        context.upload = function (file) {

            Upload.upload({
                url: Core.Const.NET.FILE_UPLOAD,
                data: {file: file,flag:flag}

            }).then(function (resp) {
                context.isprogress=false;
                context.isButton=true;
                context.state="上传完成";
                var response = resp.data;
                filename=response.data.fileName;
                Core.Log.d(filename);

            }, function (resp) {
                Core.Log.d('error');
                Core.Log.d(resp);
            }, function (evt) {
                context.isprogress=true;
                context.isButton=false;
                var vm=context.vm={};
                vm.value = parseInt(100*evt.loaded / evt.total);
                console.log('progress: ' + context.progress + '% ');
                Core.Log.d(evt);
            });
        };
    }
})();