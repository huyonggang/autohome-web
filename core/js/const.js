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
                END_POINT: 'http://119.23.79.196/api/admin',
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
                    ADVERTISING_ADD:"addAdminAdvertising",
                    ADVERTISING_UPDATE:"updateAdminAdvertising",
                    ADVERTISING_DELETE:"deleteAdminAdvertising",
                    ADVERTISING_LIST:"getAllAdminAdvertising",
                    INVOICE_LIST:"getUserInvoiceList",
                    INVOICE_UPDATE:"updateUserInvoiceStatus"

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