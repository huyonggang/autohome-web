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
        context.onDelete = onDelete;
        context.onAdd = onAdd;
        context.showAddDialog = showAddDialog;
        context.onUpdate = onUpdate;
        context.onSelect = onSelect;
        var filename;
        init();

        function init() {
            Core.Log.d("init");
            Core.Log.d(Core.Data.get("aid"));

            Core.Api.getAllAdminAdvertising().then(function (response) {
                Core.Log.d(response);
                context.itemList = response.data;
            });
        }

        function onUpdate(id) {

        }

        function onDelete(item) {
            swal({
                title: "您确定要删除这条信息吗",
                text: "删除后将无法恢复，请谨慎操作！",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "删除",
                closeOnConfirm: false
            }, function () {
                Core.Api.deleteAdminAdvertising(Core.Data.get("aid"), item.id).then(function (response) {
                    if (response.status == 0) {
                        for (var i = 0; i < context.itemList.length; i++) {
                            if (context.itemList[i].id == item.id) {
                                context.itemList.splice(i, 1);
                            }
                        }
                        swal("删除成功！", "您已经永久删除了这条信息。", "success");
                    } else {
                        Core.Notify.info("删除失败");
                    }
                })

            });
        }

        function onAdd() {
            Core.Api.addAdminAdvertising(Core.Data.get("aid"), context.title, filename,context.city,context.url).then(function (response) {
                if (response.status == 0) {
                    init();
                } else {
                    Core.Notify.info("添加失败");
                }
            })
        }


        function showAddDialog() {

            context.company = "";
            context.discount = "";
        }

        function onUpdate() {
            Core.Api.updateAdminAdvertising(Core.Data.get("aid"), selectItem.id, context.title, filename,context.city,context.url).then(function (response) {
                if (response.status == 0) {
                    init();
                } else {
                    Core.Notify.info("更新失败");
                }
            })
        }


        function onSelect(item) {
            selectItem = item;
            context.city=item.city;
            context.title=item.context;
            context.url=item.url;
            context.src=Core.Const.NET.IMG_RUL+item.picture;

        }

        $scope.uploadImg = '';

        context.upload = function (file) {

            Upload.upload({
                url: Core.Const.NET.IMG_UPLOAD,
                data: {file: file}

            }).then(function (resp) {
                var response = resp.data;
                filename=response.data.fileName
                context.src=Core.Const.NET.IMG_RUL+filename;
                Core.Log.d(response);

            }, function (resp) {
                Core.Log.d('error');
                Core.Log.d(resp);
            }, function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ');
                Core.Log.d(evt);
            });
        };
    }
})();