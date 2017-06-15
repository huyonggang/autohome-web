/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('advertising.ManageController', ['$scope', 'Core','Upload', ManageController]);

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
/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('company.DetailController', ['$scope', 'Core', '$stateParams', DetailController]);

    function DetailController($scope, Core, $stateParams) {
        Core.Log.d("init");
        Core.Log.d($stateParams.data);
        var userId = $stateParams.data;
        var context = $scope;
        init();
        function init() {
            console.log("getUserDetail");
            Core.Api.getUserOilcardByUid(userId).then(function (response) {
                Core.Log.d(response);
                if (response.data) {
                    context.oilCards = response.data.oilcard;
                    var user = response.data.user;
                    if (user) {
                        context.name = user.uname;
                        context.phone = user.uphone;
                        context.plate = user.uemail;
                    }
                }

            });
        }


    }
})();
/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('company.ManageController', ['$scope', 'Core', ManageController]);

    function ManageController($scope, Core) {
        var context = $scope;
        var page = 1;
        var number = 10;
        context.onSelect = onSelect;
        context.onSearch = onSearch;
        context.itemList = [];
        init();

        function init() {
            Core.Log.d("init");
            Core.Api.queryAllUser(1, page, number).then(function (response) {
                if (response.status == 0) {
                    var total=response.data.count;
                    showPage(total);
                    Core.Log.d(response);
                    context.itemList = response.data.data;
                }else{
                    Core.Notify.info("获取用户失败");
                }
            });
        }

        function onSelect(userId) {
            Core.Log.d("select company" + userId);
            Core.go('admin.company-detail', userId);
        }

        function onSearch() {
            Core.Api.queryUser(1, context.search).then(function (response) {
                Core.Log.d(response);
                if (response.status == 0) {
                    if (response.data) {
                        context.itemList = [];
                        context.itemList.push(response.data.data);
                    }else{
                        Core.Notify.info("未找到用户");
                    }

                }

            });
        }
        function showPage(total) {
            $('#callBackPager').extendPagination({

                totalCount: total,

                showCount: 10,

                limit: 10,

                callback: function (curr, limit, totalCount) {
                    Core.Log.d("totalCount " + totalCount);
                    Core.Api.queryAllUser(1, curr, limit).then(function (response) {
                        if (response.status == 0) {
                            Core.Log.d(response);
                            context.itemList = response.data.data;
                        }

                    });

                }

            });
        }




    }
})();
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
(function () {
    angular
        .module('app')
        .controller('adminHome', ['$q', '$scope', 'Core', AdminHomeController]);

    function AdminHomeController($q, $scope, Core) {
        var context = $scope;



        context.user = Core.Data.getUser();
        context.user.avatar = Core.Data.getAvatar(context.user.avatar);
        context.onClickCell = onClickCell;
        context.onClickBackground = onClickBackground;

        context.onClickBtn = onClickBtn;
        context.onClickPermit = onClickPermit;
        context.onClickReject = onClickReject;
        context.onClickLeave = onClickLeave;
        context.onClickTrip = onClickTrip;
        context.onClickReimb = onClickReimb;
        context.isShowNotify = false;

        var reimbStat;
        var leaveStat;
        var tripStat;

        context.onClickDetail = onClickDetail;
        Core.on(Core.Const.EVENT.EVENT_ORG_CHANGE, function (event, data) {
            init();
        });
        var orgRootId;
        var orgId;


        init();

        function onClickBackground() {
            context.showDetail = false;
        }

        function init() {
            
            context.leaveStat = {};
            context.reimbStat = {};
            context.tripStat = {};

            context.leaveData = [];
            context.tripData = [];
            context.reimbData = [];
            context.reimbDataY = [];
            context.leaveDataY = [];
            context.tripDataY = [];

            
            context.showDetail = false;
        }

        function getStat() {

            var time = new Date();
            var month = time.getMonth() + 1;
            Core.Log.d(month);

            var week = theWeek();
            Core.Log.d(week);

            Core.Api.STATISTICS.getApvAdmnLeaveStat(orgRootId).then(function (response) {
                Core.Log.d('请假');
                Core.Log.d(response);
                if (response.code == 0) {
                    leaveStat = response.data;
                    context.leaveStat.num = (leaveStat.month_stat[month]/100).toFixed(1);
                    if(month < 2 || leaveStat.month_stat[month-1] == 0 || leaveStat.month_stat[month] == 0) {
                        context.leaveStat.showLeaveStatContrast = false;
                    }
                    else {
                        context.leaveStat.showLeaveStatContrast = true;
                        if(leaveStat.month_stat[month]>leaveStat.month_stat[month-1]) {
                            context.leaveStat.leaveStatContrast =   ((leaveStat.month_stat[month]-leaveStat.month_stat[month-1])/leaveStat.month_stat[month-1]*100).toFixed(2);
                            context.leaveStat.up = true;
                            context.leaveStat.down = false;
                        }
                        else if(leaveStat.month_stat[month]<leaveStat.month_stat[month-1]) {
                            context.leaveStat.leaveStatContrast =   ((leaveStat.month_stat[month-1]-leaveStat.month_stat[month])/leaveStat.month_stat[month-1]*100).toFixed(2);
                            context.leaveStat.up = false;
                            context.leaveStat.down = true;
                        }
                        else {
                            context.leaveStat.leaveStatContrast = 0;
                            context.leaveStat.up = false;
                            context.leaveStat.down = flse;
                        }
                        if(context.leaveStatContrast == 0) {
                            context.leaveStat.up = false;
                            context.leaveStat.down = true;
                        }
                    }
                    var weekData = week;
                    
                    for (var i = 6; i > 0 ; i--) {
                        if(weekData < 1) {
                            break;
                        }
                        context.leaveData.push((leaveStat.week_stat[weekData]/100).toFixed(1));
                        context.leaveDataY.push('第' + weekData + '周');
                        weekData--;
                    }

                    context.leaveData.reverse();
                    context.leaveDataY.reverse();
                    
                    Core.publish('init-chart',{x:context.leaveData,y:context.leaveDataY,type: 1});
                }
            }, function (error) {
                Core.Log.d(error);
            });

            Core.Api.STATISTICS.getReimbStat(orgRootId).then(function (response) {
                Core.Log.d('报销');
                Core.Log.d(response);
                if (response.code == 0) {
                    reimbStat = response.data;
                    context.reimbStat.num = (reimbStat.month_stat[month]/100).toFixed(2);
                    if(month < 2 || reimbStat.month_stat[month-1] == 0 || reimbStat.month_stat[month] == 0) {
                        context.reimbStat.showReimbStatContrast = false;
                    }
                    else {
                        context.reimbStat.showReimbStatContrast = true;
                        if(reimbStat.month_stat[month]>reimbStat.month_stat[month-1]) {
                            context.reimbStat.reimbStatContrast =   (((reimbStat.month_stat[month]-reimbStat.month_stat[month-1])/reimbStat.month_stat[month-1])*100).toFixed(2);
                            context.reimbStat.up = true;
                            context.reimbStat.down = false;
                        }
                        else if(reimbStat.month_stat[month]<reimbStat.month_stat[month-1]) {
                            context.reimbStat.reimbStatContrast =   (((reimbStat.month_stat[month-1]-reimbStat.month_stat[month])/reimbStat.month_stat[month-1])*100).toFixed(2);
                            context.reimbStat.up = false ;
                            context.reimbStat.down = true ;
                        }
                        else {
                            context.reimbStat.reimbStatContrast = 0;
                            context.reimbStat.up = false ;
                            context.reimbStat.down = false ;
                        }
                        
                        if(context.reimbStat.reimbStatContrast == 0) {
                            context.reimbStat.up = false ;
                            context.reimbStat.down = false ;
                        }
                    }
                    var weekData = week;

                    for (var i = 6; i > 0 ; i--) {
                        if(weekData < 1) {
                            break;
                        }
                        context.reimbData.push(((reimbStat.week_stat[weekData])/100).toFixed(2));
                        context.reimbDataY.push('第' + weekData + '周');
                        weekData--;
                    }
                    context.reimbData.reverse();
                    context.reimbDataY.reverse();
                }
            }, function (error) {
                Core.Log.d(error);
            });

            Core.Api.STATISTICS.getTripStat(orgRootId).then(function (response) {
                Core.Log.d('外勤');
                Core.Log.d(response);
                if (response.code == 0) {
                    tripStat = response.data;
                    context.tripStat.num = tripStat.month_stat[month];
                    
                    if(month < 2 || tripStat.month_stat[month] == 0 || tripStat.month_stat[month-1] == 0) {
                        context.tripStat.showTripStatContrast = false;
                    }
                    else {
                        context.tripStat.showTripStatContrast = true;
                        
                        if(tripStat.month_stat[month] > tripStat.month_stat[month-1]) {
                            context.tripStat.tripStatContrast = ((tripStat.month_stat[month]-tripStat.month_stat[month-1])/tripStat.month_stat[month-1]*100).toFixed(1);
                            context.tripStat.up = true;
                            context.tripStat.down = false;
                        }
                        else if(tripStat.month_stat[month] < tripStat.month_stat[month-1]) {
                            context.tripStat.tripStatContrast = ((tripStat.month_stat[month-1]) - tripStat.month_stat[month]/tripStat.month_stat[month-1]*100).toFixed(1);
                            context.tripStat.up = false;
                            context.tripStat.down = true;
                        }
                        else {
                            context.tripStat.tripStatContrast = 0;
                            context.tripStat.up = false;
                            context.tripStat.down = false;                       
                        }
                        
                        if(context.tripStat.tripStatContrast == 0) {
                            context.tripStat.up = false;
                            context.tripStat.down = false;
                        }
                        
                    }
                    var weekData = week;
                    context.tripDataY = [];
                    for (var i = 6; i > 0 ; i--) {
                        if(weekData < 1) {
                            break;
                        }
                        context.tripData.push(tripStat.week_stat[weekData]);
                        context.tripDataY.push('第' + weekData + '周');
                        weekData--;
                    }
                    context.tripData.reverse();
                    context.tripDataY.reverse();
                }
            }, function (error) {
                Core.Log.d(error);
            });
        }

        function onClickLeave() {
            Core.publish('init-chart',{x:context.leaveData,y:context.leaveDataY,type:Core.Const.APP.TYPE.TYPE_ADMIN_LEAVE});
        }

        function onClickReimb() {
            Core.publish('init-chart',{x:context.reimbData,y:context.reimbDataY,type:Core.Const.APP.TYPE.TYPE_FIN_REIMB});
        }

        function onClickTrip() {
            Core.publish('init-chart',{x:context.tripData,y:context.tripDataY,type:Core.Const.APP.TYPE.TYPE_WORK_BUSINESS});
        }

        function onClickBtn(status, orgId, itemId, type) {
            switch (status) {
                case -1:
                    onClickBackground();
                    onClickReject(orgId, itemId, false, type);
                    break;
                case 0:
                    onClickBackground();
                    break;
                case 1:
                    onClickBackground();
                    onClickPermit(orgId, itemId, false, type);
                    break;
                default :
                    break;
            }
        }

        function onClickCell(index) {
            context.clickItem = context.apvList[index].data;
            context.showDetail = true;
        }

        function getApvList() {
            Core.Api.APV_MANAGE.getApvManageApprovePendingList(context.company.id, '', 1).then(function (response) {
                if (response.code == 0) {
                    var apvList = response.data.approve_pending_list;
                    context.apvList = getApvData(apvList);
                }
            }, function (error) {
            })
        }

        function getApvData(data) {
            var apvList = [];
            for (var i in data) {
                var item = {};
                item.userName = context.user.name;
                item.status = ' 待审批';
                item.creatTime = Core.Util.timeFormat(data[i].create_time);
                item.data = data[i];
                item.id = data[i].id;
                switch (data[i].apv_type) {
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_TEMPLATE:
                        item.name = data[i].template.name;
                        item.type = 999;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_ADMIN_LEAVE:
                        item.name = '请假';
                        item.type = 1;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_FIN_PAY:
                        item.name = '支付';
                        item.type = 2;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_FIN_REIMB:
                        item.name = '报销';
                        item.type = 3;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_HR_RECRUITMENT:
                        item.name = '招募';
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_WORK_BUSINESS:
                        item.name = '外勤';
                        item.type = 5;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_FIN_FUND:
                        item.name = '备用金申请';
                        item.type = 6;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_ADMIN_RES:
                        item.name = '';
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_ADMIN_RES_GOODS:
                        item.name = '物品申领';
                        item.type = 8;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_ADMIN_RES_STAMP:
                        item.name = '用印申请';
                        item.type = 9;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_ADMIN_RES_CAR:
                        item.name = '用车申请';
                        item.type = 10;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_CARD:
                        item.name = '名片申请';
                        item.type = 11;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_CONTRACT:
                        item.name = '合同';
                        item.type = 12;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_TRAIN:
                        item.name = '培训';
                        item.type = 13;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_REPORT:
                        item.name = '报告';
                        item.type = 14;
                        break;
                    case Core.Const.APP.APV_MANAGE.APV_TYPE_FIN_TRIP_REIMB:
                        item.name = '差旅费';
                        item.type = 15;
                        break;

                }
                apvList.push(item);
                if (i >= 4) {
                    break;
                }
            }
            return apvList;
        }

        function onClickDetail(item) {
            context.showDetail = true;
            if (item.itemType == 10999 || item.itemType == 999) {
                
                context.clickItem = item.apvItem;
                context.clickItem.apv_type = 999;
            }
            else {
                var itemDetail = {};
                itemDetail.isHome = true;

                if (item.apvItem.apv) {
                    itemDetail.org_id = item.apvItem.apv.org_id;
                    itemDetail.id = item.apvItem.apv.id;
                    itemDetail.org_root_id = item.apvItem.apv.org_root_id;
                    context.clickItem = itemDetail;
                    context.clickItem.apv_type = item.apvItem.apv.apv_type;
                }
                else {
                    itemDetail.org_id = item.apvItem.org_id;
                    itemDetail.id = item.apvItem.id;
                    itemDetail.org_root_id = item.apvItem.org_root_id;
                    context.clickItem = itemDetail;
                    context.clickItem.apv_type = item.apvItem.apv_type;
                }

            }
        }



        function onClickPermit(orgId, itemId, isStop, type, $event) {
            if (isStop) {
                $event.stopPropagation();
            }
            Core.Api.APV_MANAGE.permitApv(orgId, orgRootId, itemId, type, '同意').then(function (response) {
                if (response.code == 0) {
                    context.onItem = false;
                    context.onApprove = false;
                    getApvList();
                    // setList();
                    Core.Notify.success('操作成功');
                }
            }, function (reason) {
                Core.Notify.error('操作失败');
            });
        }

        function onClickReject(orgId, itemId, isStop, type, $event) {
            if (isStop) {
                $event.stopPropagation();
            }
            Core.Api.APV_MANAGE.rejectApv(orgId, orgRootId, itemId, type, '不同意').then(function (response) {
                if (response.code == 0) {
                    context.onItem = false;
                    context.onApprove = false;
                    getApvList();
                    // setList();
                    Core.Notify.success('操作成功');
                }
            }, function (reason) {
                Core.Notify.error('操作失败');
            });
        }

        function theWeek() {
            var totalDays = 0;
            var now = new Date();
            var years = now.getYear()
            if (years < 1000) {
                years += 1900;
            }
            var days = new Array(12);
            days[0] = 31;
            days[2] = 31;
            days[3] = 30;
            days[4] = 31;
            days[5] = 30;
            days[6] = 31;
            days[7] = 31;
            days[8] = 30;
            days[9] = 31;
            days[10] = 30;
            days[11] = 31;
            if (Math.round(now.getYear() / 4) == now.getYear() / 4) {
                days[1] = 29
            } else {
                days[1] = 28
            }
            if (now.getMonth() == 0) {
                totalDays = totalDays + now.getDate();
            } else {
                var curMonth = now.getMonth();
                for (var count = 1; count <= curMonth; count++) {
                    totalDays = totalDays + days[count - 1];
                }
                totalDays = totalDays + now.getDate();
            }
            var week = Math.round(totalDays / 7);
            return week;
        }
    }
})();
/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('invoice.ManageController', ['$scope', 'Core', ManageController]);

    function ManageController($scope, Core) {
        var context = $scope;
        var page = 1;
        var number = 8;
        var status = 0;
        context.group=true;
        context.itemList = [];
        init();
        function init() {
            Core.Log.d("init");
            Core.Api.getUserInvoiceList(status,page, number).then(function (response) {
                Core.Log.d(response);
                if (response.status == 0) {
                    Core.Log.d(response);
                    if (response.data.data) {
                        changeList(response.data.data)
                    }
                    var total = response.data.count;
                    showPage(total);
                } else {
                    Core.Notify.info("获取失败");
                }
            });
        }

        context.rechargeSuccess = function (item) {
            Core.Log.d("Success");
            Core.Api.updateUserInvoiceStatus(Core.Data.get("aid"),item.id,1).then(function (response) {
                if (response.status == 0) {
                    Core.Notify.info("操作成功");
                    init();
                } else {
                    Core.Notify.info("操作失败");
                }
            });
        }

        context.rechargeError = function (item) {
            Core.Log.d("Success");
            Core.Api.updateUserInvoiceStatus(Core.Data.get("aid"),item.id,2).then(function (response) {
                if (response.status == 0) {
                    Core.Notify.info("操作成功");
                    init();
                } else {
                    Core.Notify.info("操作失败");
                }
            });
        }




        function changeList(itemList) {
            for (var i = 0; i < itemList.length; i++) {
                if (itemList[i].status == 0) {
                    itemList[i].status = "未开";
                } else if (itemList[i].status == 1) {
                    itemList[i].status = "已开";
                } else if (itemList[i].status == 2) {
                    itemList[i].status = "拒开";
                }
            }
            context.itemList = itemList;
        }

        context.check0 = function () {
            status=0;
            context.group=true;
            init();
        }
        context.check1 = function () {
            status=1;
            context.group=false;
            init();
        }
        context.check2 = function () {
            status=2;
            context.group=false;
            init();
        }

        function showPage(total) {
            $('#callBackPager').extendPagination({

                totalCount: total,

                showCount: 10,

                limit: 10,

                callback: function (curr, limit, totalCount) {
                    Core.Log.d("totalCount " + totalCount);
                    Core.Api.getUserInvoiceList(status,curr, limit).then(function (response) {
                        Core.Log.d(response);
                        if (response.status == 0) {
                            Core.Log.d(response);
                            if (response.data.data) {
                                changeList(response.data.data)
                            }
                        } else {
                            Core.Notify.info("获取失败");
                        }
                    });

                }

            });
        }
    }
})();
/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('merchant.DetailController', ['$scope', 'Core','$stateParams', DetailController]);

    function DetailController($scope, Core,$stateParams) {
        var context = $scope;
        Core.Log.d("init");
        Core.Log.d($stateParams.data);
        var merId = $stateParams.data;
        init();
        function init() {
            console.log("getUserDetail");
            Core.Api.getMerchantBankCard(merId).then(function (response) {
                Core.Log.d(response);
                if (response.data) {
                    context.bankCards = response.data.merchantbankcard;
                    context.goods = response.data.merchantgoods;
                    var merchant = response.data.merchant;
                    if (merchant) {
                        context.name = merchant.mname;
                        context.tel = merchant.tel;
                        context.address = merchant.maddress;
                        context.logo=Core.Const.NET.IMG_RUL+merchant.mavitor;
                        context.license=Core.Const.NET.IMG_RUL+merchant.businesslicense;
                    }
                }

            });
        }


    }
})();
/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('merchant.ManageController', ['$scope', 'Core', ManageController]);

    function ManageController($scope, Core) {
        var context = $scope;
        var page = 1;
        var number = 10;
        context.onSelect = onSelect;
        init();
        function init() {
            Core.Log.d("init");
            Core.Api.queryAllMerchant(page, number).then(function (response) {
                Core.Log.d(response);
                if (response.status==0){
                    if(response.data.data){
                        for(var i=0;i<response.data.data.length;i++){
                            if(response.data.data[i].tel=="[]"){
                                response.data.data[i].tel="无";
                            }
                        }
                        context.itemList = response.data.data;
                    }
                    var total = response.data.count;
                    showPage(total);
                }
                else{
                    Core.Notify.info("获取商户失败");
                }

            });
        }

        function onSelect(merId) {
            Core.Log.d("select mer"+merId);
            Core.go('admin.merchant-detail',merId);
        }

        context.onSearch=function (){
            Core.Api.queryMerchantByName(context.name,1, 1).then(function (response) {
                Core.Log.d(response);
                if (response.status==0){
                    if(response.data.data){
                        for(var i=0;i<response.data.data.length;i++){
                            if(response.data.data[i].tel=="[]"){
                                response.data.data[i].tel="无";
                            }
                        }
                        context.itemList = response.data.data;
                    }
                    var total = response.data.count;
                    showPage(total);
                }
                else{
                    Core.Notify.info("获取商户失败");
                }

            });
        }

        function showPage(total) {
            $('#callBackPager').extendPagination({

                totalCount: total,

                showCount: 10,

                limit: 10,

                callback: function (curr, limit, totalCount) {
                    Core.Log.d("totalCount " + totalCount);
                    Core.Api.queryAllMerchant(curr, limit).then(function (response) {
                        Core.Log.d(response);
                        if (response.status==0){
                            if(response.data.data){
                                for(var i=0;i<response.data.data.length;i++){
                                    if(response.data.data[i].tel=="[]"){
                                        response.data.data[i].tel="无";
                                    }
                                }
                                context.itemList = response.data.data;
                            }
                        }
                        else{
                            Core.Notify.info("获取商户失败");
                        }

                    });

                }

            });
        }
    }
})();
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
            Core.Api.addAdminGoods(Core.Data.get("aid"), context.name, context.price,context.notice).then(function (response) {
                if (response.status == 0) {
                    init();
                } else {
                    Core.Notify.info("添加失败");
                }
            })
        }


        function showAddDialog() {
            context.name = "";
            context.price = "";
            context.notice = "";
        }

        function onUpdate() {
            Core.Api.updateAdminGoods(Core.Data.get("aid"), selectItem.typeid,context.title, context.price,context.notice).then(function (response) {
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
            context.price = selectItem.typeprice;
            context.notice = selectItem.notice;
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
/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('recharge.ManageController', ['$scope', 'Core', ManageController]);

    function ManageController($scope, Core) {
        var context = $scope;
        var page = 1;
        var number = 10;
        var status = 1;
        var selectItem;
        context.itemList = [];
        init();
        function init() {
            Core.Log.d("init");
            Core.Api.getUserOilcardSerialList(status, page, number).then(function (response) {
                Core.Log.d(response);
                if (response.status == 0) {
                    Core.Log.d(response);
                    if(response.data.data){
                        changeList(response.data.data)
                    }
                    var total=response.data.count;
                    showPage(total);
                }else{
                    Core.Notify.info("获取失败");
                }
            });
        }

        context.rechargeSuccess = function (item) {
            Core.Log.d("Success");
            Core.Api.updateUserOilcardSerialById(item.id,Core.Data.get("aid")).then(function (response) {
                if (response.status == 0) {
                    Core.Notify.info("操作成功");
                    init();
                }else{
                    Core.Notify.info("操作失败");
                }
            });
        }
        
        context.rechargeError = function (item) {
            
        }




        context.check2 = function () {
            status = 2;
            context.isRecharge=true;
            init();
        }

        context.check1 = function () {
            status = 1;
            context.isRecharge=false;
            init();
        }

        context.selectItem = function (item) {
            selectItem=item;
        }
        
        context.onRemark = function () {
            Core.Log.d("Success");
            Core.Api.updateUserOilcardSerialRemarkById(selectItem.id,Core.Data.get("aid"),context.remark).then(function (response) {
                if (response.status == 0) {
                    Core.Notify.info("操作成功");
                    init();
                }else{
                    Core.Notify.info("操作失败");
                }
            });
            
        }

        function changeList(itemList) {
            for(var i=0;i<itemList.length;i++){
                if(itemList[i].status==1){
                    itemList[i].status="未充值";
                }else if(itemList[i].status==2){
                    itemList[i].status="充值成功";
                }
            }
            context.itemList = itemList;
        }

        function showPage(total) {
            $('#callBackPager').extendPagination({

                totalCount: total,

                showCount: 10,

                limit: 10,

                callback: function (curr, limit, totalCount) {
                    Core.Api.getUserOilcardSerialList(status, curr, limit).then(function (response) {
                        Core.Log.d(response);
                        if (response.status == 0) {
                            Core.Log.d(response);
                            if(response.data.data){
                                changeList(response.data.data)
                            }
                        }else{
                            Core.Notify.info("获取失败");
                        }
                    });

                }

            });
        }

    }
})();
/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('user.DetailController', ['$scope', 'Core', '$stateParams', DetailController]);

    function DetailController($scope, Core, $stateParams) {
        Core.Log.d("init");
        Core.Log.d($stateParams.data);
        var userId = $stateParams.data;
        var context = $scope;
        init();
        function init() {
            console.log("getUserDetail");
            Core.Api.getUserOilcardByUid(userId).then(function (response) {
                Core.Log.d(response);
                if (response.data) {
                    context.oilCards = response.data.oilcard;
                    var user = response.data.user;
                    if (user) {
                        context.name = user.uname;
                        context.phone = user.uphone;
                        context.plate = user.uemail;
                    }
                }

            });
        }


    }
})();
/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('user.ManageController', ['$scope', 'Core', ManageController]);

    function ManageController($scope, Core) {
        var context = $scope;
        var page = 1;
        var number = 10;
        context.onSelect = onSelect;
        context.onSearch = onSearch;
        context.itemList = [];
        init();

        function init() {
            Core.Log.d("init");
            Core.Api.queryAllUser(0, page, number).then(function (response) {
                if (response.status == 0) {
                    var total=response.data.count;
                    showPage(total);
                    Core.Log.d(response);
                    context.itemList = response.data.data;
                }else{
                    Core.Notify.info("获取用户失败");
                }
            });
        }

        function onSelect(userId) {
            Core.Log.d("select user" + userId);
            Core.go('admin.user-detail', userId);
        }

        function onSearch() {
            Core.Api.queryUser(0, context.search).then(function (response) {
                Core.Log.d(response);
                if (response.status == 0) {
                    if (response.data) {
                        context.itemList = [];
                        context.itemList.push(response.data.data);
                    }else{
                        Core.Notify.info("未找到用户");
                    }

                }

            });
        }
        function showPage(total) {
            $('#callBackPager').extendPagination({

                totalCount: total,

                showCount: 10,

                limit: 10,

                callback: function (curr, limit, totalCount) {
                    Core.Log.d("totalCount " + totalCount);
                    Core.Api.queryAllUser(0, curr, limit).then(function (response) {
                        if (response.status == 0) {
                            Core.Log.d(response);
                            context.itemList = response.data.data;
                        }

                    });

                }

            });
        }




    }
})();
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
/**
 * Created by huyg on 2017/5/18.
 */
