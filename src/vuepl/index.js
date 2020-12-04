var a = {
 
    install:function(vue) {
        // 混入vue实例
        vue.mixin({
          
            beforeCreate:function() {
                //每个页面的生命周期都会执行
                 console.log(1)
                // 我执行到某个组件，判断一下是否需要vuex   this.$options = 每个vue文件的导出内容（export default内）
                // 阻断性操作会更好
             
                if (this.$options.isVuex) {
                  
               
                    var name = this.$options.name;
                    
                    // import(/*chunkName:asada*/)  魔法注释
                    import("../store/module/"+name).then((res)=> {
                        // 动态注册vuex
                        const stores = require('vuex');
                        
                        // stores.Store.prototype.registerModule(name, res.default)

                    })
                  
                }
            },
            mounted:function() {
                     
                    let _perss = window.performance;
                    function getmb(size) {
                        return Math.floor(size/1024/1024,4)+'MB';
                    }
                    function getsec(time) {
                        return Math.floor(time/1024)+'s';
                    }
                    console.log("可用内存"+getmb(_perss.memory.jsHeapSizeLimit));
                    console.log("内存占用"+getmb(_perss.memory.usedJSHeapSize));
                    console.log("tcp链接时间"+getsec(_perss.timing.connectEnd - _perss.timing.connectStart));
                    console.log("响应时间"+getsec(_perss.timing.responseEnd - _perss.timing.responseStart));
                    window.onload=function() {
                        console.log("dom渲染耗时"+getsec(_perss.timing.domComplete - _perss.timing.domLoading));
                    }
  
  
            },
            beforeDestroy:function() {
                _perss = undefined
            }
        })
    }
}
module.exports = a