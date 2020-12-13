import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
var r = require.context("../components",true,/\.route\.js/);
var arr = [];
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

 