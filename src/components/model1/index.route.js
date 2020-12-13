// 自动加载pages内容，子文件夹内容。加载所有vue文件
var r = require.context('./pages',true,/.vue/);
// 路由数组
var arr = [];
 
r.keys().forEach((key,index)=> {
    var _keyarr = key.split("."); // => ["/","model","index","vue"]
    // const avue = require([`${r.resolve(r.keys()[index]).replace('./src','@')}`])
    // console.log(typeof(r.resolve(r.keys()[index]).replace('./src','@')) ,index,key,r.resolve(r.keys()[index]).replace('./src','@'))
    // console.log("@/components/"+r(key).default.path+key.split('./')[1],r.resolve(r.keys()[index]))
    // console.log(require("@/components/model1/pages/model1.third.vue"))
    console.log("@"+r.resolve(r.keys()[index]).split('./src')[1])
    // r(key).default.path =r.resolve(r.keys()[index]).split('./src/components/')[1];
    
    if (key.indexOf("index") != -1 ) {
        arr.push ( {
                     path:_keyarr[1],
                     name:r(key).default.name,
                     component:resolve=>(require(["@/components/"+r.resolve(r.keys()[index]).split('./src/components/')[1]],resolve)) 
                    //  注释的也可以用，第一种没有懒加载，第二种感觉用起来有点麻烦，要每个里面写path
                    //  component:r(key).default
                    //  component:resolve=>(require(["@/components/"+r(key).default.path+key.split('./')[1]],resolve)) 
                } )
    }else {
        arr.push({
            path:_keyarr[1]+"/"+_keyarr[2],
            name:r(key).default.name,
            component:  resolve=>(require(["@/components/"+r.resolve(r.keys()[index]).split('./src/components/')[1]],resolve)) 
            // component:r(key).default
            // component:resolve=>(require(["@/components/"+r(key).default.path+key.split('./')[1]],resolve)) 
        })
    }
})

export default arr;

function lazyLoadView(AsyncView) {
    const AsyncHandler = () => ({
      component: AsyncView,
        // A component to use while the component is loading.
      loading: require('@/components/HelloWorld.vue').default,
        // A fallback component in case the timeout is exceeded
        // when loading the component.
      error: require('@/components/HelloWorld.vue').default,
        // Delay before showing the loading component.
        // Default: 200 (milliseconds).
      delay: 200,
        // Time before giving up trying to load the component.
        // Default: Infinity (milliseconds).
      timeout: 10000
    });
    return Promise.resolve({
      functional: true,
      render(h, { data, children }) {
          // Transparently pass any props or children
          // to the view component.
        return h(AsyncHandler, data, children);
      }
    });
  }
//   const My = () => lazyLoadView(import('@/view/My.vue'));
//   const router = new VueRouter({
//     routes: [
//       {
//         path: '/my',
//         component: My
//       }
//     ]
//   })
  