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