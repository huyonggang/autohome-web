/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('oil-manager.ManageController', ['$scope', 'Core', ManageController]);

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

            Core.Api.getAllAdminGoods().then(function (response) {
                Core.Log.d(response);

                if (response.status == 0) {
                    if (response.data){
                        changeList(response.data)
                    }

                } else {
                    Core.Notify.info("更新失败");
                }
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
                Core.Api.deleteAdminGoods(Core.Data.get("aid"), item.typeid).then(function (response) {
                    if (response.status == 0) {
                        for (var i = 0; i < context.itemList.length; i++) {
                            if (context.itemList[i].typeid == item.typeid) {
                                context.itemList.splice(i, 1);
                            }
                        }
                        swal("删除成功！", "您已经永久删除了这条信息。", "success");
                    }
                })

            });
        }

        function onAdd() {
            Core.Api.addAdminGoods(Core.Data.get("aid"), context.name, context.price).then(function (response) {
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
            Core.Api.updateAdminGoods(Core.Data.get("aid"), selectItem.typeid,context.title, context.price).then(function (response) {
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
            context.title=selectItem.typename;
        }


        function changeList(itemList) {
            for(var i=0;i<itemList.length;i++){
                if(itemList[i].isrise==0){
                    itemList[i].isrise="持平";
                }else if(itemList[i].isrise==1){
                    itemList[i].isrise="上涨";
                }else if(itemList[i].isrise==-1){
                    itemList[i].isrise="下调";
                }
            }
            context.itemList = itemList;
        }



    }
})();