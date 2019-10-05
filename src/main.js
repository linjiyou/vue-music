import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import './common/stylus/index.styl'
// 图片懒加载
import VueLazyLoad from 'vue-lazyload'
//解决300延迟
import fastclick from 'fastclick'
fastclick.attach(document.body)
Vue.use(VueLazyLoad,{
  loadImg:require('./common/image/default.png')
})
Vue.config.productionTip = false;

new Vue({
  router,  
  render: h => h(App)
}).$mount("#app");
