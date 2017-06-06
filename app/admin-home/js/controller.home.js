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