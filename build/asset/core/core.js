/**
 * Created by dd on 12/25/15.
 */

(function () {
    angular.module("templates", []);
})();

(function () {
    angular
        .module('app.core', ['LocalStorageModule', 'ui-notification']);

    angular
        .module('app.core')
        .config(['NotificationProvider', configNotification]);

    function configNotification(NotificationProvider) {
        NotificationProvider.setOptions({
            delay: 3000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'center',
            positionY: 'top'
        });
    }

    angular
        .module('app.core')
        .factory('Core', ['$rootScope', '$window', '$document', '$timeout', '$interval', '$q', '$state', 'Notification', 'Foundation', 'Config', 'Const', 'Log', 'Util', 'Data', 'Api', 'UserApi', 'Message', 'ngDialog', Core]);

    function Core($rootScope, $window, $document, $timeout, $interval, $q, $state, Notification, Foundation, Config, Const, Log, Util, Data, Api, UserApi, Message,EventBus, ngDialog) {
        var Core = {
            init: Foundation.init,
            on: Foundation.on,
            publish: Foundation.publish,
            go: Foundation.go,
            goHome: Foundation.goHome,
            login: Foundation.login,

            $rootScope: $rootScope,
            $window: $window,
            $document: $document,
            $timeout: $timeout,
            $interval: $interval,
            $q: $q,
            $state: $state,

            Notify: Notification,
            NgDialog: ngDialog,

            Foundation: Foundation,
            Config: Config,
            Const: Const,
            Log: Log,
            Util: Util,
            Data: Data,
            Api: Api,
            UserApi: UserApi,
            Message: Message
        };

        $window.Core = Core;
        return Core;
    }


})();

(function () {
    angular
        .module('app.core.component', []);
})();




/**
 * Created by dd on 12/26/15.
 */
(function () {
    angular
        .module('app.core')
        .factory('Api', ['$http', '$q', 'Data', 'Const', 'Log', 'Util', 'Config', 'Foundation', Api]);

    function Api($http, $q, Data, Const, Log, Util, Config, Foundation) {
        return {
            login: function (phone, password) {
                return post(Const.NET.API.USER_LOGIN, {
                    aphone: phone,
                    apsd: password
                });
            },
            queryAllUser: function (type, page, num) {
                return post(Const.NET.API.USER_GET_LIST, {
                    currentpage: page,
                    pagenum: num,
                    type: type
                });
            },
            queryUser: function (type, account) {
                return post(Const.NET.API.USER_GET, {
                    account: account,
                    type: type
                });
            },
            queryAllMerchant: function (page, num) {
                return post(Const.NET.API.MERCHANT_GET_LIST, {
                    currentpage: page,
                    pagenum: num
                });
            },
            queryMerchantByName:function (name,page, num) {
                return post(Const.NET.API.MERCHANT_GET, {
                    name:name,
                    currentpage: page,
                    pagenum: num
                });
            },

            getUserOilcardByUid: function (id) {
                return post(Const.NET.API.USER_OIL_CARD, {
                    uid: id
                });

            },
            getMerchantBankCard: function (id) {
                return post(Const.NET.API.MERCHANT_BANK_CARD, {
                    mid: id
                });

            },
            getAllWithdrawals: function (page, num) {
                return post(Const.NET.API.WITHDRAW_GET_LIST, {
                    currentpage: page,
                    pagenum: num
                });

            },
            updateWithdrawalsCash: function (aid, wid, status) {
                return post(Const.NET.API.WITHDRAW_UPDATE, {
                    aid: aid,
                    wid: wid,
                    wstatus: status
                });

            },
            addAdminGoods: function (id, name, price,notice) {
                return post(Const.NET.API.GOODS_ADD, {
                    aid: id,
                    name: name,
                    price: price,
                    notice:notice
                });

            },
            deleteAdminGoods: function (aid, id) {
                return post(Const.NET.API.GOODS_DELETE, {
                    aid: aid,
                    typeid: id
                });

            },
            updateAdminGoods: function (aid, id, name, price,notice) {
                return post(Const.NET.API.GOODS_UPDATE, {
                    aid: aid,
                    typeid: id,
                    name: name,
                    price: price,
                    notice:notice
                });

            },
            getAllAdminGoods: function () {
                return post(Const.NET.API.GOODS_GET_LIST, {
                    pagenum: 1
                });

            },

            saveAdminOilcardtype: function (id, name, discount) {
                return post(Const.NET.API.OIL_CARD_ADD, {
                    aid: id,
                    oilcardname: name,
                    discount: discount
                });

            },
            updateAdminOilcardtype: function (aid, id, name, discount) {
                return post(Const.NET.API.OIL_CARD_UPDATE, {
                    aid: aid,
                    id: id,
                    oilcardname: name,
                    discount: discount
                });

            },
            getAllAdminOilcardtype: function () {
                return post(Const.NET.API.OIL_CARD_LIST, {
                    pagenum: 1
                });

            },
            deleteAdminOilcardtypeById: function (aid, id) {
                return post(Const.NET.API.OIL_CARD_DELETE, {
                    aid: aid,
                    id: id
                });
            },
            getUserOilcardSerialList: function (status, currentpage, pagenum) {
                return post(Const.NET.API.RECHARGE_LIST, {
                    status: status,
                    currentpage: currentpage,
                    pagenum: pagenum
                });
            },
            getUserInvoiceList: function (status,currentpage, pagenum) {
                return post(Const.NET.API.INVOICE_LIST, {
                    currentpage: currentpage,
                    pagenum: pagenum,
                    status:status
                });
            },
            updateUserInvoiceStatus: function (aid, id,status) {
                return post(Const.NET.API.INVOICE_UPDATE, {
                    aid: aid,
                    id: id,
                    status:status
                });
            },
            updateUserOilcardSerialById: function (id, aid) {
                return post(Const.NET.API.RECHARGE_ORDER, {
                    id: id,
                    aid: aid
                });
            },
            updateUserOilcardSerialRemarkById: function (id, aid,remark) {
                return post(Const.NET.API.RECHARGE_ORDER_REMARK, {
                    id: id,
                    aid: aid,
                    remarks:remark
                });
            },
            addAdminAdvertising: function (aid, context,picture,city,url) {
                return post(Const.NET.API.ADVERTISING_ADD, {
                    aid: aid,
                    context:context,
                    picture:picture,
                    city:city,
                    url:url
                });
            },
            getAllAdminAdvertising:function () {
                return post(Const.NET.API.ADVERTISING_LIST, {
                    pagenum: 1
                });
            },
            updateAdminAdvertising:function (aid,id,context,picture,city,url) {
                return post(Const.NET.API.ADVERTISING_UPDATE, {
                    aid:aid,
                    id: id,
                    context:context,
                    picture:picture,
                    city:city,
                    url:url
                });
            },
            deleteAdminAdvertising:function (aid,id) {
                return post(Const.NET.API.ADVERTISING_DELETE, {
                    aid:aid,
                    id: id,
                });
            },
            saveSoftVersion:function (flag,filename,version,versioncode) {
                return post(Const.NET.API.VERSION_UPDATE, {
                    flag:flag,
                    filename: filename,
                    version:version,
                    versioncode:versioncode
                });
            },
            getSoftVersionList:function () {
                return post(Const.NET.API.VERSION_LIST, {
                    flag:""
                });
            },
            deleteMerchantGoodByGid:function (aid,gid) {
                return post(Const.NET.API.MERCHANT_GOOD_DELETE, {
                    aid:aid,
                    gid:gid
                });
            },
            updateMerInfoNameByMid: function (aid,mid,mname) {
                    return post(Const.NET.API.MERCHANT_NAME_UPDATE, {
                        aid:aid,
                        mid:mid,
                        mname:mname
                    });
                },


        }

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
            var url = Const.NET.END_POINT + '/' + api;
            return $http({
                method: 'POST',
                url: url,
                data: transformObjectToUrlencodedData(data),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},

            }).then(function (response) {

                if (response.status == 200) {
                    return response.data;
                }

            }, function (reason) {
                return {
                    code: Const.ERROR.ERROR_NETWORK,
                    response: reason
                }
            });
        }


    }
})();
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
/**
 * Created by dd on 12/26/15.
 */
(function () {
    angular
        .module('app.core')
        .factory('Const', Const);

    function Const() {
        return {
            ERROR: {
                ALREADY_EXISTS: 6,
                INVALID_USER_NAME: 5,
                ERROR_PASSWORD: 3,
                ERROR_NETWORK: -10000,
                ERROR_INVALID: -1,
                ERROR_PARAM_NOT_SET: 1,
                ERROR_TOKEN_INVALID: 2,
                ERROR_LOGIN_FAIL: 3,
                ERROR_WRONG_PARAM: 4,
                ERROR_NOT_EXIST: 5,
                ERROR_EXIST: 6,
                ERROR_ORG_NOT_EXIST: 7,
                ERROR_ORG_MEMBER_NOT_EXISTS: 8,
                ERROR_REGISTER: 9,
                ERROR_USER_NOT_EXISTS: 10,
                ERROR_PHONE_HAS_BEEN_TAKEN: 11,
                ERROR_BIND_USER_BIND_EXISTS: 12,
                ERROR_WRONG_TYPE: 13,
                ERROR_SAVE_ERROR: 14,
                ERROR_ACTION_NOT_ALLOWED: 15,
                ERROR_WRONG_VERIFICATION_CODE: 16,
                ERROR_SEND_PHONE_VCODE_TOO_OFTEN: 17
            },

            SYSTEM: {
                LOG_LEVEL_ERROR: 1,
                LOG_LEVEL_WARN: 2,
                LOG_LEVEL_INFO: 3,
                LOG_LEVEL_TRACE: 4,
                LOG_LEVEL_DEBUG: 5
            },

            NET: {
                IMG_UPLOAD:"http://119.23.79.196/api/util/uploadAvitorAndroid",
                FILE_UPLOAD:"http://119.23.79.196/api/util/uploadAndroidAPK",
                IMG_RUL:"http://www.hzautomotive.com/picture/",
                END_POINT: 'http://39.108.1.8/api/admin',
                END_POINT_USER: 'http://sw-user-api.yuntick.com/public/1',
                END_POINT_ORG: 'http://sw-user-api.yuntick.com/public/1',
                //END_POINT: 'http://api-sw-oa/client/100',
                VERSION: 1,
                CLIENT: 2,

                FILE_UPLOAD_END_POINT: 'http://static.yuntick.com/api/file-upload/smartwork',
                FILE_URL_PREFIX: 'http://static.yuntick.com/smartwork/file/',

                IMG_UPLOAD_END_POINT: 'http://static.yuntick.com/api/img-upload/smartwork',
                IMG_URL_PREFIX: 'http://static.yuntick.com/smartwork/img/',
                CREATE_BARCODE: 'http://sw-oa-api.yuntick.com/res/qr?code=',
                INVITE_URL_HEAD: 'http://sw-oa-client-h5.yuntick.com/welcome.html?invite_token=',
                INVITE_URL_TAIL: '#!/receive-invite',

                API: {
                    // USER_LOGIN: 'user/login-as-admin',
                    USER_LOGIN: 'logonAdminByPhone',
                    USER_GET_LIST:"queryAllUser",
                    USER_GET:"queryUser",
                    MERCHANT_GET_LIST:"queryAllMerchant",
                    MERCHANT_GET:"queryMerchantByName",
                    MERCHANT_GOOD_DELETE:"deleteMerchantGoodByGid",
                    MERCHANT_NAME_UPDATE:"updateMerInfoNameByMid",
                    USER_OIL_CARD:"getUSerOilcardByUid",
                    MERCHANT_BANK_CARD:"getMerchantBankcardAndGoodsByMid",
                    WITHDRAW_GET_LIST:"getAllWithdrawals",
                    WITHDRAW_UPDATE:"updateWithdrawalsCash",
                    GOODS_ADD:"AddAdminGoodtype",
                    GOODS_DELETE:"deleteAdminGoodtype",
                    GOODS_UPDATE:"updateAdminGoodtype",
                    GOODS_GET_LIST:"getAllAdminGoodtype",
                    OIL_CARD_LIST:"getAllAdminOilcardtype",
                    OIL_CARD_UPDATE:"updateAdminOilcardtype",
                    OIL_CARD_ADD:"saveAdminOilcardtype",
                    OIL_CARD_DELETE:"deleteAdminOilcardtypeById",
                    RECHARGE_LIST:"getUserOilcardSerialList",
                    RECHARGE_ORDER:"updateUserOilcardSerialById",
                    RECHARGE_ORDER_REMARK:"updateUserOilcardSerialRemarkById",
                    ADVERTISING_ADD:"addAdminAdvertising",
                    ADVERTISING_UPDATE:"updateAdminAdvertising",
                    ADVERTISING_DELETE:"deleteAdminAdvertising",
                    ADVERTISING_LIST:"getAllAdminAdvertising",
                    INVOICE_LIST:"getUserInvoiceList",
                    INVOICE_UPDATE:"updateUserInvoiceStatus",
                    VERSION_LIST:"getSoftVersionList",
                    VERSION_UPDATE:"saveSoftVersion"
                }
            },
            APP: {
                DEFAULT_AVATOR: 'home/img/default-avatar.png',
                ADMIN: {
                    //operator_type
                    OPERATOR_TYPE_USER: 1,            //普通用户
                    OPERATOR_TYPE_ADMIN: 2,            //管理员
                    OPERATOR_TYPE_SYSTEM: 3             //系统
                },

                TYPE: {
                    TYPE_ADMIN_LEAVE: 1,           //行政-请假
                    TYPE_FIN_PAY: 2,           //财务-打款
                    TYPE_FIN_REIMB: 3,           //财务-报销
                    TYPE_HR_RECRUITMENT: 4,           //人力-招募
                    TYPE_WORK_BUSINESS: 5,           //工作-出差
                    TYPE_FIN_FUND: 6,           //财务备用金
                    TYPE_ADMIN_RES: 7,           //行政-资源申请
                    TYPE_ADMIN_RES_GOODS: 8,           //行政-资源申请-物品
                    TYPE_ADMIN_RES_STAMP: 9,           //行政-资源申请-用印
                    TYPE_ADMIN_RES_CAR: 10,           //行政-资源申请－用车
                    TYPE_CARD: 11,
                    TYPE_CONTRACT: 12,
                    TYPE_TRAIN: 13,
                    TYPE_REPORT: 14,
                    TYPE_FIN_TRIP_REIMB: 15,
                    TYPE_DAILY_JOURNAL: 16,
                    TYPE_WEEKLY_JOURNAL: 17,
                    TYPE_MONTHLY_JOURNAL: 18,
                    TYPE_SIGN_IN: 19,
                    TYPE_ORG: 20,
                    TYPE_NOTIFY: 21,
                    TYPE_TASK: 22,
                    TYPE_CONTACTS: 23
                },

                APV_MANAGE: {
                    APV_TYPE_ALL: 0,           //所有
                    APV_TYPE_ADMIN_LEAVE: 1,           //行政-请假
                    APV_TYPE_FIN_PAY: 2,           //财务-打款
                    APV_TYPE_FIN_REIMB: 3,           //财务-报销
                    APV_TYPE_HR_RECRUITMENT: 4,           //人力-招募
                    APV_TYPE_WORK_BUSINESS: 5,           //工作-出差
                    APV_TYPE_FIN_FUND: 6,           //财务备用金
                    APV_TYPE_ADMIN_RES: 7,           //行政-资源申请
                    APV_TYPE_ADMIN_RES_GOODS: 8,           //行政-资源申请-物品
                    APV_TYPE_ADMIN_RES_STAMP: 9,           //行政-资源申请-用印
                    APV_TYPE_ADMIN_RES_CAR: 10,           //行政-资源申请－用车
                    APV_TYPE_CARD: 11,
                    APV_TYPE_CONTRACT: 12,
                    APV_TYPE_TRAIN: 13,
                    APV_TYPE_REPORT:14,
                    APV_TYPE_FIN_TRIP_REIMB: 15,
                    APV_TYPE_TEMPLATE:999,
                    //获取列表
                    APV_STATUS_WAITING: 1,            //待审核
                    APV_STATUS_AGREED: 2,            //审核成功-同意
                    APV_STATUS_REJECTED: -1,           //审核成功-已拒绝
                    APV_STATUS_CANCEL: -2            //已取消
                },

                CONFIG: {
                    TYPE_MODULE_APV_ADMIN_CONTRACT: 20001,
                    TYPE_MODULE_APV_ADMIN_TRAINING: 20002,
                    TYPE_MODULE_APV_ADMIN_CARD: 20003
                },

                NOTIFY: {
                    TYPE_APV_INIT: 10000,        //返回收到的所有审批
                    TYPE_APV_ADMIN_LEAVE: 10001,
                    TYPE_APV_FIN_PAY: 10002,
                    TYPE_APV_FIN_REIMB: 10003,
                    TYPE_APV_HR_RECRUITMENT: 10004,
                    TYPE_APV_WORK_BUSINESS: 10005,
                    TYPE_APV_FIN_FUND: 10006,
                    TYPE_APV_ADMIN_RES: 10007,//should not be used generally, use specific type instead
                    TYPE_APV_ADMIN_RES_GOODS: 10008,
                    TYPE_APV_ADMIN_RES_STAMP: 10009,
                    TYPE_APV_ADMIN_RES_CAR: 10010,
                    TYPE_APV_ADMIN_CONTRACT: 10012,
                    TYPE_APV_ADMIN_TRAIN: 10013,
                    TYPE_APV_BUSINESS_CARD: 10011,
                    TYPE_APV_ADMIN_REPORT: 10014,
                    TYPE_APV_FIN_TRIP_REIMB: 10015,
                    TARGET_TYPE_ADMIN_TEMPLATE_ALL: 10999,

                    TYPE_APV_ACTION_INIT: 11000,
                    TYPE_APV_ACTION_PERMIT: 11001,
                    TYPE_APV_ACTION_REJECTED: 11002,
                    TYPE_APV_ACTION_TRANSFERRED: 11003,
                    TYPE_APV_ACTION_PUSH: 11004,

                    TYPE_APV_NOTIFY_INIT: 12000,
                    TYPE_APV_NOTIFY_NEW: 12001,
                    TYPE_APV_NOTIFY_ACTION: 12002,

                    TYPE_SUMMARY_INIT: 20000,        //返回收到的所有总结
                    TYPE_SUMMARY_DAILY: 20001,
                    TYPE_SUMMARY_WEEKLY: 20002,
                    TYPE_SUMMARY_MONTHLY: 20003,
                    TYPE_SUMMARY_COMMENT: 20004,

                    TYPE_APV_STATUS_WAITING: 30004,    //等待目标人审批

                    FROM_USER_TYPE_USER: 1,
                    FROM_USER_TYPE_ADMIN: 2,
                    FROM_USER_TYPE_SYSTEM: 3,

                    TO_USER_TYPE_SINGLE: 1,
                    TO_USER_TYPE_GROUP: 2,

                    SOURCE_TYPE_APV_INIT: 10000,
                    SOURCE_TYPE_APV_ADMIN_LEAVE: 10001,
                    SOURCE_TYPE_APV_FIN_PAY: 10002,
                    SOURCE_TYPE_APV_FIN_REIMB: 10003,
                    SOURCE_TYPE_APV_HR_RECRUITMENT: 10004,
                    SOURCE_TYPE_APV_WORK_BUSINESS: 10005,
                    SOURCE_TYPE_APV_FIN_FUND: 10006,
                    SOURCE_TYPE_APV_ADMIN_RES: 10007,//should not be used generally, use specific type instead
                    SOURCE_TYPE_APV_ADMIN_RES_GOODS: 10008,
                    SOURCE_TYPE_APV_ADMIN_RES_STAMP: 10009,
                    SOURCE_TYPE_APV_ADMIN_RES_CAR: 10010,

                    SOURCE_TYPE_APV_ACTION_INIT: 11000,
                    SOURCE_TYPE_APV_ACTION_PERMIT: 11001,
                    SOURCE_TYPE_APV_ACTION_REJECTED: 11002,
                    SOURCE_TYPE_APV_ACTION_TRANSFERRED: 11003,

                    SOURCE_TYPE_SUMMARY_INIT: 20000,
                    SOURCE_TYPE_SUMMARY_DAILY: 20001,
                    SOURCE_TYPE_SUMMARY_WEEKLY: 20002,
                    SOURCE_TYPE_SUMMARY_MONTHLY: 20003,
                    SOURCE_TYPE_SUMMARY_COMMENT: 20004
                },

                PROCESS: {
                    TYPE_PROCESS_DEFAULT: 10001,
                    TYPE_PROCESS_ADMIN_LEAVE: 10002,
                    TYPE_PROCESS_FIN_PAY: 10003,
                    TYPE_PROCESS_FIN_REIMB: 10004,
                    TYPE_PROCESS_HR_RECRUITMENT: 10005,
                    TYPE_PROCESS_WORK_BUSINESS: 10006,
                    TYPE_PROCESS_FIN_FUND: 10007,
                    TYPE_PROCESS_ADMIN_RES: 10008,//should not be used generally, use specific type instead
                    TYPE_PROCESS_ADMIN_RES_GOODS: 10009,
                    TYPE_PROCESS_ADMIN_RES_STAMP: 10010,
                    TYPE_PROCESS_ADMIN_RES_CAR: 10011,
                    TYPE_PROCESS_CARD: 10012,
                    TYPE_PROCESS_CONTRACT: 10013,
                    TYPE_PROCESS_TRAIN: 10014,
                    TYPE_PROCESS_REPORT: 10015,
                    TYPE_PROCESS_REIMB_TRIP: 10016,
                    TYPE_PROCESS_MODULE: 10999
                },

                WORK: {
                    TYPE_DAILY: 1,
                    TYPE_WEEKLY: 2,
                    TYPE_MONTHLY: 3
                },

                RES: {
                    RES_TYPE_ALL: 0,
                    RES_TYPE_GOODS: 1,
                    RES_TYPE_STAMP: 2,
                    RES_TYPE_CAR: 3
                },


                APV: {
                    //target
                    TARGET_TYPE_DEFAULT: 0,
                    TARGET_TYPE_ADMIN_LEAVE: 1,        //行政-请假
                    TARGET_TYPE_FIN_PAY: 2,            //财务-打款
                    TARGET_TYPE_FIN_REIMB: 3,          //财务-报销
                    TARGET_TYPE_HR_RECRUITMENT: 4,     //人力-招募
                    TARGET_TYPE_WORK_BUSINESS: 5,     //工作-出差
                    TARGET_TYPE_FIN_FUND: 6,     //财务-备用金
                    TARGET_TYPE_ADMIN_RES: 7,     //行政-资源申请
                    TARGET_TYPE_ADMIN_RES_GOODS: 8,     //
                    TARGET_TYPE_ADMIN_RES_STAMP: 9,
                    TARGET_TYPE_ADMIN_RES_CAR: 10,
                    TARGET_TYPE_CARD: 11,
                    TARGET_TYPE_CONTRACT: 12,
                    TARGET_TYPE_TRAIN: 13,
                    TARGET_TYPE_ADMIN_RES_REPORT: 14,
                    TARGET_TYPE_TRIP_REIMB: 15,
                    TARGET_TYPE_TEMPLATE: 999,

                    //进度查询接口中type字段：
                    ACTION_TYPE_AGREED: 1,             //同意
                    ACTION_TYPE_REJECTED: 2,           //回绝
                    ACTION_TYPE_TRANSFERRED: 3,      //被转让

                    //stutus
                    APV_STATUS_WAITING: 1,             //待审核
                    APV_STATUS_AGREED: 2,              //审核成功-同意
                    APV_STATUS_REJECTED: -1,           //审核成功-已拒绝
                    APV_STATUS_CANCEL: -2              //已取消
                },
                OPTIONS: {
                    DEPARTMENT_OPTIONS: [
                        {name: '添加部门', type: 10001},
                        {name: '修改名称', type: 10002},
                        {name: '删除部门', type: 10003},
                    ],
                    COMPANY_OPTIONS: [
                        {name: '修改名称', type: 11001},
                        {name: '添加部门', type: 11002}
                    ]
                },
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
                APV_ACTION_STATUS: {
                    WAITING: 0,
                    AGREED: 1,
                    REJECTED: 2,
                    TRANSFERRED: 3,
                    NOT_ALLOWED: -1
                }
            },

            DATA: {
                KEY_PREFIX: 'zhongodng.data.',
                KEY_TOKEN: 'token',
                KEY_USER: 'user'
            },

            EVENT: {
                ACTION_CLEAR_PAGE_DATA: 'clear-page-data',
                ACTION_CLICK_APV: 'action-click-apv'
            },

            ROOT_PARAM: {
                TO_STATE_NAME: 'contentToStateName'
            }
        }
    }

})();
/**
 * Created by dd on 12/26/15.
 */