(function () {
    angular
        .module('app')
        .controller('withdraw.ManageController', ['$scope', 'Core', ManageController]);

    function ManageController($scope, Core) {
        var context = $scope;
        Core.publish(Core.Const.DATA.KEY_DEFAULT_NAVIGATION,'withdraw');
        context.itemList=[
            {
                id:'',
                bankcard:'6228480402564890018 ',
                bankname:'中国银行',
                name:'张三',
                money:'300.00',
                status:'提现成功'
            },
            {
                id:'',
                bankcard:'6228480402564890018 ',
                bankname:'中国银行',
                name:'张三',
                money:'300.00',
                status:'提现成功'
            },
            {
                id:'',
                bankcard:'6228480402564890018 ',
                bankname:'中国银行',
                name:'张三',
                money:'300.00',
                status:'提现成功'
            },
            {
                id:'',
                bankcard:'6228480402564890018 ',
                bankname:'中国银行',
                name:'张三',
                money:'300.00',
                status:'提现成功'
            },
            {
                id:'',
                bankcard:'6228480402564890018 ',
                bankname:'中国银行',
                name:'张三',
                money:'300.00',
                status:'提现成功'
            },
            {
                id:'',
                bankcard:'6228480402564890018 ',
                bankname:'中国银行',
                name:'张三',
                money:'300.00',
                status:'提现成功'
            },{
                id:'',
                bankcard:'6228480402564890018 ',
                bankname:'中国银行',
                name:'张三',
                money:'300.00',
                status:'提现成功'
            },{
                id:'',
                bankcard:'6228480402564890018 ',
                bankname:'中国银行',
                name:'张三',
                money:'300.00',
                status:'提现成功'
            }




        ];



    }
})();