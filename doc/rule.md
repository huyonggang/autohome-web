#代码风格

##目录组织
###一个页面包含多个模块或者子视图，一个独立的页面作为app文件中的一个子文件夹存在，目录结构如下:  
```
app/
	sub-app/
		js/  
		sass/  
		template/
		img/
		../ 
```
必须按照此格式，gulp才能正确编译，参见app目录下hello示例目录


##Angular模块
###使用闭包，避免变量污染
```js
(function(){
    angular
        .module('app')
        .factory('ItemService', ['$http', '$q', ItemService]);
        
    function ItemService()
    {
    
    }    
})();
```

##命令
编译开发环境版本：```gulp dev build```  
编译生产环境版本：```gulp prod build```  
即时调试：```gulp watch```  
