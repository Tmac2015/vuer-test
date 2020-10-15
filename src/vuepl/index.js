 
var a = {
    install:function(vue) {
        // 混入vue实例
        console.log(vue)
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
                         
                   
                        this.$store.registerModule(name, res.default)
                    })
                  
                }
            }
        })
    }
}
module.exports = a