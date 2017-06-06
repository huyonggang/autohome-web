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