(function () {
    angular
        .module('app.core')
        .factory('Data', ['$q', 'localStorageService', 'Const', 'Util', Data]);

    function Data($q, localStorageService, Const ,Util) {

        return {
            isGuest: isGuest,
            clearAuthData: clearAuthData,
            getToken: getToken,
            setToken: setToken,
            getUser: getUser,
            setUser: setUser,
            get: get,
            set: set,
            getSummaryDetail: getSummaryDetail,
            setSummaryDetail: setSummaryDetail,
            setPayDetail: setPayDetail,
            getPayDetail: getPayDetail,
            getDefaultJournalDetail:getDefaultJournalDetail,
            setDefaultJournalDetail:setDefaultJournalDetail,
            getName:getName,
            getAvatar:getAvatar,
            getEmail:getEmail,
            getOrgLogo:getOrgLogo,
            getContent:getContent,
            getMember: getMember,
            setMember: setMember,
            clearLocalData : clearLocalData,
            getExportUrl: getExportUrl,
            getDefaultOrgRoot: getDefaultOrgRoot
        };

        
        function getDefaultOrgRoot() {
            var root;
            root = Core.Data.get(Core.Const.DATA.KEY_ORG_ROOT);
            if (root) {
                return $q.resolve(root);
            }
            else {
                Core.UserApi.ORG.getOrgList().then(function (data) {
                    Core.Log.d(data);
                    Core.Data.set(Core.Const.DATA.KEY_ORG_ROOT,data.org_root_list[0]);
                    return $q.resolve(data.org_root_list[0]);
                }, function (error) {
                    return $q.reject(error);
                });
            }
        }

        function clearLocalData() {
            Core.Data.set(Core.Const.DATA.KEY_SETTING_CLICK_ITEM,{});
        }

        function getName(name)
        {
            return name?name:'未命名';
        }


        function getEmail(email)
        {
            return email? email : '未设置';
        }

        function getAvatar(img)
        {
            if(img == Core.Const.APP.KEY_DEFAULT_AVATAR){
                return img;
            }
            return img? Util.getImgUrl(img) : Core.Const.DATA.KEY_DEFAULT_AVATAR;
        }

        function getOrgLogo(img)
        {
            return img? Util.getImgUrl(img) : Core.Const.DATA.KEY_DEFAULT_ORG_LOGO;
        }

        function getContent(content) {
            return content ? content : '无';
        }

        function isGuest()
        {
            var token = getToken();
            return !token;
        }

        function getKey(key) {
            return Const.DATA.KEY_PREFIX + key;
        }

        function get(key) {
            key = getKey(key);
            return localStorageService.get(key);
        }

        function set(key, val) {
            key = getKey(key);
            return localStorageService.set(key, val);
        }

        function getToken() {
            var key = Const.DATA.KEY_TOKEN;
            return get(key);
        }

        function setToken(token) {
            var key = Const.DATA.KEY_TOKEN;
            return set(key, token);
        }

        function getUser() {
            var key = Const.DATA.KEY_USER;
            return get(key);
        }

        function setUser(user) {
            var key = Const.DATA.KEY_USER;
            return set(key, user);

        }

        function getSummaryDetail(summaryId) {
            var key = summaryId;
            key = getKey(key);
            return get(key);
        }

        function setSummaryDetail(summaryId, item) {
            var key = summaryId;
            key = getKey(key);
            set(key, item);
        }

        function setPayDetail(payId, item)
        {
            var key = Const.DATA.KEY_PAY_DETAIL + payId;
            set(key, item);
        }

        function getPayDetail(payId)
        {
            var key = Const.DATA.KEY_PAY_DETAIL + payId;
            return get(key);
        }

        function setDefaultJournalDetail(item)
        {
            var key = Const.DATA.KEY_DEFAULT_JOURNAL_DETAIL;
            set(key, item);
        }

        function getDefaultJournalDetail()
        {
            var key = Const.DATA.KEY_DEFAULT_JOURNAL_DETAIL;
            return get(key);
        }

        function setMember(item)
        {
            var key = Const.DATA.KEY_MEMBER;
            set(key, item);
        }

        function getMember()
        {
            var key = Const.DATA.KEY_MEMBER;
            return get(key);
        }

        function clearAuthData() {
            setToken('');
            setUser('');
            set(Const.DATA.KEY_ORG_ROOT, '');
            set(Const.DATA.KEY_ORG, '');
            set(Const.DATA.KEY_CLIENT_ORG_ROOT,'');
        }

        function getExportUrl(data) {
            var token = getToken();
            var url = Const.NET.END_POINT + '/' + Const.NET.API.APV_MANAGE_LIST_EXPORT + '?token=' + token + '&client=' + Const.NET.CLIENT + '&version=' + Const.NET.VERSION + '&';

            return (url + transformObjectToUrlencodedData(data));
        }

        function transformObjectToUrlencodedData(obj) {
            var p = [];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    p.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
                }
            }
            return p.join('&');
        }
    }

})();
/**
 * demo http://sparkalow.github.io/angular-truncate/
 * Created by dd on 12/26/15.
 */
(function () {
    angular
        .module('app.core')
        .filter('characters', characters)
        .filter('splitCharacters', splitCharacters)
        .filter('words', words)
        .filter('getImgUrl', ['Core', getImgUrl])
        .filter('getFileUrl', ['Core', getFileUrl])
        .filter('getFileTypeImg', ['Core', getFileTypeImg])
        //.filter('date', ['Core', date])
        .filter('numberFormat', ['Core', numberFormat])
        .filter('fileSizeFormat', ['Core', fileSizeFormat])
        .filter('emptyText', emptyText)
        .filter('showFileName', showFileName)
        .factory('filter', ['Util', 'Core', Filter]);

    function Filter(Util, Core) {
    }


    function characters() {
        return function (input, chars, breakOnWord) {
            if (isNaN(chars)) return input;
            if (chars <= 0) return '';
            if (input && input.length > chars) {
                input = input.substring(0, chars);

                if (!breakOnWord) {
                    var lastspace = input.lastIndexOf(' ');
                    //get last space
                    if (lastspace !== -1) {
                        input = input.substr(0, lastspace);
                    }
                } else {
                    while (input.charAt(input.length - 1) === ' ') {
                        input = input.substr(0, input.length - 1);
                    }
                }
                return input + '…';
            }
            return input;
        };
    }

    function splitCharacters() {
        return function (input, chars) {
            if (isNaN(chars)) return input;
            if (chars <= 0) return '';
            if (input && input.length > chars) {
                var prefix = input.substring(0, chars / 2);
                var postfix = input.substring(input.length - chars / 2, input.length);
                return prefix + '...' + postfix;
            }
            return input;
        };
    }

    function words() {
        return function (input, words) {
            if (isNaN(words)) return input;
            if (words <= 0) return '';
            if (input) {
                var inputWords = input.split(/\s+/);
                if (inputWords.length > words) {
                    input = inputWords.slice(0, words).join(' ') + '…';
                }
            }
            return input;
        };
    }

    function getImgUrl(Core) {
        return function (imgName) {
            if (!imgName) {
                return Core.Const.DATA.KEY_DEFAULT_AVATAR;
            }
            if (imgName.indexOf('hrm/img') != -1) {
                return imgName;
            }
            return Core.Util.getImgUrl(imgName);
        };
    }

    function getFileUrl(Core) {
        return function (fileName) {
            return Core.Const.NET.FILE_URL_PREFIX + fileName;
        };
    }

    function getFileTypeImg(Core) {
        return function (fileType) {
            if (Core.Util.inArray(fileType, ['image/png', 'image/jpeg'])) {
                return './hrm/img/icon/icon-file-type-image.png';
            }
            return './hrm/img/icon/icon-file-type-file.png';
        }
    }

    function date(Core) {
        return function (timeStamp, format) {
            return Core.Util.date(format, timeStamp);
        };
    }

    function numberFormat(Core) {
        return function (number, format) {
            return Core.Util.numberFormat(number, format);
        };
    }

    function fileSizeFormat(Core) {
        return function (fileSize) {
            if (fileSize < 1024 * 1024) {
                return Core.Util.numberFormat(fileSize / 1024, 2) + 'KB';
            }
            return Core.Util.numberFormat(fileSize / 1024 / 1024) + 'MB';
        }
    }

    function emptyText() {
        return function (text) {
            return text ? text : "未填写";
        }
    }

    function showFileName() {
        return function (fileName) {
            if (!fileName) {
                return '暂无附件';
            }
            return fileName;
        }
    }

})();
/**
 * Created by dd on 12/26/15.
 */
(function () {
    angular
        .module('app.core')
        .factory('Foundation', ['$rootScope', '$window', '$state', 'Util', 'Data', 'Message', Foundation]);

    function Foundation($rootScope, $window, $state, Util, Data, Message) {
        var locks = [];
        return {
            init: init,
            on: on,
            publish: publish,
            go: go,
            login: login,
            goHome: goHome
        };


        function init() {
            Core.Message.installMessageListener();
            Core.Message.postMessageActionRequestAuthData(function (data) {
                Core.Log.d('postMessageActionRequestAuthData callback');
                Core.Log.d(data);
                Core.Log.d(Data.isGuest());
                if (data && data.token && data.user) {
                    Data.clearAuthData();
                    Data.setToken(data.token);
                    Data.setUser(data.user);
                }
                else {
                    if (Data.isGuest() && $state.current && $state.current.name && !Util.canGuestVisit()) {
                        login();
                    }
                }
            });
        }

        function on(eventName, callback) {
            return $rootScope.$on(eventName, callback);
        }

        function publish(eventName, data) {
            return $rootScope.$broadcast(eventName, data);
        }

        function go(state,data) {
            var param = {
                data: data? data:''
            };

            $state.go(state, {data: data});
        }

        function login() {
            Data.clearAuthData();

            if (isInFrame()) {
                Message.postMessageActionRequestLogout();
            }
            else {
                $state.go('home.login');
            }
        }

        function goHome() {
            $state.go('entrance.welcome');
        }

        function isInFrame() {
            return $window.location !== $window.parent.location;
        }
    }
})();
/**
 * Created by dd on 12/26/15.
 */
