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