// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
 
 
// import ElementUI from 'element-ui';
import { Button, Select } from 'element-ui';

// import 'element-ui/lib/theme-chalk/index.css';
import vuepl from './vuepl'
// Vue.use(ElementUI);
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
// 执行vuepl 
Vue.use(vuepl);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
