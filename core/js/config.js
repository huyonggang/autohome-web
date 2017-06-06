/**
 * Created by dd on 12/26/15.
 */
(function () {
    angular
        .module('app.core')
        .factory('Config', ['Const', Config]);

    function Config(Const) {

        var Core = {
            LOG_LEVEL: Const.SYSTEM.LOG_LEVEL_DEBUG,

            REIMB_TYPE: [
                {name: '办公用品', id: 1},
                {name: '招待费', id: 2},
                {name: '差旅费', id: 3},
                {name: '固定资产', id: 4},
                {name: '技术服务费', id: 5},
                {name: '快递费', id: 6},
                {name: '通讯费', id: 7},
                {name: '管理费', id: 8},
                {name: '制作费', id: 9},
                {name: '车辆费用', id: 10},
                {name: '会费', id: 11},
                {name: '餐补费', id: 12},
                {name: '通讯费', id: 13}
            ],
            LEAVE_TYPE: [
                {name: '事假', id: 1},
                {name: '病假', id: 2},
                {name: '婚假', id: 3},
                {name: '产假', id: 4},
                {name: '探亲假', id: 5},
                {name: '哺乳假', id: 6},
                {name: '年休假', id: 7},
                {name: '丧假', id: 8},
                {name: '护理假', id: 9},
                {name: '工伤假', id: 10},
                {name: '其他', id: 11}
            ],
            BUSINESS_TRIP_TYPE: [
                {name: '培训', id: 1},
                {name: '外出办公', id: 2},
                {name: '出差', id: 3},
                {name: '出席社会活动', id: 4},
                {name: '其他', id: 5}
            ],
            
            INPUT_TYPE: {
                REIMB_TYPE: [
                    {name: '话费', id: 1},
                    {name: '运费', id: 2},
                    {name: '住宿费', id: 3},
                    {name: '饭补', id: 4},
                    {name: '路飞', id: 5},
                    {name: '书费', id: 6},
                    {name: '水费', id: 7}
                ],
                LEAVE_TYPE: [
                    {name: '事假', id: 1},
                    {name: '病假', id: 2},
                    {name: '产假', id: 3},
                    {name: '其他', id: 4}
                ],
                STAMP_TYPE: [
                    {name: '公章', id: 1},
                    {name: '财务章', id: 2},
                    {name: '法人章', id: 3},
                    {name: '合同专用章', id: 4},
                    {name: '发票专用章', id: 5},
                    {name: '其他', id: 6}
                ],
                CAR_TYPE: [
                    {name: '用车类型1', id: 1},
                    {name: '用车类型2', id: 2},
                    {name: '用车类型3', id: 3},
                    {name: '用车类型4', id: 4},
                    {name: '其他', id: 5}
                ],
                GOODS_TYPE: [
                    {name: '纸巾', id: 1},
                    {name: '抹布', id: 2},
                    {name: '拖把', id: 3},
                    {name: '水桶', id: 4},
                    {name: '笔记本', id: 5},
                    {name: '笔', id: 6},
                    {name: '其他', id: 7}
                ],
                TRAIN_BUDGET_TYPE: [
                    {name: '预算内', id: 1},
                    {name: '预算外', id: 2}
                ],
                TRAIN_PAY_TYPE: [
                    {name: '公司全额承担', id: 1},
                    {name: '所在模块承担', id: 2},
                    {name: '公司全额承担', id: 3},
                    {name: '员工承担30%,公司承担70%', id: 4},
                    {name: '员工全额承担', id: 5}
                ]
            },

            DateFormatNoTime: 'Y/m/d',
            DateFormatNoYear: 'm-d H:i',
            DateFormat: 'Y.m.d H:i',

            ROUTE_LIST_GUEST_CAN_VISIT: ['hello', 'home#login', 'home#wx', 'home#route'],
            STATE_LIST_GUEST_CAN_VISIT: ['home.login', 'home.token'],
            LOGIN_ROUTE: 'home#login',
            WX_LOGIN_URL: 'http://sw-base-api.yuntick.com/wx/home-authorize',
            WX_LOGIN_REDIRECT_URL: 'http://sw-oa-client-h5.yuntick.com/welcome.html#!/wx',
            ROUTE_LIST_SHOW_MENU:['home#login', 'home#register', 'home#wx'],

            isInDebug: isInDebug,
            getContractBudgetName: getContractBudgetName,
            getContractTypeName: getContractTypeName,
            getAskForLeaveTypeName: getAskForLeaveTypeName,
            getReimbTypeName: getReimbTypeName,
            getBusinessTripTypeName: getBusinessTripTypeName,
            getStampTypeName: getStampTypeName,
            getCarTypeName: getCarTypeName,
            getGoodsTypeName: getGoodsTypeName,
        };
        return Core;

        function isInDebug() {
            return Core.LOG_LEVEL == Const.SYSTEM.LOG_LEVEL_DEBUG;
        }


        function getAskForLeaveTypeName(type) {
            for (var i = 0; i < Core.LEAVE_TYPE.length; i++) {
                var item = Core.LEAVE_TYPE[i];
                if (item.id == type) {
                    return item.name;
                }
            }
        }

        function getContractTypeName(type) {
            for (var i = 0; i < Core.INPUT_TYPE.TRAIN_PAY_TYPE.length; i++) {
                var item = Core.INPUT_TYPE.TRAIN_PAY_TYPE[i];
                if (item.id == type) {
                    return item.name;
                }
            }
        }
        
        function getContractBudgetName(type) {
            for (var i = 0; i < Core.INPUT_TYPE.TRAIN_BUDGET_TYPE.length; i++) {
                var item = Core.INPUT_TYPE.TRAIN_BUDGET_TYPE[i];
                if (item.id == type) {
                    return item.name;
                }
            }
        }

        function getReimbTypeName(type) {
            for (var i = 0; i < Core.REIMB_TYPE.length; i++) {
                var item = Core.REIMB_TYPE[i];
                if (item.id == type) {
                    return item.name;
                }
            }
        }

        function getBusinessTripTypeName(type) {
            for (var i = 0; i < Core.BUSINESS_TRIP_TYPE.length; i++) {
                var item = Core.BUSINESS_TRIP_TYPE[i];
                if (item.id == type) {
                    return item.name;
                }
            }
        }

        function getStampTypeName(type) {
            for (var i = 0; i < Const.APP.INPUT_TYPE.STAMP_TYPE.length; i++) {
                var item = Const.APP.INPUT_TYPE.STAMP_TYPE[i];
                if (item.id == type) {
                    return item.name;
                }
            }
        }

        function getCarTypeName(type) {
            for (var i = 0; i < Const.APP.INPUT_TYPE.CAR_TYPE.length; i++) {

                var item = Const.APP.INPUT_TYPE.CAR_TYPE[i];
                if (item.id == type) {
                    return item.name;
                }
            }
        }

        function getGoodsTypeName(type) {
            for (var i = 0; i < Const.APP.INPUT_TYPE.GOODS_TYPE.length; i++) {

                var item = Const.APP.INPUT_TYPE.GOODS_TYPE[i];
                if (item.id == type) {
                    return item.name;
                }
            }
        }
    }
})();