// 自动加载pages内容，子文件夹内容。加载所有vue文件
var r = require.context('./pages',true,/.vue/);
// 路由数组
var arr = [];

r.keys().forEach((key)=> {
    var _keyarr = key.split("."); // => ["/","model","index","vue"]
    if (key.indexOf("index") != -1 ) {
        arr.push ( {
                     path:_keyarr[1],
                     component:r(key).default
                } )
    }else {
        arr.push({
            path:_keyarr[1]+"/"+_keyarr[2],
            component:r(key).default
        })
    }
})

export default arr;