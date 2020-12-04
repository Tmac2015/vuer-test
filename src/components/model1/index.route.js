// 自动加载pages内容，子文件夹内容。加载所有vue文件
var r = require.context('./pages',true,/.vue/);
// 路由数组
var arr = [];

r.keys().forEach((key,index)=> {
    var _keyarr = key.split("."); // => ["/","model","index","vue"]
    // const avue = require([`${r.resolve(r.keys()[index]).replace('./src','@')}`])
  
    console.log(typeof(r.resolve(r.keys()[index]).replace('./src','@')) ,index,key,r.resolve(r.keys()[index]).replace('./src','@'))
    console.log("@/components/"+r(key).default.path+key.split('./')[1],r.resolve(r.keys()[index]))
    // console.log(require("@/components/model1/pages/model1.third.vue"))
    console.log("@"+r.resolve(r.keys()[index]).split('./src')[1])
    if (key.indexOf("index") != -1 ) {
        arr.push ( {
                     path:_keyarr[1],
                     name:r(key).default.name,
                     component:resolve=>(require(["@"+r.resolve(r.keys()[index]).split('./src')[1]],resolve)) 
                    //  component:r(key).default
                    //  component:resolve=>(require(["@/components/"+r(key).default.path+key.split('./')[1]],resolve)) 
                } )
    }else {
        arr.push({
            path:_keyarr[1]+"/"+_keyarr[2],
            name:r(key).default.name,
            // component:resolve=>(require(["@"+r.resolve(r.keys()[index]).split('./src')[1]],resolve)) 
            // component:resolve=>(require([`${r.resolve(r.keys()[index]).replace('./src','@')}`],resolve)) 
            // component:r(key).default
            component:resolve=>(require(["@/components/"+r(key).default.path+key.split('./')[1]],resolve)) 
        })
    }
})

export default arr;