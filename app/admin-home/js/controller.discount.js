/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('discount.ManageController', ['$scope', 'Core', ManageController]);

    function ManageController($scope, Core) {
        var context = $scope;
        var selectItem;
        context.onDelete = onDelete;
        context.onAdd = onAdd;
        context.showAddDialog = showAddDialog;
        context.onUpdate = onUpdate;
        context.onSelect=onSelect;
        init();

        function init() {
            Core.Log.d("init");
            Core.Log.d(Core.Data.get("aid"));

            Core.Api.getAllAdminOilcardtype().then(function (response) {
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
                Core.Api.deleteAdminOilcardtypeById(Core.Data.get("aid"), item.id).then(function (response) {
                    if (response.status == 0) {
                        for (var i = 0; i < context.itemList.length; i++) {
                            if (context.itemList[i].id == item.id) {
                                context.itemList.splice(i, 1);
                            }
                        }
                        swal("删除成功！", "您已经永久删除了这条信息。", "success");
                    }else{
                        Core.Notify.info("删除失败");
                    }
                })

            });
        }

        function onAdd() {
            Core.Api.saveAdminOilcardtype(Core.Data.get("aid"), context.company, context.discount).then(function (response) {
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
            Core.Api.updateAdminOilcardtype(Core.Data.get("aid"), selectItem.id,context.title, context.discount).then(function (response) {
                if (response.status == 0) {
                    init();
                } else {
                    Core.Notify.info("更新失败");
                }
            })
        }


        function onSelect(item) {
            context.updateDialog=true;
            selectItem = item;
            context.title=selectItem.oilcardname;
        }


    }
})();