(function(){
    angular
        .module('app.core')
        .factory('Log', ['Config', 'Const', Log]);

    function Log(Config, Const) {
        const LevelMap = {
            error: Const.SYSTEM.LOG_LEVEL_ERROR,
            warn: Const.SYSTEM.LOG_LEVEL_WARN,
            info: Const.SYSTEM.LOG_LEVEL_INFO,
            trace: Const.SYSTEM.LOG_LEVEL_TRACE,
            debug: Const.SYSTEM.LOG_LEVEL_DEBUG
        };

        return {
            debug: debug,
            d: debug,

            info: info,
            i: info,

            warn: warn,
            w: warn,

            error: error,
            e: error,

            trace: trace,
            t: trace
        };

        function getLevelName(level)
        {
            for (var i in LevelMap)
            {
                if (LevelMap.hasOwnProperty(i))
                {
                    var l = LevelMap[i];
                    if (l == level)
                    {
                        return i;
                    }
                }
            }

            return '';
        }

        function rawLog()
        {
            var args = Array.prototype.slice.call(arguments);
            var level = args.shift();
            var levelName = getLevelName(level);

            if (level > Config.LOG_LEVEL)
            {
                return;
            }

            args.unshift('[' + levelName.toUpperCase() + ']');
            args.unshift(new Date().toString());
            console.log.apply(console, args);
        }

        function debug(){
            var args = Array.prototype.slice.call(arguments);
            args.unshift(Const.SYSTEM.LOG_LEVEL_DEBUG);
            rawLog.apply(null, args);
        }

        function trace(){
            var args = Array.prototype.slice.call(arguments);
            args.unshift(Const.SYSTEM.LOG_LEVEL_TRACE);
            rawLog.apply(null, args);
        }

        function info(){
            var args = Array.prototype.slice.call(arguments);
            args.unshift(Const.SYSTEM.LOG_LEVEL_INFO);
            rawLog.apply(null, args);
        }

        function warn(){
            var args = Array.prototype.slice.call(arguments);
            args.unshift(Const.SYSTEM.LOG_LEVEL_WARN);
            rawLog.apply(null, args);
        }

        function error(){
            var args = Array.prototype.slice.call(arguments);
            args.unshift(Const.SYSTEM.LOG_LEVEL_ERROR);
            rawLog.apply(null, args);
        }
    }

})();
/**
 * Created by dd on 4/7/16.
 */

(function(){
    angular
        .module('app.core')
        .factory('Message', ['$window', Message]);

    function Message($window) {

        const EVENT_ACTION_REQUEST_GO_HOME = 1;

        const EVENT_ACTION_REQUEST_AUTH_DATA = 2;
        const EVENT_ACTION_RESPONSE_AUTH_DATA = 10002;

        const EVENT_ACTION_REQUEST_LOGOUT = 3;

        var messageCount = 0;
        var callbackMap = {};

        return {
            installMessageListener: installMessageListener,

            postMessageActionRequestGoHome: postMessageActionRequestGoHome,
            postMessageActionRequestAuthData: postMessageActionRequestAuthData,
            postMessageActionRequestLogout: postMessageActionRequestLogout,

        };

        function installMessageListener() {
            $window.addEventListener("message", function (event) {
                var data = event.data;
                if (data.hasOwnProperty('action'))
                {
                    var action = data.action;
                    switch (action)
                    {
                        // client side
                        case EVENT_ACTION_RESPONSE_AUTH_DATA:
                            processActionResponseAuthData(event);
                            break;
                    }


                }
            }, false);
        }



        // client side post
        
        function postMessage(message, callback) {
            messageCount++;
            var messageId = messageCount;
            message.id = messageId;
            if ($window.location !== $window.parent.location)
            {
                $window.parent.postMessage(message, '*');

                if (callback instanceof Function)
                {
                    callbackMap[messageId] = callback;
                }
            }
            else
            {
                callback();
            }
        }
        
        function postMessageActionRequestGoHome() {
            postMessage({
                action: EVENT_ACTION_REQUEST_GO_HOME
            });
        }
        
        function postMessageActionRequestAuthData(callback) {
            postMessage({
                action: EVENT_ACTION_REQUEST_AUTH_DATA
            }, callback);
        }

        function postMessageActionRequestLogout() {
            postMessage({
                action: EVENT_ACTION_REQUEST_LOGOUT
            });
        }


        // client side process
        function processActionResponseAuthData(event) {
            var messageId = event.data.id;
            if (callbackMap.hasOwnProperty(messageId) && callbackMap[messageId] instanceof Function)
            {
                callbackMap[messageId](event.data.data);
            }
        }
    }
})();
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
/**
 * Created by dd on 12/26/15.
 */
