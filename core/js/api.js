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