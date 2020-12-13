import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
var r = require.context("../components",true,/\.route\.js/);
var arr = [{ path: '*', redirect: '/404' },//访问意料之外的路由时重定向到/personal
{
  path: '/404',
  name: '404',
  component: resolve=>(require(["@/components/HelloWorld.vue"],resolve)) 
 }];
r.keys().forEach((item) => {
  arr = arr.concat(r(item).default);
})

console.log(arr)
export default new Router({
  mode: 'history', // 后端支持可开
  routes: [

    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    ...arr
  ]
})

 