(function () {
    angular
        .module('app.core')
        .factory('Util', ['$window', '$state', 'Log', 'Config', 'Const', Util]);

    function Util($window, $state, Log, Config, Const) {

        return {
            getImgUrl: getImgUrl,
            url: url,
            getRequestParams: getRequestParams,
            getRequestParam: getRequestParam,
            go: go,
            goToRoute: goToRoute,
            getCurrentPage: getCurrentPage,
            getCurrentPath: getCurrentPath,
            getCurrentRoute: getCurrentRoute,
            canGuestVisit: canGuestVisit,
            time: time,
            installWindowScrollEventListener: installWindowScrollEventListener,
            uninstallWindowScrollEventListener: uninstallWindowScrollEventListener,
            timeFormat: timeFormat,
            parseAttachments2Str:parseAttachments2Str,
            parseStr2Attachments:parseStr2Attachments,
            getTimestamp: getTimestamp,
            containsKey: containsKey,
            getDate: getDate,
            dateDiff: dateDiff,
            date: date,
            sprintf: sprintf,
            inArray: in_array,
            isMobile:isMobile,
            ltrim: ltrim,
            rtrim: rtrim,
            trim: trim,
            clone:clone,
            movePoint : movePoint
        };

        function getImgUrl(imgName)
        {
            if (imgName.indexOf('://') != -1)
            {
                return imgName;
            }

            return Const.NET.IMG_URL_PREFIX + imgName;
        }

        function url(url, params)
        {
            var queryString = '';
            for (var key in params)
            {
                var value = params[key];
                queryString += (encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&');
            }
            queryString = trim(queryString, '&');
            return url + '?' + queryString;
        }

        function getRequestParams()
        {
            var queryString = trim($window.location.search, '?');
            var params = {};
            var paramList = queryString.split('&');
            for (var i in paramList)
            {
                var kv = paramList[i];
                var kvList = kv.split('=');
                if (kvList.length == 2)
                {
                    var key = decodeURIComponent(kvList[0]);
                    params[key] = decodeURIComponent(kvList[1]);
                }
            }

            return params;
        }

        function getRequestParam(key)
        {
            var params = getRequestParams();
            if (params.hasOwnProperty(key))
            {
                return params[key];
            }

            return undefined;
        }

        function go(path) {
            var pathname = $window.location.pathname;
            pathname = trim(pathname, '/');
            var paths = pathname.split('/');
            if (paths.length > 0) {
                paths.splice(paths.length - 1, 1);
            }

            path = sprintf('%s/%s', paths.join('/'), path);
            path = trim(path, '/');
            path = sprintf('%s//%s/%s', $window.location.protocol, $window.location.host, path);

            $window.location.href = path;
        }

        function goToRoute(route) {
            var routes = route.split('#');
            if (routes.length > 2) {
                Log.e(sprintf('invalid route: %s', route));
                return;
            }

            var page = routes[0];
            // page = trim(page, '.html');
            var endHtmlIndex = page.indexOf('.html');
            if (endHtmlIndex >= 0 && endHtmlIndex + 5 == page.length)
            {
                page = page.substring(0, endHtmlIndex);
            }
            page = page + '.html';
            var controller;
            if (routes.length == 2) {
                controller = routes[1];
            }
            var path = controller ? sprintf('%s#!/%s', page, controller) : page;
            go(path);
        }

        function getCurrentPage() {
            var pathname = $window.location.pathname;
            pathname = rtrim(pathname, '/');
            var paths = pathname.split('/');

            return paths.length > 0 ? paths[paths.length - 1] : undefined;
        }

        function getCurrentPath() {
            var currentPage = getCurrentPage();
            if (currentPage) {
                return rtrim(currentPage, '.html');
            }
        }

        function getCurrentControllerPath() {
            var hash = $window.location.hash;
            hash = trim(hash);
            hash = trim(hash, '#!/');
            hash = trim(hash, '/');
            return hash;
        }

        function getCurrentRoute() {
            var path = getCurrentPath();
            var controllerPath = getCurrentControllerPath();
            if (path) {
                return path + '#' + controllerPath;
            }
        }

        function canGuestVisit() {
            var currentState = $state.current;
            if (!currentState) {
                return false;
            }
            var stateName = currentState.name;

            return in_array(stateName, Config.STATE_LIST_GUEST_CAN_VISIT);
        }

        function isWindowScrollToBottom() {
            var offset = $window.document.body.offsetHeight - $window.scrollY - $window.innerHeight;
            return offset < 3;
        }

        function installWindowScrollEventListener(callback) {
            $window.onscroll = function () {
                if (isWindowScrollToBottom() && callback) {
                    callback();
                }
            };
        }

        function uninstallWindowScrollEventListener() {
            $window.onscroll = undefined;
        }


        function clone(obj) {
            var o;
            if (typeof obj == "object") {
                if (obj === null) {
                    o = null;
                } else {
                    if (obj instanceof Array) {
                        o = [];
                        for (var i = 0, len = obj.length; i < len; i++) {
                            o.push(clone(obj[i]));
                        }
                    } else {
                        o = {};
                        for (var j in obj) {
                            o[j] = clone(obj[j]);
                        }
                    }
                }
            } else {
                o = obj;
            }
            return o;
        }

        function time() {
            return parseInt(new Date().getTime() / 1000, 10);
        }

        function parseAttachments2Str(attachments) {
            var str='';
            for (var i in attachments) {
                str += attachments[i].name + "#" + attachments[i].file_name + ","
            }
            return str

        }

        function parseStr2Attachments(str) {
            var attachments = [];
            var attachmentStrs = str.split(",");
            for (var i in attachmentStrs) {
                var attachment={};
                var attachmentStr = attachmentStrs[i];
                var popr=attachmentStr.split('#');
                attachment.name=popr[0];
                attachment.file_name=Const.NET.FILE_URL_PREFIX+popr[1];
                attachments.push(attachment);
            }
            return attachments;
        }


        function containsKey(object, keys) {
            if (!object) {
                return false;
            }

            if (!(keys instanceof Array)) {
                keys = ['' + keys];
            }

            for (var i in keys) {
                var key = keys[i];
                if (object[key] === undefined) {
                    Log.e(object);
                    Log.e(keys);
                    Log.e('invalid option, key ' + key + ' undefined');
                    return false;
                }
            }

            return true;
        }

        function timeFormat(time) {
            return date('Y-m-d H:i:s', time);
        }

        function getTimestamp(time) {
            return parseInt(time.getTime() / 1000, 10);
        }

        function isMobile(phone) {

            phone = phone + "";

            if (phone.length != 11) {
                return false;
            }

            var myReg = /^(((13[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))+\d{8})$/;
            if (!myReg.exec(phone)) {
                return false;
            }

            return true;
        }

        function getDate(unix) {
            var now = new Date(parseInt(unix) * 1000).toLocaleDateString();
            //return now.toLocaleDateString(); 
            return now;
        }

        function dateDiff(dateTimeStamp) {
            var minute = 1000 * 60;
            var hour = minute * 60;
            var day = hour * 24;
            var month = day * 30;
            var diffValue = new Date().getTime() - dateTimeStamp * 1000;
            var monthC = diffValue / month;
            var weekC = diffValue / (7 * day);
            var dayC = diffValue / day;
            var hourC = diffValue / hour;
            var minC = diffValue / minute;
            var result;
            if (monthC >= 1) {
                result = date('m-d', dateTimeStamp);
            }
            else if (weekC >= 1) {
                result = date('m-d', dateTimeStamp);
            }
            else if (dayC >= 1) {
                result = date('m-d', dateTimeStamp);
            }
            else if (hourC >= 1) {
                result = date('m-d H:i', dateTimeStamp);
            }
            else if (minC >= 1) {
                result = parseInt(minC) + "分钟前";
            } else {
                result = "刚刚";
            }
            return result;
        }

        function date(format, timestamp) {
            //  discuss at: http://phpjs.org/functions/date/
            // original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
            // original by: gettimeofday
            //    parts by: Peter-Paul Koch (http://www.quirksmode.org/js/beat.html)
            // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // improved by: MeEtc (http://yass.meetcweb.com)
            // improved by: Brad Touesnard
            // improved by: Tim Wiel
            // improved by: Bryan Elliott
            // improved by: David Randall
            // improved by: Theriault
            // improved by: Theriault
            // improved by: Brett Zamir (http://brett-zamir.me)
            // improved by: Theriault
            // improved by: Thomas Beaucourt (http://www.webapp.fr)
            // improved by: JT
            // improved by: Theriault
            // improved by: Rafał Kukawski (http://blog.kukawski.pl)
            // improved by: Theriault
            //    input by: Brett Zamir (http://brett-zamir.me)
            //    input by: majak
            //    input by: Alex
            //    input by: Martin
            //    input by: Alex Wilson
            //    input by: Haravikk
            // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // bugfixed by: majak
            // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // bugfixed by: Brett Zamir (http://brett-zamir.me)
            // bugfixed by: omid (http://phpjs.org/functions/380:380#comment_137122)
            // bugfixed by: Chris (http://www.devotis.nl/)
            //        note: Uses global: php_js to store the default timezone
            //        note: Although the function potentially allows timezone info (see notes), it currently does not set
            //        note: per a timezone specified by date_default_timezone_set(). Implementers might use
            //        note: this.php_js.currentTimezoneOffset and this.php_js.currentTimezoneDST set by that function
            //        note: in order to adjust the dates in this function (or our other date functions!) accordingly
            //   example 1: date('H:m:s \\m \\i\\s \\m\\o\\n\\t\\h', 1062402400);
            //   returns 1: '09:09:40 m is month'
            //   example 2: date('F j, Y, g:i a', 1062462400);
            //   returns 2: 'September 2, 2003, 2:26 am'
            //   example 3: date('Y W o', 1062462400);
            //   returns 3: '2003 36 2003'
            //   example 4: x = date('Y m d', (new Date()).getTime()/1000);
            //   example 4: (x+'').length == 10 // 2009 01 09
            //   returns 4: true
            //   example 5: date('W', 1104534000);
            //   returns 5: '53'
            //   example 6: date('B t', 1104534000);
            //   returns 6: '999 31'
            //   example 7: date('W U', 1293750000.82); // 2010-12-31
            //   returns 7: '52 1293750000'
            //   example 8: date('W', 1293836400); // 2011-01-01
            //   returns 8: '52'
            //   example 9: date('W Y-m-d', 1293974054); // 2011-01-02
            //   returns 9: '52 2011-01-02'

            var that = this;
            var jsdate, f;
            // Keep this here (works, but for code commented-out below for file size reasons)
            // var tal= [];
            var txt_words = [
                'Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur',
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];
            // trailing backslash -> (dropped)
            // a backslash followed by any character (including backslash) -> the character
            // empty string -> empty string
            var formatChr = /\\?(.?)/gi;
            var formatChrCb = function (t, s) {
                return f[t] ? f[t]() : s;
            };
            var _pad = function (n, c) {
                n = String(n);
                while (n.length < c) {
                    n = '0' + n;
                }
                return n;
            };
            f = {
                // Day
                d: function () { // Day of month w/leading 0; 01..31
                    return _pad(f.j(), 2);
                },
                D: function () { // Shorthand day name; Mon...Sun
                    return f.l()
                        .slice(0, 3);
                },
                j: function () { // Day of month; 1..31
                    return jsdate.getDate();
                },
                l: function () { // Full day name; Monday...Sunday
                    return txt_words[f.w()] + 'day';
                },
                N: function () { // ISO-8601 day of week; 1[Mon]..7[Sun]
                    return f.w() || 7;
                },
                S: function () { // Ordinal suffix for day of month; st, nd, rd, th
                    var j = f.j();
                    var i = j % 10;
                    if (i <= 3 && parseInt((j % 100) / 10, 10) == 1) {
                        i = 0;
                    }
                    return ['st', 'nd', 'rd'][i - 1] || 'th';
                },
                w: function () { // Day of week; 0[Sun]..6[Sat]
                    return jsdate.getDay();
                },
                z: function () { // Day of year; 0..365
                    var a = new Date(f.Y(), f.n() - 1, f.j());
                    var b = new Date(f.Y(), 0, 1);
                    return Math.round((a - b) / 864e5);
                },

                // Week
                W: function () { // ISO-8601 week number
                    var a = new Date(f.Y(), f.n() - 1, f.j() - f.N() + 3);
                    var b = new Date(a.getFullYear(), 0, 4);
                    return _pad(1 + Math.round((a - b) / 864e5 / 7), 2);
                },

                // Month
                F: function () { // Full month name; January...December
                    return txt_words[6 + f.n()];
                },
                m: function () { // Month w/leading 0; 01...12
                    return _pad(f.n(), 2);
                },
                M: function () { // Shorthand month name; Jan...Dec
                    return f.F()
                        .slice(0, 3);
                },
                n: function () { // Month; 1...12
                    return jsdate.getMonth() + 1;
                },
                t: function () { // Days in month; 28...31
                    return (new Date(f.Y(), f.n(), 0))
                        .getDate();
                },

                // Year
                L: function () { // Is leap year?; 0 or 1
                    var j = f.Y();
                    return j % 4 === 0 & j % 100 !== 0 | j % 400 === 0;
                },
                o: function () { // ISO-8601 year
                    var n = f.n();
                    var W = f.W();
                    var Y = f.Y();
                    return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0);
                },
                Y: function () { // Full year; e.g. 1980...2010
                    return jsdate.getFullYear();
                },
                y: function () { // Last two digits of year; 00...99
                    return f.Y()
                        .toString()
                        .slice(-2);
                },

                // Time
                a: function () { // am or pm
                    return jsdate.getHours() > 11 ? 'pm' : 'am';
                },
                A: function () { // AM or PM
                    return f.a()
                        .toUpperCase();
                },
                B: function () { // Swatch Internet time; 000..999
                    var H = jsdate.getUTCHours() * 36e2;
                    // Hours
                    var i = jsdate.getUTCMinutes() * 60;
                    // Minutes
                    var s = jsdate.getUTCSeconds(); // Seconds
                    return _pad(Math.floor((H + i + s + 36e2) / 86.4) % 1e3, 3);
                },
                g: function () { // 12-Hours; 1..12
                    return f.G() % 12 || 12;
                },
                G: function () { // 24-Hours; 0..23
                    return jsdate.getHours();
                },
                h: function () { // 12-Hours w/leading 0; 01..12
                    return _pad(f.g(), 2);
                },
                H: function () { // 24-Hours w/leading 0; 00..23
                    return _pad(f.G(), 2);
                },
                i: function () { // Minutes w/leading 0; 00..59
                    return _pad(jsdate.getMinutes(), 2);
                },
                s: function () { // Seconds w/leading 0; 00..59
                    return _pad(jsdate.getSeconds(), 2);
                },
                u: function () { // Microseconds; 000000-999000
                    return _pad(jsdate.getMilliseconds() * 1000, 6);
                },

                // Timezone
                e: function () { // Timezone identifier; e.g. Atlantic/Azores, ...
                    // The following works, but requires inclusion of the very large
                    // timezone_abbreviations_list() function.
                    /*              return that.date_default_timezone_get();
                     */
                    throw 'Not supported (see source code of date() for timezone on how to add support)';
                },
                I: function () { // DST observed?; 0 or 1
                    // Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
                    // If they are not equal, then DST is observed.
                    var a = new Date(f.Y(), 0);
                    // Jan 1
                    var c = Date.UTC(f.Y(), 0);
                    // Jan 1 UTC
                    var b = new Date(f.Y(), 6);
                    // Jul 1
                    var d = Date.UTC(f.Y(), 6); // Jul 1 UTC
                    return ((a - c) !== (b - d)) ? 1 : 0;
                },
                O: function () { // Difference to GMT in hour format; e.g. +0200
                    var tzo = jsdate.getTimezoneOffset();
                    var a = Math.abs(tzo);
                    return (tzo > 0 ? '-' : '+') + _pad(Math.floor(a / 60) * 100 + a % 60, 4);
                },
                P: function () { // Difference to GMT w/colon; e.g. +02:00
                    var O = f.O();
                    return (O.substr(0, 3) + ':' + O.substr(3, 2));
                },
                T: function () { // Timezone abbreviation; e.g. EST, MDT, ...
                    // The following works, but requires inclusion of the very
                    // large timezone_abbreviations_list() function.
                    /*              var abbr, i, os, _default;
                     if (!tal.length) {
                     tal = that.timezone_abbreviations_list();
                     }
                     if (that.php_js && that.php_js.default_timezone) {
                     _default = that.php_js.default_timezone;
                     for (abbr in tal) {
                     for (i = 0; i < tal[abbr].length; i++) {
                     if (tal[abbr][i].timezone_id === _default) {
                     return abbr.toUpperCase();
                     }
                     }
                     }
                     }
                     for (abbr in tal) {
                     for (i = 0; i < tal[abbr].length; i++) {
                     os = -jsdate.getTimezoneOffset() * 60;
                     if (tal[abbr][i].offset === os) {
                     return abbr.toUpperCase();
                     }
                     }
                     }
                     */
                    return 'UTC';
                },
                Z: function () { // Timezone offset in seconds (-43200...50400)
                    return -jsdate.getTimezoneOffset() * 60;
                },

                // Full Date/Time
                c: function () { // ISO-8601 date.
                    return 'Y-m-d\\TH:i:sP'.replace(formatChr, formatChrCb);
                },
                r: function () { // RFC 2822
                    return 'D, d M Y H:i:s O'.replace(formatChr, formatChrCb);
                },
                U: function () { // Seconds since UNIX epoch
                    return jsdate / 1000 | 0;
                }
            };
            this.date = function (format, timestamp) {
                that = this;
                jsdate = (timestamp === undefined ? new Date() : // Not provided
                        (timestamp instanceof Date) ? new Date(timestamp) : // JS Date()
                            new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
                );
                return format.replace(formatChr, formatChrCb);
            };
            return this.date(format, timestamp);
        }

        function sprintf() {
            //  discuss at: http://phpjs.org/functions/sprintf/
            // original by: Ash Searle (http://hexmen.com/blog/)
            // improved by: Michael White (http://getsprink.com)
            // improved by: Jack
            // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // improved by: Dj
            // improved by: Allidylls
            //    input by: Paulo Freitas
            //    input by: Brett Zamir (http://brett-zamir.me)
            //   example 1: sprintf("%01.2f", 123.1);
            //   returns 1: 123.10
            //   example 2: sprintf("[%10s]", 'monkey');
            //   returns 2: '[    monkey]'
            //   example 3: sprintf("[%'#10s]", 'monkey');
            //   returns 3: '[####monkey]'
            //   example 4: sprintf("%d", 123456789012345);
            //   returns 4: '123456789012345'
            //   example 5: sprintf('%-03s', 'E');
            //   returns 5: 'E00'

            var regex = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g;
            var a = arguments;
            var i = 0;
            var format = a[i++];

            // pad()
            var pad = function (str, len, chr, leftJustify) {
                if (!chr) {
                    chr = ' ';
                }
                var padding = (str.length >= len) ? '' : new Array(1 + len - str.length >>> 0)
                    .join(chr);
                return leftJustify ? str + padding : padding + str;
            };

            // justify()
            var justify = function (value, prefix, leftJustify, minWidth, zeroPad, customPadChar) {
                var diff = minWidth - value.length;
                if (diff > 0) {
                    if (leftJustify || !zeroPad) {
                        value = pad(value, minWidth, customPadChar, leftJustify);
                    } else {
                        value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
                    }
                }
                return value;
            };

            // formatBaseX()
            var formatBaseX = function (value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
                // Note: casts negative numbers to positive ones
                var number = value >>> 0;
                prefix = prefix && number && {
                        '2': '0b',
                        '8': '0',
                        '16': '0x'
                    }[base] || '';
                value = prefix + pad(number.toString(base), precision || 0, '0', false);
                return justify(value, prefix, leftJustify, minWidth, zeroPad);
            };

            // formatString()
            var formatString = function (value, leftJustify, minWidth, precision, zeroPad, customPadChar) {
                if (precision != null) {
                    value = value.slice(0, precision);
                }
                return justify(value, '', leftJustify, minWidth, zeroPad, customPadChar);
            };

            // doFormat()
            var doFormat = function (substring, valueIndex, flags, minWidth, _, precision, type) {
                var number, prefix, method, textTransform, value;

                if (substring === '%%') {
                    return '%';
                }

                // parse flags
                var leftJustify = false;
                var positivePrefix = '';
                var zeroPad = false;
                var prefixBaseX = false;
                var customPadChar = ' ';
                var flagsl = flags.length;
                for (var j = 0; flags && j < flagsl; j++) {
                    switch (flags.charAt(j)) {
                        case ' ':
                            positivePrefix = ' ';
                            break;
                        case '+':
                            positivePrefix = '+';
                            break;
                        case '-':
                            leftJustify = true;
                            break;
                        case "'":
                            customPadChar = flags.charAt(j + 1);
                            break;
                        case '0':
                            zeroPad = true;
                            customPadChar = '0';
                            break;
                        case '#':
                            prefixBaseX = true;
                            break;
                    }
                }

                // parameters may be null, undefined, empty-string or real valued
                // we want to ignore null, undefined and empty-string values
                if (!minWidth) {
                    minWidth = 0;
                } else if (minWidth === '*') {
                    minWidth = +a[i++];
                } else if (minWidth.charAt(0) == '*') {
                    minWidth = +a[minWidth.slice(1, -1)];
                } else {
                    minWidth = +minWidth;
                }

                // Note: undocumented perl feature:
                if (minWidth < 0) {
                    minWidth = -minWidth;
                    leftJustify = true;
                }

                if (!isFinite(minWidth)) {
                    throw new Error('sprintf: (minimum-)width must be finite');
                }

                if (!precision) {
                    precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type === 'd') ? 0 : undefined;
                } else if (precision === '*') {
                    precision = +a[i++];
                } else if (precision.charAt(0) == '*') {
                    precision = +a[precision.slice(1, -1)];
                } else {
                    precision = +precision;
                }

                // grab value using valueIndex if required?
                value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];

                switch (type) {
                    case 's':
                        return formatString(String(value), leftJustify, minWidth, precision, zeroPad, customPadChar);
                    case 'c':
                        return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
                    case 'b':
                        return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                    case 'o':
                        return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                    case 'x':
                        return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                    case 'X':
                        return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad)
                            .toUpperCase();
                    case 'u':
                        return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                    case 'i':
                    case 'd':
                        number = +value || 0;
                        number = Math.round(number - number % 1); // Plain Math.round doesn't just truncate
                        prefix = number < 0 ? '-' : positivePrefix;
                        value = prefix + pad(String(Math.abs(number)), precision, '0', false);
                        return justify(value, prefix, leftJustify, minWidth, zeroPad);
                    case 'e':
                    case 'E':
                    case 'f': // Should handle locales (as per setlocale)
                    case 'F':
                    case 'g':
                    case 'G':
                        number = +value;
                        prefix = number < 0 ? '-' : positivePrefix;
                        method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
                        textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
                        value = prefix + Math.abs(number)[method](precision);
                        return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
                    default:
                        return substring;
                }
            };

            return format.replace(regex, doFormat);
        }

        function in_array(needle, haystack, argStrict) {
            //  discuss at: http://phpjs.org/functions/in_array/
            // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // improved by: vlado houba
            // improved by: Jonas Sciangula Street (Joni2Back)
            //    input by: Billy
            // bugfixed by: Brett Zamir (http://brett-zamir.me)
            //   example 1: in_array('van', ['Kevin', 'van', 'Zonneveld']);
            //   returns 1: true
            //   example 2: in_array('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'});
            //   returns 2: false
            //   example 3: in_array(1, ['1', '2', '3']);
            //   example 3: in_array(1, ['1', '2', '3'], false);
            //   returns 3: true
            //   returns 3: true
            //   example 4: in_array(1, ['1', '2', '3'], true);
            //   returns 4: false

            var key = '',
                strict = !!argStrict;

            //we prevent the double check (strict && arr[key] === ndl) || (!strict && arr[key] == ndl)
            //in just one for, in order to improve the performance
            //deciding wich type of comparation will do before walk array
            if (strict) {
                for (key in haystack) {
                    if (haystack[key] === needle) {
                        return true;
                    }
                }
            } else {
                for (key in haystack) {
                    if (haystack[key] == needle) {
                        return true;
                    }
                }
            }

            return false;
        }

        function trim(str, charlist) {
            //  discuss at: http://phpjs.org/functions/trim/
            // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // improved by: mdsjack (http://www.mdsjack.bo.it)
            // improved by: Alexander Ermolaev (http://snippets.dzone.com/user/AlexanderErmolaev)
            // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // improved by: Steven Levithan (http://blog.stevenlevithan.com)
            // improved by: Jack
            //    input by: Erkekjetter
            //    input by: DxGx
            // bugfixed by: Onno Marsman
            //   example 1: trim('    Kevin van Zonneveld    ');
            //   returns 1: 'Kevin van Zonneveld'
            //   example 2: trim('Hello World', 'Hdle');
            //   returns 2: 'o Wor'
            //   example 3: trim(16, 1);
            //   returns 3: 6

            var whitespace, l = 0,
                i = 0;
            str += '';

            if (!charlist) {
                // default list
                whitespace =
                    ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
            } else {
                // preg_quote custom list
                charlist += '';
                whitespace = charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
            }

            l = str.length;
            for (i = 0; i < l; i++) {
                if (whitespace.indexOf(str.charAt(i)) === -1) {
                    str = str.substring(i);
                    break;
                }
            }

            l = str.length;
            for (i = l - 1; i >= 0; i--) {
                if (whitespace.indexOf(str.charAt(i)) === -1) {
                    str = str.substring(0, i + 1);
                    break;
                }
            }

            return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
        }

        function ltrim(str, charlist) {
            //  discuss at: http://phpjs.org/functions/ltrim/
            // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            //    input by: Erkekjetter
            // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // bugfixed by: Onno Marsman
            //   example 1: ltrim('    Kevin van Zonneveld    ');
            //   returns 1: 'Kevin van Zonneveld    '

            charlist = !charlist ? ' \\s\u00A0' : (charlist + '')
                .replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
            var re = new RegExp('^[' + charlist + ']+', 'g');
            return (str + '')
                .replace(re, '');
        }

        function rtrim(str, charlist) {
            //  discuss at: http://phpjs.org/functions/rtrim/
            // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            //    input by: Erkekjetter
            //    input by: rem
            // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // bugfixed by: Onno Marsman
            // bugfixed by: Brett Zamir (http://brett-zamir.me)
            //   example 1: rtrim('    Kevin van Zonneveld    ');
            //   returns 1: '    Kevin van Zonneveld'

            charlist = !charlist ? ' \\s\u00A0' : (charlist + '')
                .replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\\$1');
            var re = new RegExp('[' + charlist + ']+$', 'g');
            return (str + '')
                .replace(re, '');
        }

        function movePoint(string,scale)
        {
            if (scale >= 0)
                return movePointRight(string, scale);
            else
                return movePointLeft(string, -scale);
        }

        function movePointLeft(string, scale)
        {
            var s, s1, s2, ch, ps, sign;
            ch = '.';
            sign = '';
            s = string ? string : "";

            if (scale <= 0) return s;
            ps = s.split('.');
            s1 = ps[0] ? ps[0] : "";
            s2 = ps[1] ? ps[1] : "";
            if (s1.slice(0, 1) == '-')
            {
                s1 = s1.slice(1);
                sign = '-';
            }
            if (s1.length <= scale)
            {
                ch = "0.";
                s1 = padLeft(s1, scale);
            }
            return sign + s1.slice(0, -scale) + ch + s1.slice(-scale) + s2;
        }

        function movePointRight(string, scale)
        {
            var s, s1, s2, ch, ps;
            ch = '.';
            s = string ? string : "";

            if (scale <= 0) return s;
            ps = s.split('.');
            s1 = ps[0] ? ps[0] : "";
            s2 = ps[1] ? ps[1] : "";
            if (s2.length <= scale)
            {
                ch = '';
                s2 = padRight(s2 ,scale);
            }
            return s1 + s2.slice(0, scale) + ch + s2.slice(scale, s2.length);
        }

        function padRight(string, nSize, ch)
        {
            var len = 0;
            var s = string ? string : "";
            ch = ch ? ch : '0';// 默认补0

            len = s.length;
            while (len < nSize)
            {
                s = s + ch;
                len++;
            }
            return s;
        }

        function padLeft(string, nSize, ch)
        {
            var len = 0;
            var s = string ? string : "";
            ch = ch ? ch : '0';// 默认补0

            len = s.length;
            while (len < nSize)
            {
                s = ch + s;
                len++;
            }
            return s;
        }
    }
})();
/**
 * Created by dd on 2/24/16.
 */
(function () {
    angular
        .module('app.core.component')
        .component('aside', {
            templateUrl: 'core/aside/aside.html',
            controller: AsideController,
            controllerAs: 'context',
            bindings: {
                isShowAll: "="
            }
        });

    AsideController.$inject = ['$scope', '$rootScope', '$location', 'Core'];

    function AsideController($scope, $rootScope, $location, Core) {
        var context = this;
        $scope.$state = Core.$state;

        $scope.onClickLogo = function () {
            Core.$window.parent.postMessage({action: 1}, "*");
        };

        $scope.onClickItem = function (go) {
            console.log(go);
            Core.go(go);
        };

        $scope.itemList = [
            {
                img: 'asset/core/component/aside/img/icon-user-manager.png',
                heightLight: 'asset/core/component/aside/img/icon-user-manager-heighlight.png',
                stateUiSref: 'admin.user',
                state: 'admin.user',
                title: '用户管理'
            },

            {
                img: 'asset/core/component/aside/img/icon-home.png',
                heightLight: 'asset/core/component/aside/img/icon-home-heighlight.png',
                stateUiSref: 'admin.company',
                state: 'admin.company',
                title: '公司管理'
            },

            {
                img: 'asset/core/component/aside/img/icon-apv.png',
                heightLight: 'asset/core/component/aside/img/icon-apv-heighlight.png',
                stateUiSref: 'admin.merchant',
                state: 'admin.merchant',
                title: '商户管理'
            },

            {
                img: 'asset/core/component/aside/img/icon-module-apv.png',
                heightLight: 'asset/core/component/aside/img/icon-module-apv-heightlight.png',
                stateUiSref: 'admin.recharge',
                state: 'admin.recharge',
                title: '充值管理'
            },
            {
                img: 'asset/core/component/aside/img/icon-discount.png',
                heightLight: 'asset/core/component/aside/img/icon-discount-heighlight.png',
                stateUiSref: 'admin.discount',
                state: 'admin.discount',
                title: '折扣管理'
            },
            {
                img: 'asset/core/component/aside/img/icon-work.png',
                heightLight: 'asset/core/component/aside/img/icon-work-heighlight.png',
                stateUiSref: 'admin.advertising',
                state: 'admin.advertising',
                title: '广告管理'
            },
            {
                img: 'asset/core/component/aside/img/icon-oil.png',
                heightLight: 'asset/core/component/aside/img/icon-oil-heighlight.png',
                stateUiSref: 'admin.oil-manager',
                state: 'admin.oil-manager',
                title: '油价管理'
            },
            {
                img: 'asset/core/component/aside/img/icon-invoice.png',
                heightLight: 'asset/core/component/aside/img/icon-invoice-heighlight.png',
                stateUiSref: 'admin.invoice',
                state: 'admin.invoice',
                title: '发票管理'
            },
            {
                img: 'asset/core/component/aside/img/icon-version.png',
                heightLight: 'asset/core/component/aside/img/icon-version-heighlight.png',
                stateUiSref: 'admin.version',
                state: 'admin.version',
                title: '版本管理'
            }

        ];
    }

})();
(function () {
    angular
        .module('app.core.component')
        .component('dropDown', {
            transclude: true,
            templateUrl: 'core/drop-down/drop-down.html',
            controller: DropDownController,
            controllerAs: 'context',
            bindings: {
                list: "=",
                onClickItem: "&",
                defaultContent: "="
            }
        });

    DropDownController.$inject = ['$scope','Core'];

    function DropDownController ($scope,Core) {
        var context = this;
        var component = $scope;

        init();
        
        function init() {
            getCompanyList();
        }
        
        function getCompanyList() {

            Core.Api.ORG.getAdminOrgList().then(function (response) {
                Core.Log.d('companyList');
                Core.Log.d(response);
                if (response.code == 0) {
                    component.items = response.data.org_root_list;
                    Core.Log.d(component.items);
                }
            });
        }
        
        component.clickItem = context.defaultContent ? {name:context.defaultContent} : {name:'点击选择'};

        component.onClickItem = function (item) {
            component.clickItem = item;
            context.onClickItem({item:item});
        }
    }
})();

/**
 * Created by dd on 2/24/16.
 */
(function () {
    angular
        .module('app.core.component')
        .component('formErrorTip', {
            templateUrl: 'core/form-error-tip/tip.html',
            controller: TipController,
            controllerAs: 'context',
            // bindToController: true,
            bindings: {
                show: '=',
                content: '='
            }
        });

    TipController.$inject = ['$scope', '$timeout', 'Log'];

    function TipController($scope, $timeout, Log)
    {
        var context = this;
        $scope.$watch('context.show', function(newValue, oldValue) {
            if (newValue && !oldValue)
            {
                $timeout(function() {
                    context.show = false;
                }, 3000);
            }
        });
    }

})();
(function () {
    angular
        .module('app.core.component')
        .component('imageShow', {
            templateUrl: 'core/image-show/image-show.html',
            controller: ImageShowController,
            controllerAs: 'context',
            bindings: {
                onClickImg :'&',
                imageUrl : '='
            }
        });

    ImageShowController.$inject = ['$scope', '$rootScope', '$location', 'Core'];

    function ImageShowController($scope, $rootScope, $location, Core) {
        var context = this;
        
        $scope.onClickImg = function () {
            context.onClickImg();
        }
    }

})();

(function () {
    angular
        .module('app.core.component')
        .component('failure', {
            transclude: true,
            templateUrl: 'core/loading/failure.html',
            controller: FailureController,
            controllerAs: 'context',
            bindings: {
                onStateChanged: '&',
            }
        });

    FailureController.$inject = ['$timeout'];

    function FailureController ($timeout)
    {
        var context = this;
        init();

        function init()
        {
            $timeout(function () {
                context.onStateChanged();
            }, 500);
        }
    }

})();
(function () {
    angular
        .module('app.core.component')
        .component('loading', {
            transclude: true,
            templateUrl: 'core/loading/loading.html',
            controller: LoadingController,
            controllerAs: 'context',
            bindings: {

            }
        });

    LoadingController.$inject = [];

    function LoadingController()
    {
        var context = this;
    }
    
})();
(function () {
    angular
        .module('app.core.component')
        .component('success', {
            transclude: true,
            templateUrl: 'core/loading/success.html',
            controller: SuccessController,
            controllerAs: 'context',
            bindings: {
                onStateChanged: '&',
            }
        });

    SuccessController.$inject = [];

    function SuccessController($timeout)
    {
        var context = this;
        init();

        function init()
        {
            $timeout(function () {
                context.onStateChanged();
            }, 500);
        }
    }

})();
/**
 * Created by dd on 2/24/16.
 */
(function () {
    angular
        .module('app.core.component')
        .component('menu', {
            templateUrl: 'core/menu/menu.html',
            controller: MenuController,
            controllerAs: 'context',
            bindings: {}
        });

    MenuController.$inject = ['$scope', '$rootScope', '$location', 'Core'];

    function MenuController($scope, $rootScope, $location, Core) {
        var context = this;
        context.onClickMenu = onClickMenu;
        context.onClickHome = onClickHome;
        context.onClickMessage = onClickMessage;

        //processShow();

        $rootScope.$on("$locationChangeSuccess", function (event, newUrl, oldUrl, newState, oldState) {
            processShow();
        });

        function processShow() {

            context.menuShow = false;
            context.show = false;

            var route = Core.Util.getCurrentRoute();

            if (!route) {
                Core.Log.d('-------------------route--------------------------');
            }

            if (Core.Util.inArray(route,Core.Config.ROUTE_LIST_SHOW_MENU)) {
                context.menuShow = true;
            }
        }

        function onClickMenu() {
            context.show = !context.show;
        }

        function onClickHome() {
            Core.Util.go('home.html');
        }

        function onClickMessage() {
            Core.Log.d("点击了消息");
        }

    }

})();
(function () {
    angular
        .module('app.core.component')
        .component('companyList', {
            templateUrl: 'core/navigation/company-list.html',
            controller: CompanyListController,
            controllerAs: 'context',
            bindings: {
                onCompanyChoose: '&',
                onClickMask: '&',
                list: '='
            }
        });

    CompanyListController.$inject = ['$scope', 'Core', '$state'];

    function CompanyListController($scope, Core, $state) {
        var context = this;
        context.imgSrcPrefix = 'asset/core/component/navigation/img';
        context.swipeLeft = swipeLeft;
        context.swipeRight = swipeRight;
        context.onCheckedOrg = onCheckedOrg;

        var orgRootId;
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

        init();

        function init() {
            
            
        }

        function onCheckedOrg(item) {
            selectOrg(item.id);
            context.orgRootItem = item;
        }

        function selectOrg(orgId) {
            for (var i = 0; i < context.items.length; i++) {
                var item = context.items[i];
                if (item.logo != "") {
                    item.orgRootLogo = Core.Util.getImgUrl(item.logo);
                } else {
                    item.orgRootLogo = Core.Const.DATA.KEY_DEFAULT_ORG_LOGO;
                }
                item.selected = item.id == orgId;
            }
        }

        function swipeLeft() {
            Core.Log.d('left');
        }

        function swipeRight() {
            Core.Log.d('right');
        }
    }
})();
(function () {
    angular
        .module('app.core.component')
        .component('createCompany', {
            templateUrl: 'core/navigation/create-company.html',
            controller: CreateCompanyController,
            controllerAs: 'context',
            bindings: {
                onCompanyCreate: '&',
                onClickMask: '&'
            }
        });

    CreateCompanyController.$inject = ['$scope','Core'];

    function CreateCompanyController($scope,Core) {
        var context = this;
        init();

        function init() {
            
        }
    }
})();
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
/**
 * Created by dd on 2/24/16.
 */
(function () {
    angular
        .module('app.core.component')
        .component('navigation', {
            templateUrl: 'core/navigation/navigation.html',
            controller: NavigationController,
            controllerAs: 'context',
            bindings: {
                app:'='
            }
        });

    NavigationController.$inject = ['$scope', '$rootScope', 'Core', '$state'];

    function NavigationController($scope, $rootScope, Core, $state) {
        var context = this;
        var NAVIGATION_MENU_LIST = {
            INDEX: 0,
            ADMINISTRATION: 1,
            FINANCE: 2,
            WORK: 3,
            SETTING: 5,
            AUTH: 6,
            MODULE: 7
            
        };

        //定义一些常量
        $scope.imgSrcPrefix = 'asset/core/component/navigation/img';
        $scope.$state = Core.$state;
        $scope.NAVIGATION_MENU_LIST = NAVIGATION_MENU_LIST;


        Core.Log.d('第一次进来');
        //定义一些方法
        $scope.onClickBtn = onClickBtn;

        $scope.onClickMenu = onClickMenu;
        $scope.onClickRightMenu = onClickRightMenu;
        $scope.onClickChangeCompany = onClickChangeCompany;
        $scope.onClickMask = onClickMask;
        $scope.onClickNewCompany = onClickNewCompany;
        $scope.onClickCompanyCreate = onClickCompanyCreate;
        $scope.onClickInvite = onClickInvite;
        $scope.onClickSetting = onClickSetting;
        $scope.onClickCompany = onClickCompany;
        $scope.onClickUserSetting = onClickUserSetting;
        $scope.onClickLogout = onClickLogout;
        $scope.onClickNotify = onClickNotify;
        $scope.onMouseDownBtn = onMouseDownBtn;
        $scope.onMouseUpBtn = onMouseUpBtn;


        $scope.selectCompany = false;
        $scope.notify = false;
        $scope.selectCreateCompany = false;
        context.showLeftNavBtn = true;
        $scope.invite = false;
        $scope.list = [];

        $scope.onClickLogo = function () {
            Core.$window.parent.postMessage({action: 1}, "*");
        };

//        document.oncontextmenu=new Function("event.returnValue=false;");

        init();
        
        Core.on(Core.Const.EVENT.USER_INFO_UPDATE, function () {
            getUserInfo();
        });

        Core.on(Core.Const.DATA.KEY_DEFAULT_NAVIGATION, function (event, data) {

            switch (data) {
                case 'discount':
                    $scope.title = '折扣管理';
                    $scope.selectStatus = 'discount';
                    break;
                case 'merchant':
                    $scope.title = '商户管理';
                    $scope.selectStatus = 'merchant';
                    break;
                case 'merchant-detail':
                    $scope.title = '商户详情';
                    $scope.selectStatus = 'merchant-detail';
                    break;
                case 'recharge':
                    $scope.title = '充值管理';
                    $scope.selectStatus = 'recharge';
                    break;
                case 'company':
                    $scope.title = '公司管理';
                    $scope.selectStatus = 'recharge';
                    break;
                case 'user':
                    $scope.title = '用户管理';
                    $scope.selectStatus = 'user';
                    break;
                case 'user-detail':
                    $scope.title = '用户详情';
                    $scope.selectStatus = 'user-detail';
                    break;
                case 'withdraw':
                    $scope.title = '提现管理';

                    break;

                case 'advertising':
                    $scope.title = '广告管理';
                    break;
                case 'version':
                    $scope.title = '版本管理';
                    break;

                default:
                    $scope.title = '用户管理';
                    $scope.selectStatus = 'user';
                    break;

            }
            Core.Log.d('core.on');
            Core.Log.d($scope.selectStatus);
        });


        function init() {
            getOrgRootInfo();
            getUserInfo();
            // Core.Data.clearLocalData();
        }

        function getOrgRootInfo() {
            
        }

        function getUserInfo() {
            
        }

        $rootScope.$on("$locationChangeSuccess", function (event, newUrl, oldUrl, newState, oldState) {
            init();
            processShow();
        });

        function processShow() {

            $scope.menuShow = false;
            $scope.show = false;

            var route = Core.Util.getCurrentRoute();

            if (!route) {
                Core.Log.d('-------------------route--------------------------');
            }

            if (Core.Util.inArray(route, Core.Config.ROUTE_LIST_SHOW_MENU)) {
                $scope.navigation = true;
            }
        }

        function onClickBtn(index) {
            onClickMenu();
            var redirectUrl = "entrance.welcome";
            var title = "首页";
            switch (index) {
                case NAVIGATION_MENU_LIST.INDEX:
                {
                    title = '首页';
                    redirectUrl = "entrance.welcome";
                }
                    break;

                case NAVIGATION_MENU_LIST.ADMINISTRATION:
                {
                    title = '行政';
                    redirectUrl = "administration.index";
                }
                    break;

                case NAVIGATION_MENU_LIST.FINANCE:
                {
                    title = '财务';
                    redirectUrl = "finance.index";
                }
                    break;

                case NAVIGATION_MENU_LIST.WORK:
                {
                    title = '工作';
                    redirectUrl = "work.index";
                }
                    break;

                case 4:
                {
                    //todo  设置公司架构url
                    title = '公司架构';
                    redirectUrl = "";
                }
                    break;

                case NAVIGATION_MENU_LIST.SETTING:
                {
                    title = '设置';
                    redirectUrl = "setting.index";
                }
                    break;

                case NAVIGATION_MENU_LIST.AUTH:
                {
                    title = "权限设置";
                    redirectUrl = "auth.index";
                }
                    break;

                case NAVIGATION_MENU_LIST.MODULE:
                {
                    title = "自定义";
                    redirectUrl = "module.index";
                }
                    break;

                default:
                    break;
            }

            $scope.title = title;
            Core.$timeout(function () {
                Core.go(redirectUrl);
            }, 50);
        }

        function onClickUserSetting() {
            $scope.title = '基本设置';
            $scope.selectStatus = 'user-setting';
            Core.go('user.index');
        }

        function onClickMenu() {
            $scope.rightStatus = $scope.rightStatus == 'show' ? 'hide' : 'hideRight';
            $scope.status = $scope.status == 'show' ? 'hide' : 'show';
        }

        function onClickRightMenu() {
            $scope.notify = false;
            $scope.rightStatus = $scope.rightStatus == 'show' ? 'hide' : 'show';
        }

        function onClickChangeCompany() {
            $scope.selectCompany = true;
        }

        function onClickCompany(item) {
            $scope.selectCompany = false;
            Core.Log.d('广播公司改变');

            if ($state.includes('home.client')||$state.includes('home.index')||$state.includes('home.journal')||$state.includes('home.address')||$state.includes('home.apv')) {
                Core.Data.set(Core.Const.DATA.KEY_CLIENT_ORG_ROOT, item);
                Core.publish(Core.Const.EVENT.EVENT_CLIENT_ORG_CHANGE);
            }
            else {
                Core.Log.d('pc端');
                Core.Data.set(Core.Const.DATA.KEY_ORG_ROOT, item);
                Core.publish(Core.Const.EVENT.EVENT_ORG_CHANGE);
            }
            
            init();
        }

        function onClickMask() {
            $scope.selectCompany = false;
            $scope.selectCreateCompany = false;
            $scope.invite = false;
        }

        function onClickNewCompany() {
            $scope.selectCreateCompany = true;
        }

        function onClickCompanyCreate(companyName) {

            if (!companyName) {
                Core.Notify.error("团队名称不能为空");
                return;
            }

            Core.Api.ORG.createRootOrg(companyName, 1).then(function (response) {
                if (response.code == 0) {
                    Core.Notify.success("团队创建成功");

                    Core.Api.ORG.getAdminOrgList().then(function (response) {
                        if (response.code == 0) {
                            $scope.selectCreateCompany = false;
                            var orgList = response.data.org_root_list;
                            if (orgList.length > 0) {
                                Core.Data.set(Core.Const.DATA.KEY_ORG_ROOT, orgList[orgList.length - 1]);
                                Core.publish(Core.Const.EVENT.ORG_SETTING_INFO_UPDATE);
                                Core.publish(Core.Const.EVENT.ORG_UPDATE);
                            } else {
                                Core.Notify.error("创建失败");
                            }
                        }
                    });
                } else if (response.code == Core.Const.ERROR.ERROR_EXIST) {
                    Core.Notify.info("团队已存在");
                } else {
                    Core.Notify.error("创建失败");
                }
            });

        }

        function onClickInvite() {
            $scope.invite = true;
        }

        function onClickSetting() {
            $scope.title = '团队设置';
            $scope.selectStatus = 'company-setting';
            // Core.Util.go('company-setting.html');
        }

        function onClickNotify() {
            $scope.title = '消息';
            $scope.selectStatus = 'message';
            Core.Log.d('通知');
            Core.go('message.index');
        }

        function onClickLogout() {
            Core.Api.USER.logout().then(function (response) {
                if (response.code == 0) {
                    Core.login();
                    logoutClearData();
                } else {
                    Core.Notify.error("已在异地登录,请重新登录");
                    Core.$timeout(function () {
                        logoutClearData();
                    }, 3000);
                }
            });
        }

        function logoutClearData() {
            Core.Notify.warning('已退出');
            Core.Data.clearAuthData();
            Core.login();
        }

        function onMouseDownBtn(btn) {
            switch (btn) {
                case 'home':
                    $scope.selectRightHome = true;
                    break;
                case 'create':
                    $scope.selectRightCreate = true;
                    break;
                case 'admin':
                    $scope.selectRightAdmin = true;
                    break;
                case 'fin':
                    $scope.selectRightFin = true;
                    break;
                default :
                    break;
            }
        }

        function onMouseUpBtn() {
            $scope.selectRightHome = false;
            $scope.selectRightCreate = false;
            $scope.selectRightAdmin = false;
            $scope.selectRightFin = false;
        }
    }
})();
(function () {
    angular
        .module('app.core.component')
        .component('notify', {
            templateUrl: 'core/navigation/notify.html',
            controller: InviteController,
            controllerAs: 'context',
            bindings: {
                onClickMask: '&'
            }
        });

    InviteController.$inject = ['$scope','Core'];

    function InviteController($scope,Core) {
        var context = this;
        context.onClickApvNotify = onClickApvNotify;

        Core.Log.d('companyList');
        init();

        function init() {
        }

        function onClickApvNotify(){
            Core.Util.go('message.html');
        }

    }
})();
/**
 * Created by AndGod.H on 16/4/14.
 */
(function () {
    angular
        .module('app.core.component')
        .component('navigationBar', {
            templateUrl: 'core/navigation-bar/navigation-bar.html',
            controller: NavigationBarController,
            controllerAs: 'context',
            bindings: {
            }
        });

    NavigationBarController.$inject = ['$scope', '$stateParams', '$rootScope', 'Core'];

    function NavigationBarController($scope, $stateParams, $rootScope, Core) {
        var context = this;
        $scope.$state = Core.$state;
        $scope.$stateParams = $stateParams;

        console.log("navigation bar init");
        getModuleList();

        var NAVIGATION_MENU_LIST = {
            ADMINISTRATION: 'administration',
            FINANCE: 'finance',
            WORK: 'work',
            FRAMEWORK: 'framework',
            SETTING: 'setting',
            MODULE: 'module'
        };

        Core.on(Core.Const.EVENT.EVENT_ORG_CHANGE,function(event,data){
            getModuleList();
        });

        $rootScope.$watch('toStateName', function(newValue, oldValue, scope){
            console.log("----watch to state name-----");
            processNavigationBar(newValue);
        });

        function processNavigationBar(toStateName)
        {
            Core.Log.d('看看');
            Core.Log.d(NAVIGATION_MENU_LIST);
            for (var i in NAVIGATION_MENU_LIST)
            {
                var item = NAVIGATION_MENU_LIST[i];

                if (toStateName && toStateName.indexOf(item) >= 0)
                {
                    showNavigationMenuList(item);
                }
            }
        }

        function showNavigationMenuList(type)
        {
            var itemsAdmin = [];
            var itemsFin = [];
            switch (type)
            {
                case NAVIGATION_MENU_LIST.ADMINISTRATION:
                case NAVIGATION_MENU_LIST.FINANCE:
                case NAVIGATION_MENU_LIST.MODULE:
                    itemsAdmin = [
                        {title: '报告', stateUiSref: 'administration.report', state: 'administration.index', icon: "home/img/icon-report.png"},
                        {title: "请假", stateUiSref: 'administration.leave', state: 'administration.index', icon: "process-setting/img/icon-process-askforleave.png"},
                        {title: '外勤', stateUiSref: 'administration.trip', state: 'administration.index', icon: "process-setting/img/icon-process-business-trip.png"},
                        {title: '物品申领', stateUiSref: 'administration.goods', state: 'administration.index', icon: "process-setting/img/icon-process-goods.png"},
                        {title: '名片制作', stateUiSref: 'administration.businessCard', state: 'administration.index', icon: "process-setting/img/icon-process-card.png"},
                        {title: '培训申请', stateUiSref: 'administration.train', state: 'administration.index', icon: "process-setting/img/icon-process-train.png"},
                        {title: '合同申请', stateUiSref: 'administration.contract', state: 'administration.index', icon: "process-setting/img/icon-process-contract.png"},
                        {title: '用印', stateUiSref: 'administration.stamp', state: 'administration.index', icon: "process-setting/img/icon-process-borrow-stamp.png"},
                        {title: '用车', stateUiSref: 'administration.car', state: 'administration.index', icon: "process-setting/img/icon-process-borrow-car.png"}
                    ];
                    itemsFin = [
                        {title: '报销', stateUiSref: 'finance.reimb', state: 'finance.index', icon: "process-setting/img/icon-process-reimb.png"},
                        {title: '差旅费', stateUiSref: 'finance.tripReimb', state: 'finance.index', icon: "asset/core/component/message-scroll/img/icon-message-trip-reimb.png"},
                        {title: '付款', stateUiSref: 'finance.pay', state: 'finance.index', icon: "process-setting/img/icon-process-pay.png"},
                        {title: '备用金', stateUiSref: 'finance.imprest', state: 'finance.index', icon: "process-setting/img/icon-process-imprest.png"}
                    ];
                    break;
                default:
                    break;
            }

            $scope.itemsAdmin = itemsAdmin;
            $scope.itemsFin = itemsFin;
        }

        function getModuleList() {
            Core.Api.APV.getApvCustomTemplateList().then(function (response) {
                Core.Log.d('aaa');
                Core.Log.d(response);
                if(response.code == 0) {
                    $scope.moduleList = response.data.apv_custom_template_list;
                    if ($scope.moduleList.length != 0) {
                        Core.Log.d(context.moduleList);
                        for (var i = 0; i < $scope.moduleList.length; i++) {
                            parseIcon($scope.moduleList[i]);
                        }
                        $scope.moduleList[0].isChecked = true;
                    }
                }
            });
        }

        function parseIcon(template) {
            var avatar = template.avatar;
            if (avatar) {
                if (avatar.indexOf("default") == 0) {
                    template.icon = 'process-setting/img/' + Core.Const.IMG[parseInt(avatar.substring(avatar.indexOf(":") + 1, avatar.length)) - 1];
                }
            }
            template.isChecked = false;
        }
    }

})();
(function () {
    angular
        .module('app.core.component')
        .component('page', {
            templateUrl: 'core/page/page.html',
            controller: PageController,
            controllerAs: 'context',
            bindings: {
                pageCount:'=',
                onClickPage:'&'
            }
        });

    PageController.$inject = ['Core'];

    function PageController(Core) {
        var context = this;

        context.onClickPrev = onClickPrev;
        context.onClickNext = onClickNext;
        context.onClickPageNumber = onClickPageNumber;

        init();

        Core.on(Core.Const.EVENT.ACTION_CLEAR_PAGE_DATA, function (event) {
            context.pageNumber = 1;
        });

        function init(){
            context.pageNumber = 1;
            Core.Log.d(context.pageCount)
        }

        function onClickPageNumber(pageNumber) {
            context.onClickPage({message:pageNumber});
            context.pageNumber = pageNumber;
            context.showPrev = pageNumber > 1;
        }

        function test() {
            context.pageCount = [1,2,3,4,5,6,7,8];
        }

        function onClickPrev() {
            context.pageNumber -= 1;
            context.onClickPage({message:context.pageNumber});
            if (context.pageNumber == 1) {
                context.showPrev = false;
            }
            context.showNext = true;
        }

        function onClickNext() {

            if (context.pageNumber < context.pageCount.length) {
                context.pageNumber += 1;
            }
            context.onClickPage({message:context.pageNumber});
        }
    }
})();
(function () {
    angular
        .module('app.core.component')
        .directive( "contextMenu", function(){
            var TYPE_ADD=1;
            var TYPE_MODIFY=2;
            var TYPE_DEL=3;
            return {
                restrict: 'AE',
                scope: {
                    'onChoose': '&',
                    'options': '='
                },
                transclude: true,
                templateUrl: 'core/right-click/right-click.html',
                link: function( scope, elem, attr ){
                    console.log('link');
                    console.log(scope.options);
                    scope.visible = false;
                    console.log('-link');

                    scope.onChooseItem = function(type,e){
//                        e.preventDefault();
                        scope.visible = false;
                        scope.onChoose({type:type});
                    };

                    elem.on("contextmenu", function (e) {
                        e.preventDefault();
                        scope.visible = true;
                        console.log(scope.visible);
                        scope.left = event.clientX-5;
                        scope.top = event.clientY-5;

                        scope.$apply();

                    });
                    elem.on("mouseleave", function(e){
                        scope.visible = false;
                        scope.$apply();
                    });
                }
            }
        })
})();
(function () {
    angular
        .module('app.core.component')
        .component('settingBar', {
            templateUrl: 'core/setting-bar/setting-bar.html',
            controller: searchBarController,
            controllerAs: 'context',
            bindings: {
                onClickIndex : '&',
                onClickContract : '&',
                onClickTrain : '&'
            }
        });

    searchBarController.$inject = ['$scope', 'Core'];

    function searchBarController($scope, Core) {
        var context = this;
        var imgIconList = [
            {img:'process-setting/img/icon-process-reimb.png'},
            {img:'process-setting/img/icon-process-askforleave.png'},
            {img:'process-setting/img/icon-process-business-trip.png'},
            {img:'process-setting/img/icon-process-pay.png'},
            {img:'process-setting/img/icon-process-card.png'},
            {img:'process-setting/img/icon-process-imprest.png'},
            {img:'process-setting/img/icon-process-contract.png'},
            {img:'home/img/icon-report.png'},
            {img:'process-setting/img/icon-process-goods.png'},
            {img:'process-setting/img/icon-process-borrow-stamp.png'},
            {img:'process-setting/img/icon-process-borrow-car.png'},
            {img:'process-setting/img/icon-process-train.png'}
        ];

        $scope.$state = Core.$state;

        Core.on(Core.Const.EVENT.EVENT_ORG_CHANGE, function (event, data) {
            init();
        });

        $scope.clearAllChecked = clearAllChecked;
        context.showIndex = false;
        context.showNormal = false;
        context.showModule = false;
        context.showSpecial = false;
        
        $scope.onClickProcessMenu = function () {
            context.showIndex = !context.showIndex;
            context.showNormal = false;
            context.showModule = false;
            context.showSpecial = false;
        };
        
        $scope.onClickSystemAPv = function () {
            context.showIndex = true;
            context.showNormal = !context.showNormal;
            context.showModule = false;
            context.showSpecial = false;
        };
        
        $scope.onClickCustomApv = function () {
            context.showIndex = true;
            context.showNormal = false;
            context.showModule = !context.showModule;
            context.showSpecial = false;
        };

        $scope.onClickModule = function () {
            context.showIndex = false;
            context.showNormal = false;
            context.showModule = false;
            context.showSpecial = !context.showSpecial;
        };
        
        var orgRootId;
        Core.Api.ORG.getDefaultOrgRoot().then(function (response) {
            orgRootId = response.id;
        });
        
        $scope.onClickAuth = function () {
            Core.Api.ORG.getDefaultOrgRoot().then(function (response) {
                orgRootId = response.id;
                Core.Data.set(Core.Const.DATA.KEY_SETTING_CLICK_ITEM,{go:'auth'});
                Core.Log.d(Core.Data.getUser());
                Core.Api.AUTH.getAuth(orgRootId,Core.Data.getUser().id).then(function (response) {
                    Core.Log.d('getAuth');
                    Core.Log.d(response);
                    if(response.code == 0){
                        if(response.data.auth['oa.all']) {
                            Core.go('setting.auth');
                        }
                        else {
                            Core.Notify.info('权限不足');
                        }
                    }
                }, function(reason) {
                    context.isOpen = false;
                });
            });
            
        };
        
        $scope.onClickModuleList = function () {
            Core.Data.set(Core.Const.DATA.KEY_SETTING_CLICK_ITEM,{go:'moduleList'});
        };
        
        $scope.onClickCard = function () {
            Core.Data.set(Core.Const.DATA.KEY_SETTING_CLICK_ITEM,{go:'card'});
        };
        
        
        $scope.onClickMenu = function (item,index) {
            clearAllChecked();
            Core.Data.set(Core.Const.DATA.KEY_SETTING_CLICK_ITEM,{go:'index',value:item});
            if($scope.$state.includes('setting.index')) {
                for (var i = 0; i < $scope.menuItems.length; i++) {
                    var menuItem = $scope.menuItems[i];
                    menuItem.isChecked = menuItem.type == item.type;
                }
                for (var j = 0; j < $scope.moduleList.length; j++) {
                    var moduleItem = $scope.moduleList[j];
                    moduleItem.isChecked = moduleItem.templateId == item.templateId;
                }
                for (var m = 0; m < $scope.defaultItems.length; m++) {
                    var defaultItem = $scope.defaultItems[m];
                    defaultItem.isChecked = defaultItem.type == item.type;
                }
                context.onClickIndex({item:item});
            }
            else {
                $scope.$state.go('setting.index');
            }
            $scope.showModule=false;
            $scope.showNormal=false;
        };
        
        function clearAllChecked() {
            for (var i = 0; i < $scope.menuItems.length; i++) {
                $scope.menuItems[i].isChecked = false;
            }
            if($scope.moduleList) {
                for (var j = 0; j < $scope.moduleList.length; j++) {
                    $scope.moduleList[j].isChecked = false;
                }
            }
            
            $scope.defaultItems[0].isChecked = false;
            context.isContractChecked = false;
            context.isTrainChecked = false;
        }
        
        $scope.onClickContract = function () {
            clearAllChecked();
            Core.Data.set(Core.Const.DATA.KEY_SETTING_CLICK_ITEM,{go:'contract'});
            context.isContractChecked = true;
            if($scope.$state.includes('setting.module')) {
                // $scope.showSpecial = false;
                context.onClickContract();
            }
            else {
                $scope.$state.go('setting.module');
            }
        };

        $scope.onClickTrain = function () {
            clearAllChecked();
            Core.Data.set(Core.Const.DATA.KEY_SETTING_CLICK_ITEM,{go:'train'});
            context.isTrainChecked = true;
            if($scope.$state.includes('setting.module')) {
                // $scope.showSpecial = false;
                context.onClickTrain();
            }
            else {
                $scope.$state.go('setting.module');
            }
        };
        
        $scope.menuItems = [
            {
                icon: "process-setting/img/icon-report.png",
                title: "报告",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_REPORT,
                templateId: '',
                isChecked: false
            },
            {
                icon: "process-setting/img/icon-process-reimb.png",
                title: "报销",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_FIN_REIMB,
                templateId: '',
                isChecked: false
            },
            {
                icon: "asset/core/component/message-scroll/img/icon-message-trip-reimb.png",
                title: "差旅费",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_FIN_TRIP_REIMB,
                templateId: '',
                isChecked: false
            },
            {
                icon: "process-setting/img/icon-process-pay.png",
                title: "付款",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_FIN_PAY,
                templateId: '',
                isChecked: false
            },
            {
                icon: "process-setting/img/icon-process-imprest.png",
                title: "备用金申请",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_FIN_FUND,
                templateId: '',
                isChecked: false
            },
            {
                icon: "process-setting/img/icon-process-askforleave.png",
                title: "请假",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_ADMIN_LEAVE,
                templateId: '',
                isChecked: false
            },
            {
                icon: "process-setting/img/icon-process-business-trip.png",
                title: "外勤",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_WORK_BUSINESS,
                templateId: '',
                isChecked: false
            },

            {
                icon: "process-setting/img/icon-process-goods.png",
                title: "物品申领",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_ADMIN_RES_GOODS,
                templateId: '',
                isChecked: false
            },
            {
                icon: "process-setting/img/icon-process-card.png",
                title: "名片制作",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_CARD,
                templateId: '',
                isChecked: false
            },
            {
                icon: "process-setting/img/icon-process-train.png",
                title: "培训",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_TRAIN,
                templateId: '',
                isChecked: false
            },
            {
                icon: "process-setting/img/icon-process-contract.png",
                title: "合同",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_CONTRACT,
                isChecked: false
            },
            {
                icon: "process-setting/img/icon-process-borrow-stamp.png",
                title: "用印申请",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_ADMIN_RES_STAMP,
                templateId: '',
                isChecked: false
            },
            {
                icon: "process-setting/img/icon-process-borrow-car.png",
                title: "用车审批",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_ADMIN_RES_CAR,
                templateId: '',
                isChecked: false
            }
        ];

        $scope.defaultItems = [
            {
                icon: "process-setting/img/icon-process-default.png",
                title: "默认",
                type: Core.Const.APP.PROCESS.TYPE_PROCESS_DEFAULT,
                isChecked: false
            }
        ];

        init();

        function init() {
            
            if(!Core.Data.get(Core.Const.DATA.KEY_SETTING_CLICK_ITEM)) {
                $scope.defaultItems[0].isChecked = true;
            }
            else if (Core.Data.get(Core.Const.DATA.KEY_SETTING_CLICK_ITEM).value) {
                context.showIndex = true;
                var item = Core.Data.get(Core.Const.DATA.KEY_SETTING_CLICK_ITEM).value;
                for (var i = 0; i < $scope.menuItems.length; i++) {
                    var menuItem = $scope.menuItems[i];
                    menuItem.isChecked = menuItem.type == item.type;
                    if (menuItem.isChecked) {
                        context.showNormal = true;
                    }
                }
                for (var m = 0; m < $scope.defaultItems.length; m++) {
                    var defaultItem = $scope.defaultItems[m];
                    defaultItem.isChecked = defaultItem.type == item.type;
                }

            }
            else if (Core.Data.get(Core.Const.DATA.KEY_SETTING_CLICK_ITEM).go == 'contract') {
                clearAllChecked();
                context.isContractChecked = true;
                context.showSpecial = true;
            }
            else if (Core.Data.get(Core.Const.DATA.KEY_SETTING_CLICK_ITEM).go == 'train') {
                clearAllChecked();
                context.isTrainChecked = true;
                context.showSpecial = true;
            }
            else if (Core.Data.get(Core.Const.DATA.KEY_SETTING_CLICK_ITEM).go == 'card') {
                clearAllChecked();
                context.isCardChekced = true;
                context.showSpecial = true;
            }
            else if (Core.Data.get(Core.Const.DATA.KEY_SETTING_CLICK_ITEM).go == 'auth') {
                context.showIndex = false;
            }
            else if (Core.Data.get(Core.Const.DATA.KEY_SETTING_CLICK_ITEM).go == 'moduleList') {
                context.showIndex = false;
            }
            else {
                $scope.defaultItems[0].isChecked = true;
            }
            getModuleList();
        }
        
        function getModuleList() {
            Core.Api.APV.getApvCustomTemplateList().then(function (response) {
                Core.Log.d('getModuleList');
                if(response.code == 0) {
                    var responseList = response.data.apv_custom_template_list;
                    $scope.moduleList = dataAnalysis(responseList);
                    if (Core.Data.get(Core.Const.DATA.KEY_SETTING_CLICK_ITEM) && Core.Data.get(Core.Const.DATA.KEY_SETTING_CLICK_ITEM).value) {
                        context.showIndex = true;
                        var item = Core.Data.get(Core.Const.DATA.KEY_SETTING_CLICK_ITEM).value;
                        for (var j = 0; j < $scope.moduleList.length; j++) {
                            var moduleItem = $scope.moduleList[j];
                            moduleItem.isChecked = moduleItem.templateId == item.templateId;
                            if (moduleItem.isChecked) {
                                context.showModule = true;
                            }
                        }
                        for (var m = 0; m < $scope.defaultItems.length; m++) {
                            var defaultItem = $scope.defaultItems[m];
                            defaultItem.isChecked = defaultItem.type == item.type;
                        }
                        context.onClickIndex({item:item});
                        
                    }
                    // Core.Data.clearLocalData();
                }
            });
        }

        function dataAnalysis(list) {
            var mList=[];
            for(var i in list) {
                var item = {};
                item.img = getLocalIcon(list[i].avatar);
                item.title = list[i].name;
                item.type = Core.Const.APP.PROCESS.TYPE_PROCESS_MODULE;
                item.templateId = list[i].id;
                item.isChecked = false;
                mList.push(item);
            }
            return mList;
        }

        function getLocalIcon(imgName) {
            Core.Log.d(imgName);
            if (imgName) {
                if (imgName.indexOf("default") == 0) {
                    var index = (parseInt(imgName.substring(imgName.indexOf(":") + 1, imgName.length))-1);
                    Core.Log.d(index);
                    var icon = imgIconList[index].img;
                    return icon;
                }
            }
        }
    }
})();
(function () {
    angular
        .module('app.core.component')
        .component('searchBar', {
            templateUrl: 'core/search-bar/search-bar.html',
            controller: searchBarController,
            controllerAs: 'context',
            bindings: {
                onClickSearch: '&',
                onClickExport: '&',
                onClickData: '&',
                onClickTable: '&',
                type: '=',
                page: '=',
                templateId: '=',
                onClickGoods: '&'
            }
        });

    searchBarController.$inject = ['$scope', 'Core', '$state'];

    function searchBarController($scope, Core, $state) {
        var context = this;
        $scope.status='请选择状态';
        $scope.isShowSearchBar = true;
        $scope.isShowExport = true;
        $scope.$state = Core.$state;

        $scope.changeStatus = function (status) {
            $scope.status = status;
            $scope.isShow = false;
        };
        var searchMessage = {};
        var orgRootId;
        var userId;

        init();

        function init() {
            if ($state.includes('work.journal') || $state.includes('work.index')) {
                $scope.isShowSearchBar = false;
                $scope.isShowExport = false;
            }
        }

        Core.on(Core.Const.EVENT.KEY_CLEAR_SEARCH_DATA, function (event) {
            $scope.status = '请选择状态';
            $scope.dateBegin = '';
            $scope.dateEnd = '';
            $scope.name = '';
        });

        Core.Api.ORG.getDefaultOrgRoot().then(function (data) {
            orgRootId = data.id;
        });

        Core.Api.LOCAL.getLocalUser().then(function (data) {
            userId = data.id;
        });
        
        $scope.onClickSearch = function onClickSearch() {
            
            var status;
            var beginTime;
            var endTime;
            var name;

            if($scope.status == '请选择状态') {
                status = '';
            }
            else {
                status = $scope.status;
            }

            if(!$scope.dateBegin&&$scope.dateEnd){
                Core.Notify.info('请选择开始时间');
                return;
            }
            else if(!$scope.dateEnd&&$scope.dateBegin){
                Core.Notify.info('请选择结束时间');
                return;
            }
            else if(!$scope.dateBegin&&!$scope.dateEnd){
                beginTime = 0;
                endTime = 0;
            }
            else if($scope.dateBegin<=$scope.dateEnd) {
                beginTime = Core.Util.getTimestamp(parseDate($scope.dateBegin));
                endTime = Core.Util.getTimestamp(parseDate($scope.dateEnd));
            }
            else {
                Core.Notify.info('开始时间不能小于结束时间');
                return;
            }

            

            if($scope.name) {
                name = $scope.name;
            }
            else {
                name = '';
            }

            if(!status&&!beginTime&&!endTime&&!name) {
                Core.Notify.info('请选择条件');
                return;
            }
            else {
                var message = {
                    name : name,
                    beginTime: beginTime,
                    endTime: endTime,
                    status: status,
                };
                searchMessage = message;
                context.onClickSearch({message:message});
            }
        };

        $scope.onClickExport = function onClickExport() {
            Core.Log.d(context.type);
            Core.Log.d(context.page);
            Core.Log.d(context.templateId);

            switch ($scope.status) {
                case '请选择状态':
                    context.status = '';
                    break;
                case '全部':
                    context.status = '';
                    break;
                case '待审批':
                    context.status = 1;
                    break;
                case '已审批':
                    context.status = 2;
                    break;
                case '审批未通过':
                    context.status = -1;
                    break;
                default:
                    context.status = '';
                    break;
            }
            
            if(!searchMessage.beginTime) {
                searchMessage.beginTime = '';
            }
            if(!searchMessage.endTime) {
                searchMessage.endTime = '';
            }
            if(!searchMessage.name) {
                searchMessage.name = '';
            }
            var data = {
                org_root_id: orgRootId,
                user_id: userId,
                type: context.type,
                status: context.status,
                page: context.page,
                template_id : context.templateId,
                begin_time : searchMessage.beginTime,
                end_time : searchMessage.endTime,
                name : searchMessage.name
            };
            Core.Log.d(Core.Data.getExportUrl(data));
            context.exportUrl = Core.Data.getExportUrl(data);
        };

        function parseDate(input) {
            var parts = input.match(/(\d+)/g);
            // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
            return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
        }
    }
})();
(function () {
    angular
        .module('app.core.component')
        .component('toast', {
            templateUrl: 'core/toast/toast.html',
            controller: ToastController,
            controllerAs: 'context',
            bindings: {
                show: '=',
                content: '=',
                path: '=',
                duration: '=',
                type: '='
            }
        });

    ToastController.$inject = ['$scope', '$location', '$timeout', 'Core'];

    function ToastController($scope, $location, $timeout, Core) {

        var context = this;
        var toast ={};
        context.toast = toast;

        $scope.$watch('context.show', function (newValue, oldValue) {
            if(newValue!=oldValue)
            {

                if(context.show == false)
                {
                    return;
                }

                switch(context.type){
                    case 'error':
                        toast.class = 'error';
                        toast.img = 'core/toast/img/icon-toast-error.png'
                        break;
                    case 'success':
                        toast.class = 'success';
                        toast.img = 'core/toast/img/icon-toast-success.png'
                        break;
                    case 'alert':
                        toast.class = 'alert';
                        toast.img = 'core/toast/img/icon-toast-alert.png'
                        break;
                    default :
                        toast.class = 'alert';
                        toast.img = 'core/toast/img/icon-toast-alert.png'
                        break;
                }

                $timeout(function () {
                    context.show = false;
                    context.path ? Core.Util.goToRoute(context.path) : '';
                }, 2000);
            }

        });
    }
})();
(function () {
    angular
        .module('app.core.component')
        .component('topBar', {
            templateUrl: 'core/top-bar/top-bar.html',
            controller: ToastController,
            controllerAs: 'context',
            bindings: {
            }
        });

    ToastController.$inject = ['$scope', '$location', '$timeout', 'Core'];

    function ToastController($scope, $location, $timeout, Core) {

        context.toast = toast;

        
    }
})();
angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("core/test.html","");
$templateCache.put("core/aside/aside.html","<div class=\"aside\" ng-class=\"{\'all-aside\':context.isShowAll}\">\n    <div class=\"logo-holder m-link\" ng-click=\"onClickLogo()\">\n        <img ng-show=\"!context.isShowAll\" class=\"logo\" ng-src=\"asset/core/component/aside/img/icon_trademark_icon.jpg\">\n        <img ng-show=\"context.isShowAll\" class=\"logo-content\" ng-src=\"asset/core/component/aside/img/icon_trademark.jpg\">\n    </div>\n    <div class=\"item-holder m-link\" ng-repeat=\"item in itemList\"\n         ng-class=\"{\'active\':$state.includes(item.stateUiSref)||$state.includes(item.stateUiSref1)||$state.includes(item.stateUiSref2)}\"\n         ng-click=\"onClickItem(item.state)\">\n        <img ng-show=\"!($state.includes(item.stateUiSref)||$state.includes(item.stateUiSref1)||$state.includes(item.stateUiSref2))\" class=\"item-img\" ng-src=\"{{item.img}}\">\n        <img ng-show=\"$state.includes(item.stateUiSref)||$state.includes(item.stateUiSref1)||$state.includes(item.stateUiSref2)\" class=\"item-img\" ng-src=\"{{item.heightLight}}\">\n        <div ng-show=\"context.isShowAll\" class=\"item-title\">{{item.title}}</div>\n    </div>\n</div>\n");
$templateCache.put("core/drop-down/drop-down.html","<div class=\"dropdown\" uib-dropdown>\n    <a href class=\"m-link\"\n       uib-dropdown-toggle>\n        <span>{{clickItem.name}}</span>\n    </a>\n</div>\n");
$templateCache.put("core/form-error-tip/tip.html","<div class=\"core-component form-error-tip\">\n    <div ng-show=\"context.show\" class=\"ui-toptips ui-warn js-tooltips\">{{context.content}} </div>\n</div>");
$templateCache.put("core/image-show/image-show.html","<div class=\"image-show-holder \" ng-click=\"onClickImg()\">\n    <img class=\"image animated fadeInDown\" ng-src=\"{{context.imageUrl}}\" >\n</div>");
$templateCache.put("core/loading/failure.html","<div class=\"failure core-component\">\n    <div class=\"ui-mask-transparent\"></div>\n    <div class=\"ui-toast\">\n        <i class=\"ui-icon-toast-failure\"></i>\n        <p class=\"ui-toast-content\">操作失败 {{messageFail}}</p>\n    </div>\n</div>");
$templateCache.put("core/loading/loading.html","<div class=\"ui-loading-toast loading core-component\">\n    <div class=\"ui-mask-transparent\"></div>\n    <div class=\"ui-toast\">\n        <div class=\"ui-loading\">\n            <div class=\"ui-loading-leaf ui-loading-leaf-0\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-1\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-2\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-3\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-4\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-5\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-6\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-7\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-8\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-9\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-10\"></div>\n            <div class=\"ui-loading-leaf ui-loading-leaf-11\"></div>\n        </div>\n        <p class=\"ui-toast-content\">数据加载中</p>\n    </div>\n</div>");
$templateCache.put("core/loading/success.html","<div class=\"success core-component\">\n    <div class=\"ui-mask-transparent\"></div>\n    <div class=\"ui-toast\">\n        <i class=\"ui-icon-toast\"></i>\n        <p class=\"ui-toast-content\">操作成功</p>\n    </div>\n</div>");
$templateCache.put("core/menu/menu.html","<div ng-if=\"context.menuShow\" class=\"menu\">\n\n    <div ng-if=\"context.show\" class=\"home-menu-bg\" ng-click=\"context.onClickMenu()\"></div>\n\n    <div class=\"home-menu\">\n        <div class=\"menu-button\" ng-click=\"context.onClickMenu()\">\n            <img class=\"menu-icon-{{context.show}}\" src=\"core/menu/img/home-menu-icon.png\">\n        </div>\n\n        <div ng-if=\"context.show\" class=\"menu-home\" ng-click=\"context.onClickHome()\">\n            <span class=\"menu-text\">首页</span>\n            <img class=\"menu-sub-icon\" src=\"core/menu/img/menu-home-icon.png\">\n        </div>\n\n        <div ng-if=\"context.show\" class=\"menu-message\" ng-click=\"context.onClickMessage()\">\n            <span class=\"menu-text\">消息</span>\n            <img class=\"menu-sub-icon\" src=\"core/menu/img/menu-message-icon.png\">\n        </div>\n\n    </div>\n\n</div>");
$templateCache.put("core/navigation/company-list.html","<div class=\"navigation-company-list\">\n    <div class=\"company-holder\">\n        <div class=\"title m-default\">团队切换</div>\n        <div class=\"company-list-holder\">\n            <img class=\"forward\"  ng-src=\"{{context.imgSrcPrefix}}/icon-creat-company-left.png\" ng-click=\"context.swipeLeft()\"/>\n            <div class=\"scroll\">\n                <div class=\"company-item-holder task-holder\" style=\"width: {{context.scrollWidth}};\">\n                    <div class=\"item\"  ng-repeat=\"item in context.items\" ng-click=\"context.onCheckedOrg(item)\">\n                        <img ondragstart=\'false\' class=\"company-avatar\"  ng-src=\"{{item.orgRootLogo}}\"/>\n                        <label class=\"company-name\" ng-class=\"{\'select\':item.selected,\'normal\':!item.selected}\">{{item.name}}\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <img class=\"backward\"  ng-src=\"{{context.imgSrcPrefix}}/icon-creat-company-right.png\" ng-click=\"context.swipeRight()\"/>\n        </div>\n        <div class=\"set-company-holder m-link\" ng-click=\"context.onCompanyChoose({item:context.orgRootItem})\">确定</div>\n    </div>\n    <div class=\'mask\' ng-click=\"context.onClickMask()\"></div>\n    <toast type=\"context.toast.type\" show=\"context.toast.show\" path=\"context.toast.path\" duration=\"context.toast.duration\" content=\"context.toast.content\"></toast>\n</div>");
$templateCache.put("core/navigation/create-company.html","<div class=\"navigation-company-create\">\n    <div class=\"company-holder\">\n        <div class=\"title\">新建团队</div>\n            <div class=\"company-name-title\">团队名称</div>\n            <input class=\"company-name\" placeholder=\"请输入团队名称\" ng-model=\"companyName\">\n        <div class=\"set-company-holder\" ng-click=\"context.onCompanyCreate({companyName:companyName})\">确定</div>\n    </div>\n    <div class=\'mask\' ng-click=\"context.onClickMask()\"></div>\n</div>");
$templateCache.put("core/navigation/invite.html","<div class=\"invite\">\n    <div class=\"company-holder\">\n        <div class=\"title\">邀请他人加入团队</div>\n        <div class=\"company-name-title\">扫码二维码加入团队</div>\n        <div class=\"img-holder\">\n            <img style=\"height: 180px;width: 180px;\" ng-src=\"{{context.barcodeSrc}}\">\n        </div>\n    </div>\n    <div class=\'mask\' ng-click=\"context.onClickMask()\"></div>\n    <toast type=\"context.toast.type\" show=\"context.toast.show\" path=\"context.toast.path\" duration=\"context.toast.duration\" content=\"context.toast.content\"></toast>\n</div>");
$templateCache.put("core/navigation/navigation.html","<div class=\"nav\" ng-if=\"!navigation\">\n\n    <create-company ng-if=\"selectCreateCompany\"\n                    on-click-mask=\"onClickMask()\"\n                    on-company-create=\"onClickCompanyCreate(companyName)\">\n    </create-company>\n\n    <invite ng-if=\"invite\" on-click-mask=\"onClickMask()\"></invite>\n\n    <div ng-if=\"false\"\n         ng-if=\"status==\'show\'\"\n         class=\"holder\"\n         ng-click=\"onClickMenu()\">\n    </div>\n\n    <div ng-if=\"rightFun == \'show\'\" class=\"holder\" ng-click=\"onClickRightMenu()\"></div>\n\n    <div class=\"top-nav\">\n        <div class=\"top-nav-img\">\n\n            <img class=\"right-btn-icon m-link\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-src=\"{{ imgSrcPrefix }}/icon-navigation-right.png\">\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.user\')\">用户管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.user-detail\')\">用户详情</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.company\')\">公司管理</div>\n\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.merchant\')\">商户管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.merchant-detail\')\">商户管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.recharge\')\">充值管理</div>\n            <!--<div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.withdraw\')\">提现管理</div>-->\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.discount\')\">折扣管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.advertising\')\">广告管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.oil-manager\')\">油价管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.invoice\')\">发票管理</div>\n            <div class=\"right-navigation-name m-default\" ng-click=\"context.app.settings.asideFolded = !context.app.settings.asideFolded\" ng-show=\"$state.includes(\'admin.version\')\">版本管理</div>\n\n        </div>\n    </div>\n\n\n\n\n</div>");
$templateCache.put("core/navigation-bar/navigation-bar.html","<div class=\"navigation-bar task-holder\" ng-if=\"$state.includes(\'item.*\')||$state.includes(\'finance.*\')||$state.includes(\'module.index\')\">\n\n    <div class=\"home-bar m-link\" ng-click=\"isShowAdmin = !isShowAdmin\" ng-init=\"isShowAdmin = false\">\n        行政审批\n        <img class=\"icon-bottom\" src=\"asset/core/component/setting-bar/img/icon-bottom.png\">\n    </div>\n    <div ng-show=\"isShowAdmin || $state.includes(\'administration.*\')\">\n        <div class=\"bar\" ng-repeat=\"item in itemsAdmin\" ui-sref=\"{{ item.stateUiSref }}\" href=\"javascript:;\"\n             ng-class=\"{ \'active\': $state.includes(item.stateUiSref) || ($first && $state.includes(item.state)) }\">\n            <div class=\"apv-menu-holder m-link\">\n                <img class=\"menu-icon\" ng-src=\"{{item.icon}}\"/>\n                <span class=\"menu-title\">{{item.title}}</span>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"home-bar m-link\" ng-click=\"isShowFin = !isShowFin\" ng-init=\"isShowFin = false\">\n        财务审批\n        <img class=\"icon-bottom\" src=\"asset/core/component/setting-bar/img/icon-bottom.png\">\n    </div>\n    <div ng-show=\"isShowFin || $state.includes(\'finance.*\')\">\n        <div class=\"bar\" ng-repeat=\"item in itemsFin\" ui-sref=\"{{ item.stateUiSref }}\" href=\"javascript:;\"\n             ng-class=\"{ \'active\': $state.includes(item.stateUiSref) || ($first && $state.includes(item.state)) }\">\n            <div class=\"apv-menu-holder m-link\">\n                <img class=\"menu-icon\" ng-src=\"{{item.icon}}\"/>\n                <span class=\"menu-title\">{{item.title}}</span>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"home-bar m-link\" ng-click=\"isShowMudule = !isShowMudule\" ng-init=\"isShowMudule = false\">\n        自定义审批\n        <img ng-if=\"moduleList.length>1\" class=\"icon-bottom\" src=\"asset/core/component/setting-bar/img/icon-bottom.png\">\n    </div>\n    <div ng-show=\"isShowMudule || $state.includes(\'module.index\')\" ui-sref=\"module.index({index:$index})\" ng-repeat=\"item in moduleList\" class=\"bar m-link\"\n         ng-class=\"{ \'active\': $stateParams.index==$index || ($first && $state.includes(item.state)) }\">\n        <div class=\"apv-menu-holder\">\n            <img class=\"menu-icon\" ng-src=\"{{item.icon}}\"/>\n            <span class=\"menu-title\">{{item.name}}</span>\n        </div>\n    </div>\n</div>");
$templateCache.put("core/page/page.html","<div class=\"page-holder\" ng-show=\"context.pageCount.length>1\">\n    <span class=\"prev m-link\" ng-if=\"context.pageNumber != 1\" ng-click=\"context.onClickPrev()\">&lt;</span>\n    <div style=\"display: inline\" class=\"m-default\" ng-repeat=\"page in context.pageCount track by $index\" ng-show=\"($index+1>context.pageCount.length-5&&context.pageNumber>context.pageCount.length-3)||($index<5&&context.pageNumber<4)||($index+1>context.pageNumber-3 && $index+1<context.pageNumber+3)\">\n                <span class=\"page m-link\" ng-class=\"{\'green\':page == context.pageNumber}\"\n                      ng-click=\"context.onClickPageNumber(page)\">{{page}}</span>\n    </div>\n    <span class=\"next m-link\" ng-if=\"context.pageNumber != context.pageCount.length\" ng-click=\"context.onClickNext()\">&gt;</span>\n    <span class=\"total-page m-default\">共 {{context.pageCount.length}} 页</span>\n    </span>\n</div>");
$templateCache.put("core/right-click/right-click.html","<div  class=\"core-directive core-directive-context-menu\">\n    <div class=\"contextmenu-node\" style=\"left: {{left}}px; top: {{top}}px;\"\n         ng-show=\"visible\"\n          style=\"width:200px;height: 300px;\">\n        <div class=\"clickItem\" ng-repeat=\"item in options\" ng-class=\"{mouseEnter:\'mouseEnter\'}[mouseEvent2]\"\n             ng-mouseenter=\"mouseEvent2=\'mouseEnter\'\" ng-mouseleave=\"mouseEvent2=\'mouseLeave\'\" ng-click=\"onChooseItem(item.type)\">\n            {{item.name}}\n        </div>\n    </div>\n    <div class=\"body\">\n        <ng-transclude></ng-transclude>\n    </div>\n</div>");
$templateCache.put("core/search-bar/search-bar.html","<div class=\"component-search-bar\">\n    <div class=\"status-search\" ng-show=\"isShowSearchBar\">\n        <div class=\"title m-default\">状态筛选</div>\n        <div class=\"status-line m-default\"></div>\n        <div class=\"status m-link\" ng-click=\"isShow=!isShow\">{{status}}</div>\n        <img class=\"triangle m-link\" ng-click=\"isShow=!isShow\" src=\"asset/core/component/search-bar/img/icon-triangle.png\">\n    </div>\n    <datepicker ng-show=\"isShowSearchBar\" class=\"data-picker\" style=\"margin-left: 5px\" date-format=\"yyyy-MM-dd\" >\n        <input class=\"data-picker-input\" ng-model=\"dateBegin\" placeholder=\"点击选择时间\" type=\"text\"/> -\n    </datepicker>\n    <datepicker ng-show=\"isShowSearchBar\" class=\"data-picker\" style=\"margin-left: 117px\" date-format=\"yyyy-MM-dd\">\n        <input class=\"data-picker-input\" ng-model=\"dateEnd\" placeholder=\"点击选择时间\" date-min-limit=\"dateBegin\" type=\"text\"/>\n    </datepicker>\n    <input ng-show=\"isShowSearchBar\" class=\"name-input\" ng-model=\"name\" placeholder=\"申请人姓名\" type=\"text\"/>\n    <div ng-show=\"isShowSearchBar\" class=\"search-btn m-link\" ng-click=\"onClickSearch()\">搜索</div>\n    <div class=\"exit m-link\" ng-class=\"{true:\'exitShow\',false:\'exitHide\'}[isShow]\" ng-mouseleave=\"isShow=false\" ng-init=\"isShow=false\">\n        <div ng-if=\"isShow\" class=\"status\" ng-click=\"changeStatus(\'全部\')\">全部</div>\n        <div ng-if=\"isShow\" class=\"status\" ng-click=\"changeStatus(\'待审批\')\">待审批</div>\n        <div ng-if=\"isShow\" class=\"status\" ng-click=\"changeStatus(\'已审批\')\">已完成</div>\n        <div ng-if=\"isShow\" class=\"status\" ng-click=\"changeStatus(\'审批未通过\')\">审批未通过</div>\n    </div>\n    <a ng-show=\"isShowExport\" href=\"{{context.exportUrl}}\" target=\"_blank\" class=\"export m-link\" ng-click=\"onClickExport();\">导出数据</a>\n    <div class=\"statistics m-link\" ng-click=\"context.onClickData()\">统计</div>\n    <div class=\"line\"></div>\n    <div class=\"table-btn m-link\" ng-click=\"context.onClickTable()\">列表</div>\n    <div class=\"goods-line\" ng-show=\"$state.includes(\'administration.goods\')\"></div>\n    <div class=\"goods m-link\" ng-show=\"$state.includes(\'administration.goods\')\" ng-click=\"context.onClickGoods()\">库存管理</div>\n</div>");
$templateCache.put("core/setting-bar/setting-bar.html","<div class=\"component-process-menu task-holder\">\n\n    <div class=\"menu-sub-title m-link\" href=\"javascript:;\" ng-click=\"onClickProcessMenu()\">\n        <div class=\"process-menu-other-holder\">\n            <span class=\"defaule-title\" style=\"font-weight: 500\">流程设置</span>\n            <img class=\"icon-right\" src=\"asset/core/component/setting-bar/img/icon-bottom.png\">\n        </div>\n    </div>\n\n    <div class=\"menu-sub-title-holder\" ng-show=\"context.showIndex||$state.includes(\'setting.index\')\">\n        <div ng-repeat=\"item in defaultItems\" class=\"menu-sub-other-title m-link\"\n             ng-class=\"{\'checked-true\':item.isChecked&&$state.includes(\'setting.index\')}\"\n             ng-click=\"onClickMenu(item,0)\">\n            <div class=\"apv-menu-holder\">\n                <!--<img class=\"menu-icon\" ng-src=\"{{item.icon}}\"/>-->\n                <span class=\"menu-title\">{{item.title}}审批流程</span>\n            </div>\n        </div>\n        <div class=\"menu-sub-other-title m-link\" ng-click=\"onClickSystemAPv()\">\n            <div class=\"apv-menu-other-holder\">\n                <!--<img class=\"menu-icon\" ng-src=\"process-setting/img/icon-system.png\"/>-->\n                <span class=\"menu-title\">系统审批</span>\n                <img class=\"icon-bottom\" src=\"asset/core/component/setting-bar/img/icon-bottom.png\">\n            </div>\n        </div>\n        <div ng-show=\"context.showNormal\" ng-repeat=\"item in menuItems\" class=\"menu-sub-title m-link \"\n             ng-class=\"{\'checked-true\':item.isChecked&&$state.includes(\'setting.index\')}\"\n             ng-click=\"onClickMenu(item,1)\">\n            <div class=\"apv-menu-holder\">\n                <img class=\"menu-icon\" ng-src=\"{{item.icon}}\"/>\n                <span class=\"menu-title\">{{item.title}}</span>\n            </div>\n        </div>\n        <div class=\"menu-sub-other-title m-link\" ng-click=\"onClickCustomApv()\" ng-if=\"moduleList.length > 0\">\n            <div class=\"apv-menu-other-holder\">\n                <!--<img class=\"menu-icon\" ng-src=\"process-setting/img/icon-module.png\"/>-->\n                <span class=\"menu-title\">自定义审批</span>\n                <img class=\"icon-bottom\" src=\"asset/core/component/setting-bar/img/icon-bottom.png\">\n            </div>\n        </div>\n        <div ng-show=\"context.showModule\" ng-repeat=\"item in moduleList\" class=\"menu-sub-title m-link checked-{{item.isChecked}}\" ng-click=\"onClickMenu(item,2)\">\n            <div class=\"apv-menu-holder\">\n                <img class=\"menu-icon\" ng-src=\"{{item.img}}\"/>\n                <span class=\"menu-title\">{{item.title}}</span>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"menu-sub-title menu-default m-link\" href=\"javascript:;\"\n         ng-class=\"{\'checked-true\':$state.includes(\'setting.auth\')}\" ng-click=\"onClickAuth()\">\n        <div class=\"process-menu-holder\">\n            <span class=\"defaule-title\" style=\"font-weight: 500\">权限设置</span>\n        </div>\n    </div>\n    <div class=\"menu-sub-title menu-default m-link\" href=\"javascript:;\"\n         ng-click=\"onClickModule()\">\n        <div class=\"process-menu-other-holder\">\n            <span class=\"defaule-title\" style=\"font-weight: 500\">板块设置</span>\n            <img class=\"icon-right\" src=\"asset/core/component/setting-bar/img/icon-bottom.png\">\n        </div>\n    </div>\n\n    <div ng-show=\"context.showSpecial||$state.includes(\'setting.trip-reimb\')||$state.includes(\'setting.card\')||$state.includes(\'setting.module\')\" class=\"menu-sub-title-holder\" ng-click=\"onClickModule()\">\n        <div class=\"menu-sub-other-title m-link menu-default\">\n            <div class=\"apv-menu-other-holder\">\n                <!--<img class=\"menu-icon\" ng-src=\"process-setting/img/icon-system.png\"/>-->\n                <span class=\"menu-title\">系统审批</span>\n                <img class=\"icon-bottom\" src=\"asset/core/component/setting-bar/img/icon-bottom.png\">\n            </div>\n        </div>\n        <div class=\"menu-sub-title m-link menu-default\" ng-class=\"{\'checked-true\':context.isContractChecked&&$state.includes(\'setting.module\')}\" ng-click=\"onClickContract()\">\n            <div class=\"apv-menu-holder\">\n                <img class=\"menu-icon\" ng-src=\"process-setting/img/icon-process-contract.png\"/>\n                <span class=\"menu-title\">合同</span>\n            </div>\n        </div>\n        <div class=\"menu-sub-title m-link menu-default\" ng-class=\"{\'checked-true\':context.isTrainChecked&&$state.includes(\'setting.module\')}\"\n             ng-click=\"onClickTrain()\">\n            <div class=\"apv-menu-holder\">\n                <img class=\"menu-icon\" ng-src=\"process-setting/img/icon-process-train.png\"/>\n                <span class=\"menu-title\">培训</span>\n            </div>\n        </div>\n        <div class=\"menu-sub-title m-link menu-default\" ui-sref=\"setting.card\" ng-class=\"{\'checked-true\':context.isCardChekced&&$state.includes(\'setting.card\')}\"\n             ng-click=\"onClickCard()\">\n            <div class=\"apv-menu-holder\">\n                <img class=\"menu-icon\" ng-src=\"process-setting/img/icon-process-card.png\"/>\n                <span class=\"menu-title\">名片</span>\n            </div>\n        </div>\n        <div class=\"menu-sub-title m-link menu-default\" ui-sref=\"setting.trip-reimb\" ng-class=\"{\'checked-true\':$state.includes(\'setting.trip-reimb\')}\">\n            <div class=\"apv-menu-holder\">\n                <img class=\"menu-icon\" ng-src=\"process-setting/img/icon-process-trip-reimb.png\"/>\n                <span class=\"menu-title\">差旅费</span>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"menu-sub-title menu-default m-link\" ui-sref=\"setting.moduleList\" href=\"javascript:;\"\n         ng-class=\"{\'checked-true\':$state.includes(\'setting.moduleList\')}\"\n         ng-click=\"onClickModuleList()\">\n        <div class=\"process-menu-holder\">\n            <span class=\"defaule-title\" style=\"font-weight: 500\">自定义审批设置</span>\n        </div>\n    </div>\n</div>");
$templateCache.put("core/toast/toast.html","<div class=\"core-component toast\" ng-class=\"{success:\'success\',error:\'error\',alert:\'alert\'}[context.toast.class]\" ng-if=\"context.show\">\n    <div class=\"ui-mask-transparent\"></div>\n    <div class=\"ui-toast\">\n        <img class=\"ui-icon-toast\" ng-src=\"{{context.toast.img}}\">\n        <div class=\"ui-toast-content\">{{context.content}}</div>\n    </div>\n</div>");
$templateCache.put("core/top-bar/top-bar.html","<div class=\"component-top-bar\">\n    <a href=\"javascript:;\" ng-if=\"false\" class=\"item attendance\" ng-click=\"onClickAttendBtn()\">考勤</a>\n    <a href=\"javascript:;\" class=\"item m-link\" ng-class=\"{ \'active\': $state.includes(\'administration.leave\') }\" ui-sref=\"administration.leave\" >请假 </a>\n    <a href=\"javascript:;\" class=\"item m-link\" ng-class=\"{ \'active\': $state.includes(\'administration.stamp\') }\" ui-sref=\"administration.stamp\" >用印</a>\n    <a href=\"javascript:;\" class=\"item m-link\" ng-class=\"{ \'active\': $state.includes(\'administration.car\') }\" ui-sref=\"administration.car\">用车</a>\n    <a href=\"javascript:;\" class=\"item m-link\" ng-class=\"{ \'active\': $state.includes(\'administration.goods\') }\" ui-sref=\"administration.goods\">物品申领</a>\n    <a href=\"javascript:;\" class=\"item m-link\" ng-class=\"{ \'active\': $state.includes(\'administration.businessCard\') }\" ui-sref=\"administration.businessCard\">名片制作</a>\n</div>");}]);